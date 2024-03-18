import { useState } from "react";
import CustomInput from "./CustomInput";

export default function Login() {
  const [enterValue, setEnterValue] = useState({
    email: "",
    password: "",
  });
  const [editing, setEditing] = useState({ email: false, password: false });
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleInputChange(identifier, value) {
    setEnterValue((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setEditing((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  const emailIsInvalid = editing.email && !enterValue.email.includes("@");
  const PasswordIsInvalid = editing.password && !enterValue.password.length > 6;

  function handleEmailValid(identifier) {
    setEditing((prevEdit) => ({
      ...prevEdit,
      [identifier]: !emailIsInvalid,
    }));
  }
  // function handleEmailChange() {
  //   setEnterValue(event.target.value);
  // }
  // function handlePasswordChange() {
  //   setEnterValue(event.target.value);
  // }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <CustomInput
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleEmailValid("email")}
          onChange={() => handleInputChange("email", event.target.value)}
          value={enterValue.email}
          error={emailIsInvalid && "Please enter a valid email"}
        />
        <CustomInput
          label="Password"
          id="Password"
          type="Password"
          name="Password"
          onBlur={() => handleEmailValid("Password")}
          onChange={() => handleInputChange("Password", event.target.value)}
          value={enterValue.Password}
          error={PasswordIsInvalid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
