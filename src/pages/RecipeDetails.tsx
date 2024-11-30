import { useState } from "react";
import "./RecipeDetails.css"; // Import CSS for styling

function RecipeDetails() {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="recipe-details-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        &#8592;
      </button>

      {/* Recipe Header */}
      <div className="recipe-header">
        <h2>%DISH_NAME% by %USER_NAME%</h2>
      </div>

      {/* Image Placeholder */}
      <div className="recipe-image-placeholder">%DISH_PHOTO%</div>

      {/* Ingredients Section */}
      <div className="recipe-section">
        <h3>Ingredients:</h3>
        <p>
          Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae
          legendos at vix ad putent delectus delicata usu. Vidit dissenti eos cu
          eum.
        </p>
      </div>

      {/* Cooking Instructions Section */}
      <div className="recipe-section">
        <h3>How to cook:</h3>
        <p>
          Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae
          legendos at vix ad putent delectus delicata usu. Vidit dissenti eos cu
          eum.
        </p>
      </div>

      {/* Rating Section */}
      <div className="recipe-rating">
        <h3>Rate me!</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? "filled" : ""}`}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <p>Current Rate: {rating}</p>
      </div>

      {/* Save Button */}
      <button className="save-button">Save Me!</button>
    </div>
  );
}

export default RecipeDetails;
