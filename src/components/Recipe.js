import React from "react";
import RecipeItem from "./RecipeItem";

const Recipe = (props) => {
  const { recipe } = props;

  return (
    <div className="card-columns">
      {recipe.map((recipe) => (
        <RecipeItem
          key={Math.random() * 100}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default Recipe;
