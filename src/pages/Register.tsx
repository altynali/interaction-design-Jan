import "./Register.css"; // Import the CSS file for styling

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        {/* Placeholder for image */}
        <div className="register-image-placeholder"></div>

        {/* Input Fields */}
        <label>Email</label>
        <input type="email" placeholder="E-mail" />

        <label>Username</label>
        <input type="text" placeholder="Username" />

        <label>Password</label>
        <input type="password" placeholder="Password" />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" />

        {/* Register Button */}
        <button className="register-button">Register</button>

        {/* Link to Login */}
        <p className="login-link">
          Already registered? <a href="/login">Log in!</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
