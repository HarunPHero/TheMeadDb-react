import React, {useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../App.css";

const Details = () => {
  const {foodId} = useParams();
  const [searchId, setSearchid] = useState([])
  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
    .then(res => res.json())
    .then(data => setSearchid(data.meals))
  }, [])
   return (
    <div>
     <Card border="success" className="m-5">
    <Card.Header>Meal name: {searchId[0]?.strMeal}</Card.Header>
    <Card.Body>
      <Card.Title>Category: {searchId[0]?.strCategory}</Card.Title>
      <Card.Text>
        there have {searchId[0]?.strTags}
      </Card.Text>
      <Card.Text>Youtube tutorial: <Card.Link href={searchId[0]?.strYoutube}>{searchId[0]?.strYoutube}</Card.Link></Card.Text>
    </Card.Body>
  </Card>
    </div>
  );
};

export default Details;
