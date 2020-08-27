import React, { useState } from "react";
import "./App.css";
import fakedata from "./fakedata/index";
import Course from "./Component/Course/Course";
import Cart from "./Component/Cart/Cart";
import CartCount from "./Component/CartCount/CartCount";

function App() {
  const [courses] = useState(fakedata);
  const [cart, setCart] = useState([]);

  let handleAddCourse = (course) => {
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
          <CartCount cart={cart}></CartCount>
          <Cart cart={cart}></Cart>
        </div>
      </header>
    </div>
  );
}

export default App;
