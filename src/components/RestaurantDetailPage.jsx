import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CDNN_URL } from "../utils/constants";
import { API_URL_MENU } from "../utils/constants";
import { useDispatch } from "react-redux";
import {MENU} from "../utils/constants"
import { addItem } from "../utils/cartSlice";

const RestaurantDetailPage = () => {
  //useParam hooks reads the dyamic url
  const { id } = useParams(); //destructuring
  const [restauratDetail, setRestaurantDetail] = useState({});
  const [offers, setOffers] = useState({});
  const [menu, setMenu] = useState([]);

  const dispatch = useDispatch();

  const handleCart = (name) => {
    dispatch(addItem(name));
  };

  useEffect(() => {
    getRestaurantDetailPage();
  }, []);

  async function getRestaurantDetailPage() {
    const data = await fetch(API_URL_MENU + id);
   //const data = await fetch(MENU + id);
    const json = await data.json();
    console.log(json);

    setRestaurantDetail(json.data?.cards[0].card?.card?.info);
   // console.log(json.data?.cards[0].card);
   setOffers(
     json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
  );

    console.log(
      json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    
  setMenu(
     json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
       ?.card?.itemCards
    );
    
  
  }

  return (
    <div className="restaurant-detail-page">
      <div className="restaurant">
        <div className="restaurant-description">
          <h1>{restauratDetail?.name}</h1>{" "}
          <button onClick={() => handleCart(restauratDetail)}>🛒</button>
          <p>
            {restauratDetail?.areaName}, {restauratDetail.city}
          </p>
          <p>{restauratDetail?.costForTwoMessage}</p>
          <p>{restauratDetail?.avgRating} ⭐</p>
          <p>{restauratDetail?.totalRatingsString}</p>
        </div>
        <div className="restaurant-image">
          <img src={CDNN_URL + restauratDetail?.cloudinaryImageId} />
        </div>
      </div>
      <hr />

      <div className="offer-section">
        <h1>0ffers</h1>
        <div className="offers-container">
          {Object.values(offers).map((offer) => (
            <div key={offer.info.offerIds} className="offer">
              <p>{offer.info.header}</p>
              <p>{offer.info.couponCode}</p>
              <p>{offer.info.description}</p>
              <p>{offer.info.expiryTime}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />

    {/*  <div className="restaurant-menu-section">
        <h1>Menu</h1>
        <div className="menu-container">
          {menu.map((item) => {
            return (
              <div key={item.card.info.id} className="menu-item">
                <button onClick={() => handleCart(restauratDetail)}>🛒</button>
                <p>{item.card.info.name}</p>
                <p> Rs.{item.card.info.price / 100}</p>
              </div>
            );
          })}
        </div>
        </div>*/}
    </div>
  );
};

export default RestaurantDetailPage;
