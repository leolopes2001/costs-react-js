import React from "react";

const Select = ({ text, categories, name }) => {
  console.log(categories);
  return (
    <>
      <label>{text}</label>
      <select id={name} name={name}>
        {categories.length > 0 ? (
          categories.map((el, index) => <option key={index}>{el.name}</option>)
        ) : (
          <option>Carregando...</option>
        )}
      </select>
    </>
  );
};

export default Select;
