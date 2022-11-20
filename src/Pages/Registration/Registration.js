import React, { useContext, useState } from "react";
import "./Registration.css";
import { FaGithub, FaGoogle} from "react-icons/fa";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider";

const Registration = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [errors, setErrors] = useState('');
  const { auth, createUser, googleSignIn, githubSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const userPhotoURL = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      Swal.fire({
        icon: "error",
        title: "Password didn't match. Try Again",
      });
      return;
    }

    setErrors('');

    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: `${name}`,
          photoURL: `${userPhotoURL}`
        })
          .then(() => {})
          .catch((error) => {
            setErrors(error.message);
          });
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: `Hello, ${name}`,
          text: "Registration Successful!",
          showConfirmButton: true,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrors(error.message);
      });
  };
   const handleGoogleSignIn = () => {
     googleSignIn()
       .then((result) => {
         loginResult(true, result);
       })
       .catch((error) => {
         loginResult(false, error.message);
         console.error("google-sign-in-Error: ", error);
       });
   };
   const handleGithubSignIn = () => {
     githubSignIn()
       .then((result) => {
         loginResult(true, result);
       })
       .catch((error) => {
         loginResult(false, error.message);
         console.error("github-sign-in-Error: ", error);
       });
   };

   const loginResult = (isSuccessful, result) => {
     if (isSuccessful) {
       navigate(from, { replace: true });
       Swal.fire({
         icon: "success",
         title: `Login Successful!`,
         showConfirmButton: true,
         timer: 1500,
       });
     } else {
       Swal.fire({
         icon: "error",
         title: "Login Failed! Try Again",
         text: `${result}`,
       });
     }
   };
  return (
    <>
      <div className="login-container"></div>
      <div className="login">
        <form onSubmit={handleRegister}>
          <h1>Register Now</h1>
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="User Photo URL"
            required
          />
          <span
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <FiEye className="faFac2" />
            ) : (
              <FiEyeOff className="faFac1" />
            )}
          </span>

          <input
            type={`${show ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            className="password1"
            required
          />
          <span
            onClick={() => {
              setShow2(!show2);
            }}
          >
            {show2 ? (
              <FiEye className="faFac2" />
            ) : (
              <FiEyeOff className="faFac1" />
            )}
          </span>
          <input
            type={`${show2 ? "text" : "password"}`}
            name="confirm"
            placeholder="Confirm Password"
            className="password2"
            required
          />
          <p>{errors}</p>
          <button className="submit-btn">Register</button>
        </form>
        <div className="hr">
          <hr />
          <small> or </small>
        </div>
        <div className="sign-with-social-media">
          <h2>Register With Social Media Account</h2>
          <div className="sign-in-icons">
            <h2 id="google" onClick={handleGoogleSignIn}>
              <FaGoogle /> Google
            </h2>
            <h2 id="github" onClick={handleGithubSignIn}>
              <FaGithub /> Github
            </h2>
          </div>
        </div>
        <p>
          Already have an account?
          <Link to="/login">
            <span className="register-link"> Log In Now!</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Registration;
