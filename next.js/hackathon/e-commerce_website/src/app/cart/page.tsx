import Image from "next/image";
import Navbar from "@/components/navbar";
import Quantity from "@/components/quantity";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Service from "@/components/service";
import Link from "next/link";
import Head from "@/components/head";

export default function Cart() {
  return (
    <>
    <Navbar />

      <Head title="Cart"/>

      <main>
        <div className=" w-full grid grid-cols-3 grid-rows-2 gap-16 lg:gap-7 md:p-20">
          <div className=" col-span-3 lg:col-span-2 row-span-2 gap-10">
            <div className=" w-full hidden md:flex flex-row justify-between bg-[#FFF9E5] font-bold pb-5 pt-5 rounded">
              <h1 className=" w-[60px]"></h1>
              <h1>Product</h1>
              <h1>Price</h1>
              <h1 className=" hidden lg:flex">Quantity</h1>
              <h1>Subtotal</h1>
              <h1></h1>
            </div>

            <div className=" w-full flex flex-col md:flex-row justify-between items-center gap-3 pt-10 ">
              <Image
                className=" bg-[#FBEBB5] rounded-lg"
                src={"/images/products/asgaard-sofa.png"}
                alt="Asgaard Sofa"
                width={106}
                height={106}
              />
              <h3 className=" text-gray-400">Asgaard Sofa</h3>
              <h3 className=" text-gray-400">Rs. 250,000.00</h3>
              <h3 className=" hidden lg:flex"><Quantity /></h3>
              <h3>Rs. 250,000.00</h3>
              <AiFillDelete className=" text-[#FBEBB5] scale-125 hover:scale-150 active:scale-125 transform transition duration-150 hover:text-gray-700" />
            </div>
          </div>
          <div className=" col-span-3 lg:col-span-1 row-span-2 place-content-center place-items-center bg-[#FFF9E5] rounded md:ml-auto py-7 sm:p-12 md:p-16">
            <h1 className=" font-bold text-3xl">Cart Totals</h1>
            <div className=" grid grid-cols-2 gap-5 mt-20">
              <h3 className=" font-bold">Subtotal</h3>
              <h3 className=" text-gray-400 text-end">Rs. 250,000.00</h3>
              <h3 className=" font-bold">Total</h3>
              <h3 className=" text-[#B88E2F] text-xl">Rs. 250,000.00</h3>
            </div>
            <Link href={"./checkout"} passHref>
              <Button
                className=" text-xl mt-16 bg-transparent border-black pt-6 pb-6 pl-8 pr-8 hover:bg-[#B88E2F]/60 active:scale-95 transform transition duration-150"
                variant={"outline"}
              >
                Check Out
              </Button>
              </Link>
          </div>
        </div>
      </main>

      <Service />
      <Footer />
    </>
  );
}
