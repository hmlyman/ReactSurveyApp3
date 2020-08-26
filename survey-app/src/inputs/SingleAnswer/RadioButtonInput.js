import React from "react";
import { useInputChange } from "../../hooks";
import { isTextInput } from "../../validators";

export const RadioButtonInput = (props) => {
  const { object } = props;
  const inputType = isTextInput(props.type) ? props.type : "";
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
    question: props.question,
    type: inputType,
    name: props.name ? props.name : `${props.type}_${props.key}`,
  };

  return (
    <>
      <div id={props.name}>
        <div className={`form-check ${props.className}`}>
          <h5 className="radio-inline control-label ">{props.question}</h5>
          {object.options.map((data, index) => {
            return (
              <div key={`${props.type}-${index}`}>
                <form>
                  <input
                    {...inputProps}
                    className="form-check-input"
                    id={`${props.name}-${index}`}
                  />
                  <label
                    className="radio-inline control-label"
                    htmlFor={`${props.name}-${index}`}
                  >
                    {data.label}
                  </label>
                </form>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
