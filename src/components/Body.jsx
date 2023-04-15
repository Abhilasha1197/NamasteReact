import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/*
function filterData(searchrestaurant, restaurant) {
  
  const filteredRes = restaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchrestaurant.toLowerCase()) 
   )
   return filteredRes;
  }

function Body() {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestauratsList, setFilteredRestaurantList] = useState([]);
  const [searchrestaurant, setSearchRestaurant] = useState("");


  useEffect(() => {
    fetchAPI();
  },
    []);

  async function fetchAPI() {
    const val = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&page_type=DESKTOP_WEB_LISTING");
    const json = await val.json();
    console.log(json);
    //optional chaining "?"
    setAllRestaurantList(json?.data?.cards[2].data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2].data?.data?.cards);
  }

  


  if (!allRestaurantList)
    return null;

     
  return 
  (allRestaurantList?.length === 0) ? <Loader />
   :(
    <div className="body">

      <div className="search-restaurant">
        <input
          type="search"
          placeholder="food, restaurant..."
          value={searchrestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)} />
        <button
          type="submit"
          onClick={() => {
            const data = filterData(searchrestaurant, allRestaurantList);
            setFilteredRestaurantList(data);
          } }
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

          } }
        >
          Top-Rated-Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestauratsList.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          //not using is is not acceptable ,better you use index as key but the best is to use unique id as key.
        ))}
      </div>
    </div>
  );
}
*/
function filterData(searchrestaurant, restaurant) {
  const filteredRes = restaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchrestaurant.toLowerCase())
  );
  return filteredRes;
}

function Body() {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestauratsList, setFilteredRestaurantList] = useState([]);
  const [searchrestaurant, setSearchRestaurant] = useState("");

  useEffect(() => {
    fetchAPI();
  }, []);

  async function fetchAPI() {
    const val = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await val.json();
    console.log(json);
    //optional chaining "?"
    setAllRestaurantList(json?.data?.cards[2].data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2].data?.data?.cards);
  }

  if (filteredRestauratsList.length == 0)
    return (
      <>
        <h1>No Restaurant with name {searchrestaurant} found!!</h1>
      </>
    );

  if (!allRestaurantList) return null;

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
            //not using id is not acceptable ,better you use index as key but the best is to use unique id as key.
          );
        })}
      </div>
    </div>
  );
}

export default Body;
