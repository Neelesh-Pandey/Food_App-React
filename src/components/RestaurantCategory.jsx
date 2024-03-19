import { useState } from "react";
import ItemList from "./ItemList";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  const [animationParent] = useAutoAnimate();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log(data);
  return (
    <div className="sm:w-6/12 sm:mx-auto my-2 sm:my-4 bg-gray-50 shadow-lg sm:p-4 p-2  scroll-default">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <button className="p-1 m-1 " ref={animationParent} onClick={toggleMenu}>
          {showMenu ? <IoIosArrowUp /> : <FaAngleDown />}
        </button>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
