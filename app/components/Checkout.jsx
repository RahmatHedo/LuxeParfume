import React, { useState } from "react";
import { product } from "../libs/product";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : null));
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const checkout = async () => {
    const data = {
      id: product.id,
      productName : product.name,
      price: product.price,
      quantity: quantity
    }

    const response  = await fetch("api/token",{
      method : "POST",
      body : JSON.stringify(data)
    })

    const requestData = await response.json()
    window.snap.pay(requestData.token)
  };

  const generatePaymentLink = async () => {
    alert("Checkout Payment Link! 🔥")
  };

  return (
   <>
  <div className="flex items-center justify-between">
    <div className="flex sm:gap-3 gap-2">
      <button
        className="transition-all hover:opacity-75 text-lg"
        onClick={decreaseQuantity}
      >
        ➖
      </button>

      <input
        type="number"
        id="quantity"
        value={quantity}
        className="h-9 w-14 text-black rounded text-center border border-gray-300"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <button
        className="transition-all hover:opacity-75 text-lg"
        onClick={increaseQuantity}
      >
        ➕
      </button>
    </div>

    {/* Tombol checkout diperkecil */}
    <button
      className="rounded bg-indigo-500 px-4 py-2 text-sm font-medium transition hover:scale-105 hover:bg-indigo-600"
      onClick={checkout}
    >
      Checkout
    </button>
  </div>

  
</>

  );
};

export default Checkout;
