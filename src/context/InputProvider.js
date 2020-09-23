import React, { useState, createContext } from "react";

export const InputContext = createContext();

const InputProvider = (props) => {
  const inputsValue = [
    {
      id: "name",
      label: "Name",
      placeholder: "Your first name",
      type: "text",
      maxLength: 20,
    },
    {
      id: "surname",
      label: "Surname",
      placeholder: "Your last name",
      type: "text",
      maxLength: 40,
    },
  ];

  const initialInputs = {};
  inputsValue.forEach((input) => (initialInputs[input.id] = ""));

  const [state, setState] = useState({
    inputsValue: inputsValue,
    initialInputs: initialInputs,
    values: [],
  });

  const addValue = (data) => {
    console.log("entra provider");
    const newValues = state.values;
    newValues.push(data);
    setState({
      ...state,
      values: newValues,
    });
  };

  return (
    <InputContext.Provider value={{ state, addValue }}>
      {props.children}
    </InputContext.Provider>
  );
};

export default InputProvider;
