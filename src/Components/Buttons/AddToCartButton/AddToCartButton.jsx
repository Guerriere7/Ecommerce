import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";

const AddToCartButton = () => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
  };

  return (
    <button
      onClick={handleClick}
      disabled={added}
      className={`px-4 py-2 rounded-2xl font-semibold shadow-md transition duration-300 ${
        added
          ? "bg-green-500 text-white cursor-default"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
    >
      {added ? "Agregado" : <MdAddShoppingCart />}
    </button>
  );
};

export default AddToCartButton;
