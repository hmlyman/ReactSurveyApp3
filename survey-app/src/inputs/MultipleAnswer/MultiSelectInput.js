import React from "react";
import { useInputChange } from "../../hooks";

class MultiSelectInput extends React.Component {
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
        <div id={props.name} className="container">
          <h5>{props.question}</h5>
          <select {...inputProps} name={props.name} multiple={props.multiple}>
            <option hidden value>
              Select All That Apply
            </option>
            {props.options.map((data, index) => {
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
  }
}

export default MultiSelectInput;
