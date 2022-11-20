import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = ({ category }) => {
  const {
    author,
    title,
    rating,
    image_url,
    details,
    category_name,
    _id,
  } = category;
  const { name, img } = author;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p className="d-flex justify-content-between">
          <small>category: {category_name}</small>{" "}
          <small>rating: {rating}</small>
        </p>
        <p>
          <img style={{ width: "30px", borderRadius: "50%" }} src={img} alt=''/>{" "}
          {name}
        </p>
        <Card.Text className="fs-5 text-muted">{details}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-center p-0">
        <Link to={`/courses/course/${_id}`}>
          <Button variant="primary w-100  card-button">Details</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Course;
