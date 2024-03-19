import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success(" item added to cart");
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item));
    toast.error("item removed");
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center "
        >
          <div className="flex flex-col w-[80%]">
            <div>
              <button className="" onClick={() => handleRemove(item)}>
                {" "}
                <AiOutlineClose />{" "}
              </button>
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <div>
                  <span>
                    ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>
              </div>
              <div>
                {" "}
                <p className="text-xs">{item.card.info.description}</p>
              </div>
            </div>
          </div>
          <div className="my-10 mx-2">
            <div className="absolute">
              <button
                className="border bg-white text-green-500 rounded-lg px-5 py-1 mx-4 my-20 shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img
              className="object-cover  w-[118px] h-[96px] rounded-lg"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
