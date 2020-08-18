import React from "react";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.a = props.a;
  }

  A() {
    return `App2.a = ${this.a}`;
  }
  Print() {
    console.log(this.A());
  }

  render() {
    let check = new App2({ a: 51 });
    check.Print();
    return null;
  }
}

export default App2;
