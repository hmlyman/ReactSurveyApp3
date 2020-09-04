import React from "react";

export const LoginEmailInput = (props) => {
  const inputProps = {
    type: "email",
    className: "form-control",
    placeholder: "Enter email",
    ariadescribedby: "emailHelp",
  };

  return (
    <>
      <div>
        <input {...inputProps} />
      </div>
    </>
  );
};
