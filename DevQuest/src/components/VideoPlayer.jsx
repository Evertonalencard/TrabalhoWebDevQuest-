import { useState } from "react";
import "../css/VideoModulo.css";
function VideoPlayer({ videoId, title, code, language = "python" }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="video-module">
      {title && <h3 className="video-module__title">{title}</h3>}

      {/* ── YouTube embed ── */}
      <div className="video-module__embed-wrapper">
        <iframe
          className="video-module__iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || "Vídeo da aula"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* ── Code toggle bar ── */}
      {code && (
        <div className="video-module__code-section">
          <div className="video-module__code-header">
            <span className="video-module__lang-badge">{language}</span>
            <button
              type="button"
              className="video-module__toggle-btn"
              onClick={() => setShowCode((v) => !v)}
            >
              {showCode ? "▲ Ocultar código" : "▼ Ver código-fonte"}
            </button>
            {showCode && (
              <button
                type="button"
                className={`video-module__copy-btn ${copied ? "copied" : ""}`}
                onClick={handleCopy}
              >
                {copied ? "✓ Copiado!" : "Copiar"}
              </button>
            )}
          </div>

          {showCode && (
            <pre className="video-module__code-block">
              <code>{code}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
