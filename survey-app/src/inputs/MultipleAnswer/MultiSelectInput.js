import React from "react";
import { useInputChange } from "../../hooks";
import { isTextInput } from "../../validators";

export const MultiSelectInput = (props) => {
  const { object } = props;
  const inputType = isTextInput(props.type) ? props.type : "multiSelect";
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
    options: props.options,
    question: props.question,
    type: inputType,
    name: props.name ? props.name : `${inputType}_${props.key}`,
  };
  console.log(value);
  return (
    <>
      <div id={object.name} className="container">
        <h5>{props.question}</h5>
        <select {...inputProps} name={object.name} multiple={object.multiple}>
          <option hidden value>
            Select All That Apply
          </option>
          {props.options.map((data, index) => {
            return (
              <option
                value={data.value}
                className="form-check"
                key={`$object.type}-${index}`}
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
