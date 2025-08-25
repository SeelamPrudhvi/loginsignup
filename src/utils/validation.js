export const validateName = (name) =>
  /^[A-Za-z ]+$/.test(name) ? "" : "Name must contain only alphabets.";

export const validateUsername = (username) =>
  /^[a-zA-Z0-9._-]+$/.test(username)
    ? ""
    : "Username must be alphanumeric with special chars (._-).";

export const validatePassword = (password, username) => {
  if (!/^[a-zA-Z0-9._-]+$/.test(password)) {
    return "Password must be alphanumeric with special chars (._-).";
  }
  if (password === username) {
    return "Password cannot be the same as username.";
  }
  return "";
};

export const validateConfirmPassword = (password, confirm) =>
  password === confirm ? "" : "Passwords do not match.";

export const validateEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)
    ? ""
    : "Email must be a valid Gmail address.";

export const validatePhone = (phone) =>
  /^\+\d{1,3}\d{7,12}$/.test(phone)
    ? ""
    : "Phone must include country code (e.g. +91XXXXXXXXXX).";
