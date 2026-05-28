// import { createContext, useContext, useState, useEffect } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   updateProfile,
//   sendPasswordResetEmail,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "../firebase";

// const AuthContext = createContext(null);

// const auth = getAuth();
// const googleProvider = new GoogleAuthProvider();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [authLoading, setAuthLoading] = useState(true);
//   const [authError, setAuthError] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       setUser(firebaseUser);
//       setAuthLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   async function ensureUserDoc(firebaseUser) {
//     const ref = doc(db, "users", firebaseUser.uid);
//     const snap = await getDoc(ref);
//     if (!snap.exists()) {
//       await setDoc(ref, {
//         xp: 0,
//         level: 1,
//         modules: {},
//         createdAt: serverTimestamp(),
//         displayName: firebaseUser.displayName || "",
//         email: firebaseUser.email,
//       });
//     }
//   }

//   async function register(name, email, password) {
//     setAuthError(null);
//     const credential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password,
//     );
//     await updateProfile(credential.user, { displayName: name });
//     await ensureUserDoc({ ...credential.user, displayName: name });
//     return credential.user;
//   }

//   async function login(email, password) {
//     setAuthError(null);
//     const credential = await signInWithEmailAndPassword(auth, email, password);
//     await ensureUserDoc(credential.user);
//     return credential.user;
//   }

//   async function loginWithGoogle() {
//     setAuthError(null);
//     const credential = await signInWithPopup(auth, googleProvider);
//     await ensureUserDoc(credential.user);
//     return credential.user;
//   }

//   async function logout() {
//     await signOut(auth);
//   }

//   async function resetPassword(email) {
//     setAuthError(null);
//     await sendPasswordResetEmail(auth, email);
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         authLoading,
//         authError,
//         setAuthError,
//         register,
//         login,
//         loginWithGoogle,
//         logout,
//         resetPassword,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
