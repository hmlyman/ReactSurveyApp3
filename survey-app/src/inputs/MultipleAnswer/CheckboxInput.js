import React from "react";
import { useInputChange } from "../../hooks";

class CheckboxInput extends React.Component {
  constructor(props) {
    super(props);
    const { value, handleChange } = useInputChange(
      props.defaultValue,
      props.triggerCallback
    );
    const inputProps = {
      className: props.className ? props.className : "form-control",
      onChange: handleChange,
      value: value,
      required: props.required,
      type: props.type,
      name: props.name ? props.name : `${props.type}_${props.key}`,
      checked: false,
    };

    return (
      <>
        <div id={props.name} className="container">
          <h5>{props.question}</h5>

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
      </>
    );
  }
}

export default CheckboxInput;
