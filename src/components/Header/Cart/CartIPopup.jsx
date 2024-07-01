"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

export default function CartIPopup({ setCart, Cart }) {
  const SignUpModelCloser = () => {
    setCart(!Cart);
  };
  const ref = useRef(null);

  useEffect(() => {
    // Event handler for clicking outside the SignUp modal
    const HandleModelCloser = (eo) => {
      // Check if the click is not inside the SignUp div
      if (ref.current && !ref.current.contains(eo.target)) {
        // Close the modal
        SignUpModelCloser();
      }
    };

    // Add the event listener for clicking outside the SignUp modal
    document.addEventListener("mousedown", HandleModelCloser);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", HandleModelCloser);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute top-full left-full transform -translate-x-full w-64 md:w-80 lg:w-96 z-10 p-4 text-black text-sm rounded-md  bg-white"
    >
      <div className="w-full container p-2">
        <div className="flex justify-between items-center h-7">
          <h1 className="font-medium text-xl md:text-2xl ">Your Cart</h1>
          <p className="font-medium text-xs md:text-base">1 item</p>
        </div>

        <div className="w-full border-t-2 border-b-2 h-20 flex justify-between items-center my-5 p-3 ">
          <div className="w-20 h-20 flex justify-center items-center ">
            <Image
              width={100}
              height={100}
              quality={100}
              src={"/Cart/2-2.jpg"}
              alt={""}
              className="rounded-md pr-2 mr-2"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="font-medium text-sm md:text-lg">item's name</h1>
            <p className="text-xs md:text-lg"> item's details</p>
          </div>
          <div>
            <IoClose
              color="red"
              className="cursor-pointer hover:scale-90 transition-all duration-300 ease-in-out max-sm:size-4 size-6" 
            />
          </div>
        </div>

        <div className="flex justify-between items-center font-semibold mt-2">
          <h1 className="text-xs md:text-lg">Subtotal :</h1>
          <h1 className="text-sm md:text-xl font-extrabold">$0.00</h1>
        </div>

        <div className="w-full flex justify-between gap-4 items-center font-semibold mt-5">
          <Link
            className="bg-black p-3 text-white rounded-2xl w-full text-center"
            href={"/Cart"}
          >
            <button>View Cart</button>
          </Link>
          <Link
            className="bg-black p-3 text-white rounded-2xl w-full text-center"
            href={"/Checkout"}
          >
            <button>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
