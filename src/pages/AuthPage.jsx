import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import "../css/AuthPage.css";

const VIEWS = { LOGIN: "login", REGISTER: "register", RESET: "reset" };

export default function AuthPage() {
  const { login, register, loginWithGoogle, resetPassword, setAuthError } =
    useAuth();

  const [view, setView] = useState(VIEWS.LOGIN);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resetSent, setResetSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError(null);
    setResetSent(false);
    setShowPassword(false);
  }

  function changeView(v) {
    clearForm();
    setView(v);
  }

  function parseFirebaseError(code) {
    const map = {
      "auth/user-not-found": "Nenhuma conta encontrada com este e-mail.",
      "auth/wrong-password": "Senha incorreta. Tente novamente.",
      "auth/invalid-credential": "E-mail ou senha incorretos.",
      "auth/email-already-in-use": "Este e-mail já está cadastrado.",
      "auth/weak-password": "A senha deve ter pelo menos 6 caracteres.",
      "auth/invalid-email": "Formato de e-mail inválido.",
      "auth/too-many-requests": "Muitas tentativas. Aguarde alguns minutos.",
      "auth/popup-closed-by-user": "Login com Google cancelado.",
      "auth/network-request-failed": "Sem conexão. Verifique sua internet.",
    };
    return map[code] || "Ocorreu um erro. Tente novamente.";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (view === VIEWS.REGISTER) {
      if (!name.trim()) return setError("Informe seu nome.");
      if (password !== confirmPassword)
        return setError("As senhas não coincidem.");
      if (password.length < 6)
        return setError("A senha deve ter pelo menos 6 caracteres.");
    }

    setLoading(true);
    try {
      if (view === VIEWS.LOGIN) {
        await login(email, password);
      } else if (view === VIEWS.REGISTER) {
        await register(name.trim(), email, password);
      } else if (view === VIEWS.RESET) {
        await resetPassword(email);
        setResetSent(true);
      }
    } catch (err) {
      setError(parseFirebaseError(err.code));
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      setError(parseFirebaseError(err.code));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Logo / Branding */}
        <div className="auth-brand">
          <span className="auth-brand-emoji">📊</span>
          <span className="auth-brand-name">DataSci Academy</span>
        </div>

        {/* Título dinâmico */}
        <h2 className="auth-title">
          {view === VIEWS.LOGIN && "Entrar na plataforma"}
          {view === VIEWS.REGISTER && "Criar conta"}
          {view === VIEWS.RESET && "Recuperar senha"}
        </h2>

        {/* Mensagem de sucesso no reset */}
        {resetSent && (
          <div className="auth-alert auth-alert--success">
            ✅ E-mail de recuperação enviado! Verifique sua caixa de entrada.
          </div>
        )}

        {/* Erro */}
        {error && (
          <div className="auth-alert auth-alert--error" role="alert">
            {error}
          </div>
        )}

        {/* Formulário */}
        {!resetSent && (
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {view === VIEWS.REGISTER && (
              <div className="auth-field">
                <label htmlFor="auth-name">Nome completo</label>
                <input
                  id="auth-name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  disabled={loading}
                />
              </div>
            )}

            <div className="auth-field">
              <label htmlFor="auth-email">E-mail</label>
              <input
                id="auth-email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                disabled={loading}
              />
            </div>

            {view !== VIEWS.RESET && (
              <div className="auth-field">
                <label htmlFor="auth-password">Senha</label>
                <div className="auth-password-wrapper">
                  <input
                    id="auth-password"
                    type={showPassword ? "text" : "password"}
                    placeholder={
                      view === VIEWS.REGISTER
                        ? "Mínimo 6 caracteres"
                        : "Sua senha"
                    }
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete={
                      view === VIEWS.LOGIN ? "current-password" : "new-password"
                    }
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="auth-toggle-password"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={
                      showPassword ? "Ocultar senha" : "Mostrar senha"
                    }
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
            )}

            {view === VIEWS.REGISTER && (
              <div className="auth-field">
                <label htmlFor="auth-confirm">Confirmar senha</label>
                <div className="auth-password-wrapper">
                  <input
                    id="auth-confirm"
                    type={showPassword ? "text" : "password"}
                    placeholder="Repita a senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    disabled={loading}
                  />
                </div>
              </div>
            )}

            {view === VIEWS.LOGIN && (
              <div className="auth-forgot">
                <button type="button" onClick={() => changeView(VIEWS.RESET)}>
                  Esqueceu a senha?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="auth-btn auth-btn--primary"
              disabled={loading}
            >
              {loading ? (
                <span className="auth-spinner" aria-hidden="true" />
              ) : (
                <>
                  {view === VIEWS.LOGIN && "Entrar"}
                  {view === VIEWS.REGISTER && "Criar conta"}
                  {view === VIEWS.RESET && "Enviar e-mail de recuperação"}
                </>
              )}
            </button>
          </form>
        )}

        {/* Google login
        {view !== VIEWS.RESET && !resetSent && (
          <>
            <div className="auth-divider">
              <span>ou</span>
            </div>
            <button
              className="auth-btn auth-btn--google"
              onClick={handleGoogle}
              disabled={loading}
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Continuar com Google
            </button>
          </>
        )} */}

        {/* Troca de view */}
        <div className="auth-switch">
          {view === VIEWS.LOGIN && (
            <p>
              Não tem conta?{" "}
              <button type="button" onClick={() => changeView(VIEWS.REGISTER)}>
                Cadastre-se grátis
              </button>
            </p>
          )}
          {(view === VIEWS.REGISTER || view === VIEWS.RESET) && (
            <p>
              <button type="button" onClick={() => changeView(VIEWS.LOGIN)}>
                ← Voltar para o login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
