import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Food.css";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

const Food = () => {
  const [meals, setMeals] = useState([]);

  const [stext, setStext] = useState("");
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${stext}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [stext]);

  const handleSearch = (event) => {
    const searchText = event.target.value;

    setStext(searchText);
  };
  return (
    <div>
      <div className="search-container fixed-top">
              <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/"><img src="https://www.themealdb.com/images/logo-small.png" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          onChange={handleSearch}
          type="search"
          placeholder="Search meals"
          className="me-2"
          aria-label="Search"
        />
       
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
      <div className="meal-container">
        <div className="food-container row row-cols-1 row-cols-md-3 g-4 m-5">
          {meals?.map((meals) => (
            <Meal
              name={meals.strMeal}
              img={meals.strMealThumb}
              // handleaddToCart={handleCart}
              meals={meals}
              id={meals.idMeal}
            ></Meal>
          ))}
        </div>
        {/* <div className="cart-container fixed-bottom">
          <Cart cart={cart}></Cart>
        </div> */}
      </div>
    </div>
  );
};

export default Food;
