import "./Login.css"; // Import the CSS file for styling

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* Placeholder for image */}
        <div className="login-image-placeholder"></div>

        {/* Email Input */}
        <label>Email</label>
        <input type="email" placeholder="E-mail" />

        {/* Password Input */}
        <label>Password</label>
        <input type="password" placeholder="Password" />

        {/* Forgot Password Link */}
        <a href="/reset-password" className="forgot-password">
          Forgot your password?
        </a>

        {/* Buttons */}
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}

export default Login;
