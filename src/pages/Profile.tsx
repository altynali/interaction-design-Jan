import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Profile.css"; // Import CSS for styling

const Profile: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  const user = {
    name: "%USER_NAME%",
    registrationDate: "%REG_DATE%",
  };

  const handleLogout = () => {
    // Add logout logic here (e.g., clearing user data, redirecting to login)
    alert("Logged out!");
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="profile-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &#8592;
      </button>

      {/* Profile Info */}
      <div className="profile-header">
        <div className="profile-image-placeholder"></div>
        <h2>{user.name}</h2>
        <p>Registered: {user.registrationDate}</p>
      </div>

      {/* Action Buttons */}
      <div className="profile-actions">
        <button
          className="action-button"
          onClick={() => navigate("/add-recipe")}
        >
          Add New Recipe
        </button>
        <button
          className="action-button"
          onClick={() => navigate("/favorites")}
        >
          Favourites
        </button>
        <button
          className="action-button"
          onClick={() => navigate("/my-recipes")}
        >
          My Recipes
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
