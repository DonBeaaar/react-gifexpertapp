import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
// import ReactDOM from 'react-dom';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  // const handleAdd = () => {
  //   const categoryAdd = "Dragon Ball";
  //   // Añadir un elemento al array
  //   //   setCategories(categories.push(categoryAdd)); NOOOOO
  //   setCategories([...categories, categoryAdd]); // -> SII -> Investigar este operador
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
