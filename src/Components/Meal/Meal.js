import React from "react";

import "../Foods/Food";

const Meal = (props) => {
  const url = `/details/${props.id}`;
  return (
    <div>
      <div>
        <div class="col">
          <div class="card h-100">
            <img src={props.img} class="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 class="card-title">{props.name}</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <a href={url}>Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
