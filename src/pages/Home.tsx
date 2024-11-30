import React, { useState } from "react";
import "./Home.css"; // Import CSS for styling

// Define a type for the Recipe object
interface Recipe {
  id: number;
  name: string;
  user: string;
  rating: number;
}

const Home: React.FC = () => {
  const [recipes] = useState<Recipe[]>([
    { id: 1, name: "Dish Name 1", user: "User 1", rating: 4 },
    { id: 2, name: "Dish Name 2", user: "User 2", rating: 5 },
  ]);

  return (
    <div className="home-container">
      {/* Header with search bar and profile button */}
      <div className="home-header">
        <input type="text" placeholder="Search:" className="search-bar" />
        <button className="search-button">Search</button>
      </div>

      {/* Recipe List */}
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <div className="recipe-image-placeholder"></div>
            <div className="recipe-info">
              <h3>{recipe.name}</h3>
              <p>by: {recipe.user}</p>
              <p>Rating: {recipe.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
