import React, { useState } from "react";
import "./App.css";
import fakedata from "./fakedata/index";
import Course from "./Component/Course/Course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Component/Cart/Cart";

function App() {
  const [courses, setCourses] = useState(fakedata);
  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
    const newCourse = [...cart, course];
    setCart(newCourse);
  };

  return (
    <div className="App">
      <header className="App-header d-flex">
        <div>
          <h2 className="ml-5">Course List</h2>
          {courses.map((course) => (
            <Course
              course={course}
              key={course.id}
              handleAddCourse={handleAddCourse}
            />
          ))}
        </div>
        <div className="ml-4">
          <h2>
            Course Order Summary <FontAwesomeIcon icon={faShoppingCart} />
            <span
              className="badge badge-warning"
              handleAddCourse={handleAddCourse}
              cart={cart}
            >
              0
            </span>
          </h2>
          <Cart cart={cart}></Cart>
        </div>
      </header>
    </div>
  );
}

export default App;
