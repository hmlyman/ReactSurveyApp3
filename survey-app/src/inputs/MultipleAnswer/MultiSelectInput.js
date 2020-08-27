import React from "react";
import { useInputChange } from "../../hooks";
import { isTextInput } from "../../validators";

export const MultiSelectInput = (props) => {
  console.log(props);
  const inputType = isTextInput(props.type) ? props.type : "multiSelect";
  const { handleChange } = useInputChange(
    props.defaultValue,
    props.triggerCallback,
    inputType
  );
  const inputProps = {
    className: props.className ? props.className : "form-control",
    onChange: handleChange,
    value: props.value,
    required: props.required,
    options: props.options,
    question: props.question,
    type: inputType,
    name: props.name ? props.name : `${inputType}_${props.key}`,
  };

  return (
    <>
      <div id={props.name}>
        <h5>{props.question}</h5>

        <select {...inputProps} name={props.name} multiple={props.multiple}>
          {props.options.map((data, index) => {
            return (
              <option
                value={data.value}
                className="select"
                key={`${props.type}-${index}`}
              >
                {data.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
