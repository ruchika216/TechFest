import React, { useState } from "react";
// import Base from '../core/Base'
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../../auth/helper";
function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    didRedirect: false,
    error: "",
    loading: false,
  });

  const { email, password, loading, didRedirect, error } = values;

  const { user } = isAuthenticated();

  const handleChange = (key) => (event) => {
    setValues({ ...values, error: false, [key]: event.target.value });
  };

  const performRedirect = () => {
    if (didRedirect) {
      // console.log(user)
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else if (user && user.role === 2) {
        return <Redirect to="/superadmin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }

    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className=" text-center my-2">
          <div class="spinner-border text-light " role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )
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
  const handlePasswordToogle = (e) => {
    const password = document.getElementById("userPassword");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    e.target.classList.toggle("fa-eye-slash");
    // console.log(e);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });

    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              email: "",
              password: "",
              error: "",
              didRedirect: true,
            });
          });
        }
      })
      .catch("Some error Ocuured");
  };

  const signinForm = () => {
    return (
      // <form>
      //     <input type="email" placeholder="email" value={email} onChange={handleChange("email")} /><br />
      //     <input type="password" placeholder="password" value={password} onChange={handleChange("password")} /><br />
      //     <input type="submit" value="Submit" onClick={onSubmit} />
      // </form>
      <form id="login" className="input-group">
        <div className="LSbox mt-2">
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label lsLabel">
              Email address
            </label>
            <input
              type="email"
              className="form-control LSinputField"
              id="userEmail"
              placeholder="example@gmail.com"
              autoComplete="email"
              value={email}
              onChange={handleChange("email")}
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
                placeholder="password"
                autoComplete="current-password"
                value={password}
                onChange={handleChange("password")}
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
          <div
            className="d-flex justify-content-between"
            id="groupRememberForget"
          >
            {/* <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                name="rememberMe"
                defaultChecked={loginFormData.rememberMe}
                value={loginFormData.rememberMe}
                onClick={(e) => {
                  handleLoginFormData(e);
                }}

                // checked
              />
              <label className="form-check-label lsLabel" htmlFor="rememberMe">
                Remember Me
              </label>
            </div> */}
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label lsLabel">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  Forget Password ?
                </a>
              </label>
            </div>
          </div>
          {/* <button type="submit" className="btn btn-primary">
            Login
          </button> */}
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
            onClick={onSubmit}
          />
        </div>
      </form>
    );
  };

  return (
    <>
      {loadingMessage()}
      {errorMessage()}
      {signinForm()}
      {performRedirect()}
    </>
  );
}

export default LoginForm;
