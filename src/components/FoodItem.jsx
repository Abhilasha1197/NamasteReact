import React from "react";
import { CDNN_URL } from "../utils/constants";

const FoodItem = (props) => {
  const {name,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    maxDeliveryTime} = props.item;
  return (
    <div className="res-card">
      <img alt="image" src={CDNN_URL + cloudinaryImageId} />
      <div className="res-description">
        <h2>{name}</h2>
        <div className="food-item-description">
          <h4>Rs.{costForTwo / 100}</h4>
          <h4>{avgRating} ⭐</h4>
          <h4>{maxDeliveryTime} min</h4>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
