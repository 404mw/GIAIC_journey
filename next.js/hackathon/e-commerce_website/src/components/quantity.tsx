"use client";
import { useState } from "react";
export default function Quantity() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className=" flex flex-row justify-around items-center gap-10 text-2xl p-2 border-2 hover:border-black rounded-md">
        <button
            className=" active:scale-90 transform transition duration-100 select-none hover:scale-150"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
        className=" active:scale-90 transform transition duration-100 select-none hover:scale-150"
          onClick={() => {
            if (count < 9) {
              setCount(count + 1);
            }
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
