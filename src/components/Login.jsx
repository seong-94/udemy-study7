import { useState } from "react";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleEmailValid("email")}
            onChange={() => handleInputChange("email", event.target.value)}
            value={enterValue.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid Email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={() => handleInputChange("password", event.target.value)}
            value={enterValue.password}
          />
          <div className="control-error">
            {editing.password && <p>Please enter a valid PassWord</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
