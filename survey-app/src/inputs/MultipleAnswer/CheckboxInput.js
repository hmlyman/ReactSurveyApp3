import React, { useState, useEffect } from "react";
import { useInputChange } from "../../Hooks/useInputChangeHook";
import { isTextInput } from "../../validators";

export const CheckboxInput = (props) => {
  const { question } = props;
  const inputType = isTextInput(props.type) ? props.type : "checkbox";
  const { handleChange } = useInputChange(
    props.defaultValue,
    props.triggerCallback,
    inputType
  );
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    console.log("Checked: ", checkedItems);
  }, [checkedItems]);

  const inputProps = {
    className: props.className ? props.className : "form-control",
    onChange: handleChange,
    value: props.value,
    required: props.required,
    options: props.options,
    type: inputType,
    name: props.name ? props.name : `${props.type}_${props.key}`,
  };
  const handleCheckbox = (event) => {
    const { value } = event.target;
    setCheckedItems((items) =>
      items.includes(value)
        ? items.filter((item) => item !== value)
        : [...items, value]
    );
  };

  return (
    <>
      <div id={props.name}>
        <h5 className="control-label">{question}</h5>
        <div className="form-check" onChange={handleCheckbox}>
          {props.options.map((data, index) => {
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
      </div>
    </>
  );
};
