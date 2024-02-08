import React from "react";

export const Input = ({ type = "text", label, name, id,onChange,className }) => {
  return (
    <>
      <label htmlFor={name}>{label} </label>
      <input type={type} name={name} id={id} className={className} onChange={onChange} />
    </>
  );
};
