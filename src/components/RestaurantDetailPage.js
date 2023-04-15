import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CDNN_URL } from "../utils/constants";

const RestaurantDetailPage = () => {
  //useParam hooks reads the dyamic url
  const { id } = useParams(); //destructuring
  const [restauratDetail, setRestaurantDetail] = useState({});
  const [offers, setOffers] = useState({});
  const [menu, setMenu] = useState({});

  useEffect(() => {
    getRestaurantDetailPage();
  }, []);

  async function getRestaurantDetailPage() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7605545&lng=83.3731675&restaurantId=${id}`
    );
    const json = await data.json();
    console.log(json);

    setRestaurantDetail(json.data?.cards[0].card?.card?.info);
    setMenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        ?.card?.itemCards
    );
    setOffers(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  }

  return (
    <div className="restaurant-detail-page">
      <div className="restaurant">
        <div className="restaurant-description">
          <h1>{restauratDetail?.name}</h1>
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
          {" "}
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
      <div className="restaurant-menu-section">
        <h1>Menu</h1>
        <ul className="menu">
          {Object.values(menu).map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}
              <br />
              Rs.{item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
