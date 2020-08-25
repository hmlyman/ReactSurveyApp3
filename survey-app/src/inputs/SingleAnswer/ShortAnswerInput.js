import React from "react";
import { useInputChange } from "../../hooks";

class ShortAnswerInput extends React.Component {
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
      placeholder: props.placeholder,
      name: props.name,
    };
    return (
      <>
        <div id={props.name}>
          <h5>{props.question}</h5>
          <textarea {...inputProps} />
        </div>
      </>
    );
  }
}

export default ShortAnswerInput;
