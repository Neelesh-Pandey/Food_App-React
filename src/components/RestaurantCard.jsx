import { CDN_URL } from "../utils/constant";
import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, sla } =
    resData?.info;

  const TruncatedCuisines = ({ cuisines, maxChars }) => {
    const truncatedCuisines =
      cuisines.length > maxChars
        ? cuisines.substring(0, maxChars) + "..."
        : cuisines;
    return <p className="text-gray-600 ">{truncatedCuisines}</p>;
  };

  const Name = ({ name, maxChars }) => {
    const newName =
      name.length > maxChars ? name.substring(0, maxChars) + "..." : name;
    return <h3 className="font-semibold text-lg flex flex-wrap">{newName}</h3>;
  };

  return (
    <div className=" w-44   sm:w-60 sm:h-80 relative mx-4 transition-transform duration-200 ease-in-out transform hover:scale-95">
      <div className="restaurant-card  rounded-lg overflow-hidden ">
        <img
          className="w-full sm:h-40 h-48 object-cover object-center rounded-lg shadow-inner-2xl  shadow-black "
          alt="restaurant"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="p-4">
          <Name name={name} maxChars={20} />

          <div className="flex items-center mb-2">
            <span className="text-green-700 text-bold text-2xl  me-2"> ✪ </span>

            <span className="text-black font-semibold  ">{avgRating}</span>
            <span className="mx-1 font-semibold text-lg">&#8226;</span>
            <span className="text-black font-semibold ">
              {sla.deliveryTime} mins
            </span>
          </div>
          <TruncatedCuisines cuisines={cuisines.join(", ")} maxChars={20} />
          <p className="text-gray-600">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard2 = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, sla } =
    resData?.info;

  const TruncatedCuisines = ({ cuisines, maxChars }) => {
    const truncatedCuisines =
      cuisines.length > maxChars
        ? cuisines.substring(0, maxChars) + "..."
        : cuisines;
    return <p className="text-gray-600 mb-2">{truncatedCuisines}</p>;
  };

  const Name = ({ name, maxChars }) => {
    const newName =
      name.length > maxChars ? name.substring(0, maxChars) + "..." : name;
    return <h3 className="font-semibold text-lg flex flex-wrap">{newName}</h3>;
  };

  return (
    <div className=" w-44 sm:w-60 sm:h-80 relative mx-4">
      <div className="restaurant-card  rounded-lg overflow-hidden ">
        <img
          className="w-full sm:h-40  h-48 object-cover object-center rounded-lg"
          alt="restaurant"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="p-4">
          <Name name={name} maxChars={20} />

          <div className="flex items-center mb-2">
            <span className="text-green-700 text-bold text-2xl  me-2"> ✪ </span>

            <span className="text-black font-semibold  ">{avgRating}</span>
            <span className="mx-1 font-semibold text-lg">&#8226;</span>
            <span className="text-black font-semibold ">
              {sla.deliveryTime} mins
            </span>
          </div>
          <TruncatedCuisines cuisines={cuisines.join(", ")} maxChars={20} />
          <p className="text-gray-600">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

//Higher Order Component
export const vegOrNot = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="transition-transform duration-200 ease-in-out transform hover:scale-95">
        <label className=" absolute bg-green-600 text-white m-2 p-2 rounded-lg shadow-lg z-10">
          pure-veg
        </label>
        <RestaurantCard2 {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
