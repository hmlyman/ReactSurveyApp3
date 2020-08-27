import React from "react";
import { useInputChange } from "../../Hooks/useInputChangeHook";
import { isTextInput } from "../../validators";
//import checkboxHook from "../../Hooks/checkBoxHook";

export const CheckboxInput = (props) => {
  const { question } = props;
  const inputType = isTextInput(props.type) ? props.type : "checkbox";
  const { value, handleChange } = useInputChange(
    props.defaultValue,
    props.triggerCallback,
    inputType
  );
  // const handleCheckbox = (event) => {
  //   event.preventDefault();
  //   const input = event.target.value;
  //   this.setState(
  //     {
  //       value: this.includes(input)
  //         ? this.includes((item) => item !== input)
  //         : [...this.item, input],
  //     },
  //     () => {
  //       console.log("CheckBox: ", this.state.value);
  //     }
  //   );
  // };

  const inputProps = {
    className: props.className ? props.className : "form-control",
    onChange: handleChange,
    value: value,
    required: props.required,
    options: props.options,
    type: inputType,
    name: props.name ? props.name : `${props.type}_${props.key}`,
  };

  return (
    <>
      <div id={props.name}>
        <h5 className="control-label">{question}</h5>
        <div className="form-check" onChange={handleChange}>
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
