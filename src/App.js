import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = async () => {
    const result = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${App_Id}&app_key=${App_Key}`
    );

    setRecipe(result.data.hits);
  };

  const App_Id = "2544db3d";
  const App_Key = "40d04b80dfc8cc3705a76cceeef240b5";

  const Oninputchange = (e) => {
    setSearch(e.target.value);
  };

 const OnSearchrecipe = (e) => {
 getRecipes();
 }

  return (
    <div>
      <Header search={search} Oninputchange={Oninputchange}  OnSearchrecipe={OnSearchrecipe}/>
      <div className="container">
        <Recipe recipe={recipe} />
      </div>
    </div>
  );
}

export default App;
