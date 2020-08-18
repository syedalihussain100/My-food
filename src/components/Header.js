import React from "react";

const Recipe = (props) => {
  const { search, Oninputchange, OnSearchrecipe } = props;

  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <span className="material-icons brand-icons">restaurant</span>Food
        Recipe
      </h1>

      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={Oninputchange}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={OnSearchrecipe}>Search Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
