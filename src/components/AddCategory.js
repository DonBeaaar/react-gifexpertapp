import React, { useState } from "react";
import PropType from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState(""); // Se debe inicializar porque su estado por defecto es undefined

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 2) {
      // EL SETCATEGORIES RECIBE UN CALLBACK CON EL ESTADO ANTERIOR
      setCategories((categoriesPrev) => [inputValue,...categoriesPrev ]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropType.func.isRequired,
};

export default AddCategory;
