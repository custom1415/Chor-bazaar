import React from "react";
import "./sign-in.styles.scss";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { signInWithFb, signInWithGoogle } from "../../firebase.utils";
import { Link } from "react-router-dom";
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      Password: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <section className="signin">
          <div className="container">
            <div className="text">
              <h1>Hello!</h1>
              <p>Sign in to your Account</p>
            </div>
            <input
              autoComplete="off"
              name="email"
              type="email"
              value={this.state.email}
              placeholder="example@example.com"
              onChange={this.handleChange}
            />
            <input
              name="Password"
              type="password"
              value={this.state.Password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <button>Sign In</button>
            <p className="or">Or</p>
            <div className="signin__social">
              <div className="social__signin__icons">
                <FaFacebook color="rgb(96, 73, 245)" onClick={signInWithFb} />
                <FaGoogle
                  color="rgb(96, 73, 245)"
                  style={{ margin: " 0 1em" }}
                  onClick={signInWithGoogle}
                />
                <FaGithub color="rgb(96, 73, 245)" />
              </div>
            </div>
            <p className="create__account">
              Dont have an account?
              <span>
                <Link to="/">Create one</Link>
              </span>
            </p>
          </div>
        </section>
      </>
    );
  }
}
export default SignIn;
