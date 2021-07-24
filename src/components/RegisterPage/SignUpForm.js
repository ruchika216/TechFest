import React, { useState } from "react";
// import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../../auth/helper";
function SignUpForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (key) => (event) => {
    setValues({ ...values, error: false, [key]: event.target.value });
  };

  const handlePasswordToogle = (e) => {
    const password = document.getElementById("userPassword");
    const type = password.getAttribute('type')==='password' ? 'text' : 'password';
    password.setAttribute('type' , type);
    e.target.classList.toggle("fa-eye-slash");
    // console.log(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });

    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            success: false,
          });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            error: "",
            password: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const SignUpForm1 = () => {
    return (
      
      <form
        id="signup"
        className="input-group"
      >
        <div className="LSbox ">
          <div className="mb-3">
            <label htmlFor="name" className="form-label lsLabel">
              Name
            </label>
            <input
              type="text"
              className="form-control LSinputField"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              autoComplete="name"
              onChange={handleChange("name")} value={name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label lsLabel">
              Email address
            </label>
            <input
              type="email"
              className="form-control LSinputField"
              id="userEmail"
              name="userEmail"
              placeholder="example@gmail.com"
              autoComplete="email"
              onChange={handleChange("email")} value={email}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userPassword" className="form-label lsLabel">
              Password
            </label>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control LSinputField"
                id="userPassword"
                name="userPassword"
                placeholder="password"
                autoComplete="current-password"
                onChange={handleChange("password")} value={password}
                required
              />
              <button type="button" className="btn border-bottom text-white">
                <i
                  className="far fa-eye"
                  id="togglePassword"
                  onClick={(e) => {
                    handlePasswordToogle(e);
                  }}
                ></i>
              </button>
            </div>
          </div>
          
          <input type="submit" value="Submit" className="btn btn-primary" onClick={onSubmit} />
        </div>
      </form>
    );
  };

  const successMessage = () => {
    return (
      success && (<div className="row">
        <div className="offset-sm-3 col-md-6 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New Account was created successfully!!.Please{" "}
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>)
    );
  };
  const errorMessage = () => {
    return (
      error && (<div className="row">
        <div className="offset-sm-3 col-md-6 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>)
    );
  };
  return (
    <>
      {successMessage()}
      {errorMessage()}
      {SignUpForm1()}
    </>
  );
}

export default SignUpForm;
