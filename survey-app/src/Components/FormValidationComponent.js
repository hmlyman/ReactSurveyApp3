export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  }
  return errors;
}
