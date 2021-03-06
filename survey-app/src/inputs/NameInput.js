import React from "react";
import { useInputChange } from "../Hooks/useInputChangeHook";
import { isTextInput } from "../validators";

export const NameInput = (props) => {
  const inputType = isTextInput(props.type) ? props.type : "text";
  const { handleChange } = useInputChange(
    props.defaultValue,
    props.triggerCallback,
    inputType
  );

  const inputProps = {
    className: props.className ? props.className : "form-control",
    onChange: handleChange,
    required: props.required,
    question: props.question,
    placeholder: props.placeholder,
    type: inputType,
    options: props.options,
    name: props.name ? props.name : `${inputType}_${props.key}`,
  };

  return (
    <>
      <div id={props.name}>
        <input {...inputProps} required={props.required} />
      </div>
    </>
  );
};
