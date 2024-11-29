import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('volunteer'); // Default role is Volunteer

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock API Call
    console.log({ email, password, role });

    // Redirect based on role
    if (role === 'ngo') {
      window.location.href = '/ngo-dashboard';
    } else {
      window.location.href = '/volunteer-dashboard';
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {/* Role Selection */}
        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="volunteer"
              checked={role === 'volunteer'}
              onChange={(e) => setRole(e.target.value)}
            />
            Volunteer
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="ngo"
              checked={role === 'ngo'}
              onChange={(e) => setRole(e.target.value)}
            />
            NGO
          </label>
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-button">
          Login
        </button>

        {/* Sign-Up Link */}
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
