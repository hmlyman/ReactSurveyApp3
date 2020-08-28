import React from "react";

class RequiredComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      touched: { name: false, email: false },
    };
  }

  handleBlur = (field) => (event) => {
    this.setState({ touched: { ...this.state.touched, [field]: true } });
  };

  handleValidation = (event) => {
    this.setState({ name: event.target.value });
  };
}

export default RequiredComponent;
