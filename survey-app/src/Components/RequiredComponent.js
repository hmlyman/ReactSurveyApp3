import React from "react";

class RequiredComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Required";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Required";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
}

export default RequiredComponent;
