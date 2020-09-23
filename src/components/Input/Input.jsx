import React from "react";

export const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        value={props.input[`${props.id}`]}
        onChange={props.handleInput}
      />
    </div>
  );
};

export default Input;
