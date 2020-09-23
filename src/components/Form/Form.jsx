import React, { useContext } from "react";
import { InputContext } from "../../context/InputProvider";
import inputState from "../../hooks/inputState";

import Input from "../Input/Input";

const Form = () => {
  const { state, addValue } = useContext(InputContext);
  const [input, handleInput, reset] = inputState(state.initialInputs);

  const handleSubmit = (e) => {
    e.preventDefault();
    addValue(input);
    reset();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-10">
        <form onSubmit={handleSubmit}>
          {state.inputsValue.map((i, idx) => (
            <Input {...i} input={input} handleInput={handleInput} />
          ))}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
