import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import { API_URL_SWIGGY } from "../utils/constants";
import useOnline from "../utils/customHooks/useOnline";

function Body(props) {
  const userr = props.user;
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestauratsList, setFilteredRestaurantList] = useState([]);
  const [searchrestaurant, setSearchRestaurant] = useState("");

  useEffect(() => {
    fetchAPI();
  }, []);

  async function fetchAPI() {
    const val = await fetch(API_URL_SWIGGY);
    const json = await val.json();
    console.log(json);
    //optional chaining "?"
    setAllRestaurantList(json?.data?.cards[2].data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2].data?.data?.cards);
  }

  if (!allRestaurantList) return null;

  const online = useOnline();

  if (!online)
    return (
      <h1>
        Looks like you are offline, Please check your internet connection.
      </h1>
    );
  return (
    <div className="body">
      <div className="search-restaurant">
        <input
          type="search"
          placeholder="food, restaurant..."
          value={searchrestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            const data = filterData(searchrestaurant, allRestaurantList);
            setFilteredRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterlist = filteredRestauratsList.filter(
              (res) => res.data?.avgRating > 4
            );
            setFilteredRestaurantList(filterlist);
          }}
        >
          Top-Rated-Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestauratsList.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
              style={{ textDecoration: "none" }}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
