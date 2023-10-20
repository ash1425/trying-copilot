import "./login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const passwordValidationResult = validatePassword(password);
    if (passwordValidationResult !== true) {
      setPasswordError(passwordValidationResult);
      return;
    }
    setPasswordError("");
    // TODO: Submit login form
  };

  const validateEmail = (email: string) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password should be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password should contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password should contain at least one lowercase letter.";
    }
    if (!/\d/.test(password)) {
      return "Password should contain at least one numeric digit.";
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return "Password should contain at least one special character.";
    }
    if (/\s/.test(password)) {
      return "Password should not contain any spaces.";
    }
    return true;
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required className={passwordError ? "error" : ""} />
        {passwordError && <div className="error">{passwordError}</div>}
        <button type="submit">Log In</button>
      </form>
    </main>
  );
};

export default Login;