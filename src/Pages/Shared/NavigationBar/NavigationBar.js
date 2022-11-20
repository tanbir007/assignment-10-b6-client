import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import navTitle from "../../../Images/img3.png";
import "./NavigationBar.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const NavigationBar = () => {
  const [dark, setDark] = useState(true);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
      });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={
        dark
          ? "bg-dark text-light py-0 mb-4"
          : "bg-dark bg-opacity-25 text-dark py-0 mb-4"
      }
    >
      <Container className={dark ? "text-warning" : "text-dark"}>
        <Navbar.Brand href="#home">
          <img className="nav-img" src={navTitle} alt="nav-title" />
          <span
            className={
              dark
                ? "text-light nav-title mx-2 fw-bold"
                : "text-dark nav-title mx-2 fw-bold"
            }
          >
            Course Hero
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          className={dark ? "bg-light bg-opacity-10" : "bg-dark bg-opacity-25"}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav ms-auto">
            <ul className="d-lg-flex">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/home"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/courses"
              >
                <li>Courses</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="blogs"
              >
                <li>Blogs</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="frequent_ques"
              >
                <li>FAQ</li>
              </NavLink>
              {user?.uid ? (
                <>
                  <Button
                    onClick={handleLogOut}
                    style={{
                      color: "white",
                      backgroundColor: "#343338",
                      textDecoration: "none",
                    }}
                    variant="link"
                  >
                    Sign Out
                  </Button>
                  <OverlayTrigger
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`tooltip-${"bottom"}`}>
                        {user.displayName}
                      </Tooltip>
                    }
                  >
                    <span title={user.displayName}>
                      <img
                        src={user.photoURL}
                        style={{ width: "40px", borderRadius: "50%" }}
                        alt=""
                      />
                    </span>
                  </OverlayTrigger>
                </>
              ) : (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                    to="login"
                  >
                    <li>Sign In</li>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                    to="registration"
                  >
                    <li>Sign Up</li>
                  </NavLink>
                </>
              )}
            </ul>
          </Nav>
          <span
            className="dark-mood"
            onClick={() => {
              setDark(!dark);
            }}
          >
            {dark ? <FaRegMoon /> : <FaMoon />}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
