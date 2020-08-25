import React from "react";
import { useInputChange } from "../../hooks";

class SelectInput extends React.Component {
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
          <h5>{props.question}</h5>
          <select {...inputProps}>
            <option hidden value>
              {" "}
              Select One{" "}
            </option>
            {props.options.map((data, index) => {
              return (
                <option
                  value={data.value}
                  id={`${props.name}-${index}`}
                  key={`${props.type}-${index}`}
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
  }
}

export default SelectInput;
