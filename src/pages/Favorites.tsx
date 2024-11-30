import { useState } from "react";
import "./Favorites.css"; // Import CSS for styling

function Favorites() {
  const [favorites, setFavorites] = useState([
    { id: 1, name: "Dish Name 1", user: "Posted by User 1", rating: 4 },
    { id: 2, name: "Dish Name 2", user: "Posted by User 2", rating: 5 },
    { id: 3, name: "Dish Name 3", user: "Posted by User 3", rating: 3 },
    { id: 4, name: "Dish Name 4", user: "Posted by User 4", rating: 5 },
  ]);

  const handleDelete = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== id)
    );
  };

  return (
    <div className="favorites-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>
        &#8592;
      </button>

      {/* Header */}
      <h2>Your Favourite Recipes:</h2>

      {/* Favorites List */}
      <div className="favorites-list">
        {favorites.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <div className="recipe-image-placeholder"></div>
            <div className="recipe-info">
              <h3>{recipe.name}</h3>
              <p>{recipe.user}</p>
              <p>Rating: {recipe.rating}</p>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDelete(recipe.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
