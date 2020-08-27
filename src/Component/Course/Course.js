import React from "react";
import Button from "react-bootstrap/Button";
import "./Course.css";

const Course = (props) => {
  const { img, name, price } = props.course;

  return (
    <div className="course-container ml-5 mb-5 d-flex">
      <div className="course-img">
        <img src={img} alt="" />
      </div>
      <div className="ml-5">
        <h4>{name}</h4>
        <br />
        <h3>${price}</h3>
        <br />
        <Button
          variant="primary"
          onClick={() => props.handleAddCourse(props.course)}
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default Course;
