import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";
import SideBar from "../Pages/Shared/SideBar/SideBar";

const Courses = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="mx-3">
        <Row>
          <Col lg="2">
            <SideBar></SideBar>
          </Col>
          <Col lg="10">
            <Outlet></Outlet>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
