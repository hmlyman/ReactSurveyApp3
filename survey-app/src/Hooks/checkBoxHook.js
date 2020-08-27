import React, { useState, useEffect } from "react";

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

// export const checkboxHook = (props) => {
//   const [checkedItems, setCheckedItems] = useState([]);

//   useEffect(() => {
//     console.log("Checked: ", checkedItems);
//   }, [checkedItems]);

//   const handleCheckbox = (event) => {
//     const { value } = event.target;
//     setCheckedItems((items) =>
//       items.includes(value)
//         ? items.filter((item) => item !== value)
//         : [...items, value]
//     );
//   };
// };
