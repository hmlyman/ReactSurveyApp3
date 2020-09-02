export function isTextInput(inputType) {
  switch (inputType) {
    case "text":
      return true;
    case "email":
      return true;
    case "number":
      return true;
    case "textarea":
      return true;
    case "checkbox":
      return true;
    case "radio":
      return true;
    default:
      return false;
  }
}
