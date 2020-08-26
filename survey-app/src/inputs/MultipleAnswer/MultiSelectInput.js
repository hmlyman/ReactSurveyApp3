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
    question: props.question,
    type: inputType,
    name: props.name ? props.name : `${props.type}_${props.key}`,
  };

  return (
    <>
      <div id={props.name} className="container">
        <h5>{props.question}</h5>
        <select {...inputProps} name={props.name} multiple={props.multiple}>
          <option hidden value>
            Select All That Apply
          </option>
          {object.options.map((data, index) => {
            return (
              <option value={data.value} className="form-check">
                {data.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
