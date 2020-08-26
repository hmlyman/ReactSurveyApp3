import React from "react";
import { useInputChange } from "../../hooks";
import { isTextInput } from "../../validators";

export const CheckboxInput = (props) => {
  const { object, question } = props;
  const inputType = isTextInput(props.type) ? props.type : "checkbox";
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
    name: props.name ? props.name : `${props.type}_${props.key}`,
    checked: false,
  };

  return (
    <>
      <div id={props.name} className="container">
        <h5>{question}</h5>

        {object.options.map((data, index) => {
          return (
            <div key={`${props.type}-${index}`}>
              <input
                {...inputProps}
                className="form-check-input"
                value={data.value}
                id={`${props.name}-${index}`}
              />
              <label
                className="form-check-label"
                htmlFor={`${props.name}-${index}`}
              >
                {data.label}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CheckboxInput;
