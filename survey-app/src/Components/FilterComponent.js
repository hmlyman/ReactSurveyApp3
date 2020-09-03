import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onKeyUp={(event) => this.props.onTextChange(event.target.value)}
        />
      </div>
    );
  }
}

export default Filter;
