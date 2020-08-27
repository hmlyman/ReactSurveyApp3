import React from "react";
import { useInputChange } from "../../hooks";
import { isTextInput } from "../../validators";

export const RadioButtonInput = (props) => {
  const inputType = isTextInput(props.type) ? props.type : "";
  const { value, handleChange } = useInputChange(
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
    name: props.name ? props.name : `${props.type}_${props.key}`,
  };

  return (
    <>
      <div id={props.name}>
        <h5 className="radio-inline control-label ">{props.question}</h5>
        <div className="form-check">
          {props.options.map((data, index) => {
            return (
              <div key={`${props.type}-${index}`}>
                <input
                  {...inputProps}
                  className="form-check-input"
                  id={`${props.name}-${index}`}
                />
                <label
                  value={data.value}
                  className="radio-inline control-label"
                  htmlFor={`${props.name}-${index}`}
                >
                  {data.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
