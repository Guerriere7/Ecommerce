import React from "react";

const BuyNowButton = ({ bought, onBuy }) => {
  return (
    <button
      onClick={onBuy}
      disabled={bought}
      className={`px-4 py-2 rounded-2xl font-semibold shadow-md transition duration-300 flex items-center gap-2 ${
        bought
          ? "bg-green-500 text-white cursor-default"
          : "bg-orange-500 text-white hover:bg-orange-600"
      }`}
    >
      {bought ? "Comprado" : <>Comprar</>}
    </button>
  );
};

export default BuyNowButton;
