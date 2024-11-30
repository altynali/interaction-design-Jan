import { useState } from "react";
import "./MyRecipes.css"; // Import CSS for styling

function MyRecipes() {
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Dish Name 1", user: "Posted by User 1", rating: 4 },
    { id: 2, name: "Dish Name 2", user: "Posted by User 2", rating: 5 },
    { id: 3, name: "Dish Name 3", user: "Posted by User 3", rating: 3 },
    { id: 4, name: "Dish Name 4", user: "Posted by User 4", rating: 5 },
  ]);

  const handleDelete = (id: number) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  return (
    <div className="my-recipes-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        &#8592;
      </button>

      {/* Header */}
      <h2>Your Recipes:</h2>

      {/* Recipes List */}
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <div className="recipe-image-placeholder"></div>
            <div className="recipe-info">
              <h3>{recipe.name}</h3>
              <p>{recipe.user}</p>
              <p>Rating: {recipe.rating}</p>
            </div>
            <div className="recipe-actions">
              <button
                className="delete-button"
                onClick={() => handleDelete(recipe.id)}
              >
                Delete
              </button>
              <button className="edit-button">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyRecipes;
