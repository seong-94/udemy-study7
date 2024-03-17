import { useState } from "react";

export default function Login() {
  const [enterValue, setEnterValue] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleInputChange(identifier, value) {
    setEnterValue((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
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
            onChange={() => handleInputChange("email", event.target.value)}
            value={enterValue.email}
          />
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
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
