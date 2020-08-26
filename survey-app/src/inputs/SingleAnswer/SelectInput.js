import React from "react";
import { useInputChange } from "../../hooks";
import { isTextInput } from "../../validators";

export const SelectInput = (props) => {
  const { object } = props;
  const inputType = isTextInput(props.type) ? props.type : "select";
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
    name: props.name ? props.name : `${inputType}_${props.key}`,
  };

  return (
    <>
      <div id={props.name}>
        <h5>{props.question}</h5>
        <select {...inputProps} name={props.name}>
          <option hidden value>
            {" "}
            Select One{" "}
          </option>
          {object.options.map((data, index) => {
            return (
              <option
                value={data.value}
                id={`${object.name}-${index}`}
                key={`${object.type}-${index}`}
                className="form-check"
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
