import React, { useState } from "react";

function LoginForm() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <section className="auth-card" aria-labelledby="auth-title">
      <div className="auth-brand">
        <span className="brand-mark">Z</span>
        <span>Zara Chabby</span>
      </div>

      <div className="auth-heading">
        <p className="eyebrow">Welcome back</p>
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
          onClick={() => setIsLoginMode(true)}
        >
          Login
        </button>
        <button
          type="button"
          className={!isLoginMode ? "active" : ""}
          role="tab"
          aria-selected={!isLoginMode}
          onClick={() => setIsLoginMode(false)}
        >
          Sign up
        </button>
      </div>

      <form className="auth-form">
        {!isLoginMode && (
          <label>
            Full name
            <input type="text" placeholder="Your name" required />
          </label>
        )}

        <label>
          Email address
          <input type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter your password" required />
        </label>

        {!isLoginMode && (
          <label>
            Confirm password
            <input type="password" placeholder="Repeat your password" required />
          </label>
        )}

        {isLoginMode && (
          <div className="form-meta">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#">Forgot password?</a>
          </div>
        )}

        <button type="submit" className="submit-button">
          {isLoginMode ? "Login" : "Create account"}
          <span aria-hidden="true">&#8594;</span>
        </button>

        <p className="auth-switch">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLoginMode(!isLoginMode)}
          >
            {isLoginMode ? "Sign up" : "Login"}
          </button>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;
