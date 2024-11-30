import React, { ChangeEvent, useState } from "react";
import "./EditRecipe.css"; // Import CSS for styling

interface Recipe {
  name: string;
  user: string;
  ingredients: string;
  instructions: string;
}

const EditRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>({
    name: "%DISH_NAME%",
    user: "%USER_NAME%",
    ingredients:
      "Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae...",
    instructions:
      "Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae...",
  });

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save changes logic (e.g., API call)
    alert("Changes saved!");
  };

  const handleCancel = () => {
    // Logic for canceling (navigate back or discard changes)
    alert("Changes discarded!");
    window.history.back();
  };

  return (
    <div className="edit-recipe-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        &#8592;
      </button>

      {/* Recipe Header */}
      <h2>
        {recipe.name} by {recipe.user}
      </h2>

      {/* Image Placeholder */}
      <div className="recipe-image-placeholder"></div>

      {/* Ingredients Section */}
      <div className="recipe-section">
        <h3>Ingredients:</h3>
        <textarea
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        />
      </div>

      {/* Cooking Instructions Section */}
      <div className="recipe-section">
        <h3>How to cook:</h3>
        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        />
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save-button" onClick={handleSave}>
          Save changes
        </button>
      </div>
    </div>
  );
};

export default EditRecipe;
