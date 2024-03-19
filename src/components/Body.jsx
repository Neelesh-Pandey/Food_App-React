import RestaurantCard, { vegOrNot } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const VegOrNotCard = vegOrNot(RestaurantCard);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.275219503245495&lng=77.46177524328232&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline !! Please check your internet connection;
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="sm:w-[80%] m-auto ">
     
      <div className="flex flex-col ">
        <div className="flex justify-center items-center p-4 text-center mt-10 sm:mt-20  sm:mb-10">
          <input
            type="text"
            data-testid="searchInput"
            className=" border border-solid border-orange-500 bg-white shadow-sm h-10 w-60 sm:w-80 shadow-orange-500/50 text-black px-2 rounded-s-full rounded-e-full"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-6 py-2 bg-orange-500 shadow-orange-500/50  text-white shadow-lg  mx-4 rounded-s-full rounded-e-full"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className=" text-2xl text-black  ms-14 font-bold ">Restaurants with online food delivery </div>
        <div className=" m-4  flex flex-row ms-16 mb-10 items-center w-[70%] scrollbar-thumb-orange-500 scrollbar-track-orange-200  py-2 scrollbar-thin overflow-auto">
          <button
            className="px-4 mx-2 py-2 bg-white border border-solid-black shadow-lg text-black  rounded-lg whitespace-nowrap"
            onClick={() => {
              setfilteredRestaurant(listOfRestaurants);
            }}
          >
            All
          </button>
          <button
            className="px-4 mx-2 py-2 bg-white border border-solid-black shadow-lg text-black  rounded-lg whitespace-nowrap"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 mx-2 py-2 bg-white border border-solid-black shadow-lg text-black  rounded-lg whitespace-nowrap"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.veg === true
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Pure - Veg
          </button>
        </div>
      </div>
    
      <div className=" flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <VegOrNotCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
     
    </div>
  );
};

export default Body;
