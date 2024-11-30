import React, { ChangeEvent, FormEvent, useState } from "react";
import "./AddRecipe.css"; // Import CSS for styling

interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
  image: File | null;
}

const AddRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>({
    name: "",
    ingredients: "",
    instructions: "",
    image: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      image: file,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Recipe submitted:", recipe);
    // Add logic to send the recipe to the backend
    alert("Recipe added successfully!");
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div className="add-recipe-container">
      {/* Back Button */}
      <button className="back-button" onClick={handleCancel}>
        &#8592;
      </button>

      <h2>Add New Recipe</h2>

      <form className="add-recipe-form" onSubmit={handleSubmit}>
        {/* Recipe Name */}
        <label htmlFor="name">Recipe Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          required
        />

        {/* Ingredients */}
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />

        {/* Instructions */}
        <label htmlFor="instructions">How to Cook:</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          required
        />

        {/* Image Upload */}
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {/* Action Buttons */}
        <div className="action-buttons">
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
