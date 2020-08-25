import React from "react";
import { useInputChange } from "../../hooks";

class RadioButtonInput extends React.Component {
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
      question: props.question,
      type: props.type,
      name: props.name ? props.name : `${props.type}_${props.key}`,
    };

    return (
      <>
        <div id={props.name}>
          <div className={`form-check ${props.className}`}>
            <h5 className="radio-inline control-label ">{props.question}</h5>
            {props.options.map((data, index) => {
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
  }
}

export default RadioButtonInput;
