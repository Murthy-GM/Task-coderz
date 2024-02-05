import React, { useState } from "react";

import "./Login-page.css";

const YourFormComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()_+!])[A-Za-z\d@$%^&*()_+!]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one special character, and one number."
      );
      return;
    }

    window.location.href = "/booking";
  };

  return (
    <form className="form-page" onSubmit={handleSubmit}>
      <div className="form-container">
        <label className="label-text">
          Enter Username :
          <input
            className="input-text"
            style={{ marginLeft: "0.3rem" }}
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="label-text">
          Enter Password :
          <input
            className="input-text"
            style={{ marginLeft: "0.3rem" }}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default YourFormComponent;
