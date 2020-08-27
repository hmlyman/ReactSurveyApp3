import React from "react";
import { useInputChange } from "../../Hooks/useInputChangeHook";
import { isTextInput } from "../../validators";

export const ShortAnswerInput = (props) => {
  const inputType = isTextInput(props.type) ? props.type : "textarea";
  const { value, handleChange } = useInputChange(
    props.defaultValue,
    props.triggerCallback,
    inputType
  );
  const inputProps = {
    className: props.className ? props.className : "form-control",
    onChange: handleChange,
    value: value,
    required: props.required,
    type: inputType,
    placeholder: props.placeholder,
    name: props.name,
  };
  return (
    <>
      <div id={props.name}>
        <h5>{props.question}</h5>
        <textarea {...inputProps} />
      </div>
    </>
  );
};
