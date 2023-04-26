import React from "react";
import { CDNN_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";



const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwo,
  avgRating,
  maxDeliveryTime,
 
}) => {
  const [isLoading, setIsLoading] = useState(true);


  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="res-card">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={350} width={250} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="res-card">
          <img alt="image" src={CDNN_URL + cloudinaryImageId} />
          <div className="res-description">
            <h2>{name}</h2>
            <p>{cuisines.join(",  ")}</p>
            <div className="food-item-description">
              <h4>Rs.{costForTwo / 100}</h4>
              <h4>{avgRating} ⭐</h4>
              <h4>{maxDeliveryTime} min</h4>
            
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantCard;
