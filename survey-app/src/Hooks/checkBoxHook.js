// import React, { useState } from "react";

// class checkboxHook extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: [] };
//     this.handleCheckbox = this.handleCheckbox.bind(this);
//   }

//   handleCheckbox(event) {
//     const input = event.target.value;
//     this.setState(
//       {
//         value: this.state.value.includes(input)
//           ? this.state.value.filter((item) => item !== input)
//           : [...this.state.value, input],
//       },
//       () => {
//         console.log("CheckBox: ", this.state.value);
//       }
//     );
//   }
// }

// export default checkboxHook;

export const CheckboxHook = (props) => {
  const [value, setValue] = useState([]);
  const handleCheckbox = (event) => {
    const input = event.target.value;
    setValue(
      value.include(input)
        ? value.filter((item) => item !== input)
        : [value, input],
      () => {
        console.log("Checkbox: ", value);
      }
    );
  };
};
