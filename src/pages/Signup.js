import React, { useState } from 'react';
import './Signup.css'; // Importing the Signup styling

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('volunteer'); // Default is Volunteer

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Mock API Call to handle signup
    console.log({ email, password, role });

    // Redirecting user to login page after signup
    window.location.href = '/login';
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

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

        {/* Confirm Password Input */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="signup-button">
          Sign Up
        </button>

        {/* Login Link */}
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
