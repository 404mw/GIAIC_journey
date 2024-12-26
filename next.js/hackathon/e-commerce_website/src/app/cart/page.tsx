import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import Navbar from "../components/navbar";
import Quantity from "../components/quantity";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Footer from "../components/footer";
import Service from "../components/service";

export default function Cart() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <header className=" h-[50vh] bg-[url('/images/shop_banner.png')] bg-cover bg-center flex flex-col justify-center items-center gap-5 mt-12 mb-12">
        <Image
          className=" scale-150 transform"
          src={"/images/logo.png"}
          alt="Logo"
          width={77}
          height={77}
        />
        <h1 className=" text-7xl font-bold">Cart</h1>
        <div className=" flex justify-center gap-2 items-center text-xl">
          <h1 className=" font-bold">Home </h1>
          <MdArrowForwardIos className="" />
          <h1>Cart</h1>
        </div>
      </header>

      <main>
        <div className=" w-full grid grid-cols-3 grid-rows-2 gap-7 p-20">
          <div className=" col-span-3 lg:col-span-2 gap-10">
            <div className=" w-full flex flex-row justify-between bg-[#FFF9E5] font-bold p-5 rounded">
              <h1 className=" w-[60px]"></h1>
              <h1>Product</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Subtotal</h1>
              <h1></h1>
            </div>
            <div className=" w-full flex flex-row justify-between items-center gap-3 pt-10 ">
              <Image
                className=" bg-[#FBEBB5] rounded-lg"
                src={"/images/products/asgaard-sofa.png"}
                alt="Asgaard Sofa"
                width={106}
                height={106}
              />
              <h3 className=" text-gray-400">Asgaard Sofa</h3>
              <h3 className=" text-gray-400">Rs. 250,000.00</h3>
              <Quantity />
              <h3>Rs. 250,000.00</h3>
              <AiFillDelete className=" text-[#FBEBB5] scale-125 hover:scale-150 active:scale-125 transform transition duration-150 hover:text-gray-700" />
            </div>
          </div>
          <div className=" col-span-3 lg:col-span-1 row-span-2 place-content-center place-items-center bg-[#FFF9E5] rounded p-16">
            <h1 className=" font-bold text-3xl">Cart Totals</h1>
            <div className=" grid grid-cols-2 gap-5 mt-20">
              <h3 className=" font-bold">Subtotal</h3>
              <h3 className=" text-gray-400 text-end">Rs. 250,000.00</h3>
              <h3 className=" font-bold">Total</h3>
              <h3 className=" text-[#B88E2F] text-xl">Rs. 250,000.00</h3>
            </div>
            <Button
              className=" text-xl mt-16 bg-transparent border-black pt-6 pb-6 pl-8 pr-8 hover:bg-[#B88E2F]/60 active:scale-95 transform transition duration-150"
              variant={"outline"}
            >
              Check Out
            </Button>
          </div>
        </div>
      </main>

      <footer>
        <Service />
        <Footer />
      </footer>
    </>
  );
}
