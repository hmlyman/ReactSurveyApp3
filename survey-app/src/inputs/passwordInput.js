import React from "react";

export const PasswordInput = (props) => {
  const inputProps = {
    type: "password",
    className: "form-control",
    placeholder: "Password",
  };

  return (
    <>
      <div>
        <input {...inputProps} />
      </div>
    </>
  );
};
