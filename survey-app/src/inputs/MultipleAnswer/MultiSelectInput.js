import React, { useEffect, useState } from "react";
import { useInputChange } from "../../Hooks/useInputChangeHook";
import { isTextInput } from "../../validators";

export const MultiSelectInput = (props) => {
  const inputType = isTextInput(props.type) ? props.type : "multiSelect";
  const { handleChange } = useInputChange(
    props.defaultValue,
    props.triggerCallback,
    inputType
  );
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    console.log("Selected: ", selectedItems);
  }, [selectedItems]);

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

  const handleMultiSelect = (event) => {
    const { value } = event.target;
    setSelectedItems((items) =>
      items.includes(value)
        ? items.filter((item) => item !== value)
        : [...items, value]
    );
  };

  return (
    <>
      <div id={props.name} onChange={handleMultiSelect}>
        <h5>{props.question}</h5>
        <div>
          <select
            {...inputProps}
            name={props.name}
            multiple={props.multiple}
            className="selectpicker"
          >
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
      </div>
    </>
  );
};
