import React, { useEffect, useState } from "react";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../fire";
import Home from "../auth/Home";

const getAuthErrorMessage = (error) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "An account already exists with this email.";
    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "The email or password is incorrect.";
    case "auth/weak-password":
      return "Use a password with at least six characters.";
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a moment and try again.";
    default:
      return "Something went wrong. Please try again.";
  }
};

function LoginForm() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const switchMode = (loginMode) => {
    setIsLoginMode(loginMode);
    setErrorMessage("");
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setMessage("");

    if (!isLoginMode && password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence,
      );

      if (isLoginMode) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const credential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        await updateProfile(credential.user, { displayName: fullName });
      }
    } catch (error) {
      setErrorMessage(getAuthErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setErrorMessage("Enter your email address first.");
      return;
    }

    setErrorMessage("");
    setMessage("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (error) {
      setErrorMessage(getAuthErrorMessage(error));
    }
  };

  if (isLoading) {
    return <main className="auth-card auth-loading">Loading...</main>;
  }

  if (user) {
    return <Home user={user} onSignOut={() => signOut(auth)} />;
  }

  return (
    <main className="auth-shell">
      <section className="auth-card" aria-labelledby="auth-title">
      <div className="auth-brand">
        <span className="brand-mark"> 💀</span>
        <span>Zara Chabby</span>
      </div>

      <div className="auth-heading">
        <p className="eyebrow">☁️☁️☁️</p>
        <h1 id="auth-title">
          {isLoginMode ? "Login" : "Sign Up"}
        </h1>
        <p className="auth-subtitle">
          {isLoginMode
            ? "Sign in to continue your journey with us."
            : "Create your account and make it yours."}
        </p>
      </div>

      <div className="auth-tabs" role="tablist" aria-label="Authentication mode">
        <button
          type="button"
          className={isLoginMode ? "active" : ""}
          role="tab"
          aria-selected={isLoginMode}
          onClick={() => switchMode(true)}
        >
          Login
        </button>
        <button
          type="button"
          className={!isLoginMode ? "active" : ""}
          role="tab"
          aria-selected={!isLoginMode}
          onClick={() => switchMode(false)}
        >
          Sign up
        </button>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {!isLoginMode && (
          <label>
            Full name
            <input
              type="text"
              placeholder="Your name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            />
          </label>
        )}

        <label>
          Email address
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength="6"
            required
          />
        </label>

        {!isLoginMode && (
          <label>
            Confirm password
            <input
              type="password"
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              minLength="6"
              required
            />
          </label>
        )}

        {isLoginMode && (
          <div className="form-meta">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <button type="button" onClick={handlePasswordReset}>
              Forgot password?
            </button>
          </div>
        )}

        {(errorMessage || message) && (
          <p className={errorMessage ? "auth-message error" : "auth-message"}>
            {errorMessage || message}
          </p>
        )}

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Please wait..." : isLoginMode ? "Login" : "Create account"}
          <span aria-hidden="true">&#8594;</span>
        </button>

        <p className="auth-switch">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => switchMode(!isLoginMode)}
          >
            {isLoginMode ? "Sign up" : "Login"}
          </button>
        </p>
      </form>
      </section>
    </main>
  );
}

export default LoginForm;
