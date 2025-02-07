"use client";
import {
  MdOutlineAccountCircle,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import CartSheet from "./cartsheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navIsOpen, navSetIsOpen] = useState(false);
  return (
    <>
      <nav className=" relative w-full flex flex-col justify-center items-center text-2xl font-bolder pt-5">
        <div className=" w-full flex justify-around items-center">
          <div className=" block md:hidden mt-4">Furniro</div>

          <div className=" hidden md:flex gap-8 mt-4">
            <Link href="/" passHref>
              <span className="  hover:border-b-2 border-[#B88E2F] hover:text-[#B88E2F] pb-1">
                Home
              </span>
            </Link>
            <Link href="/shop" passHref>
              <span className="  hover:border-b-2 border-[#B88E2F] hover:text-[#B88E2F] pb-1">
                Shop
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="  hover:border-b-2 border-[#B88E2F] hover:text-[#B88E2F] pb-1">
                About
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span className="  hover:border-b-2 border-[#B88E2F] hover:text-[#B88E2F] pb-1">
                Contact
              </span>
            </Link>
          </div>

          <div className=" md:hidden cursor-pointer p-1 hover:bg-gray-600/50 rounded-full">
            <TiThMenu onClick={() => navSetIsOpen(!navIsOpen)} />
          </div>

          <div className=" hidden md:flex justify-between items-center gap-8 mt-4 mr-4">
            <Link
              href="/account"
              className="hover:scale-125 hover:text-[#B88E2F] transform transition duration-100"
              passHref
            >
              <MdOutlineAccountCircle />
            </Link>
            <Link
              href="#"
              className="hover:scale-125 hover:text-[#B88E2F] transform transition duration-100"
              passHref
            >
              <MdOutlineSearch />
            </Link>
            <Link
              href="#"
              className="hover:scale-125 hover:text-[#B88E2F] transform transition duration-100"
              passHref
            >
              <FaRegHeart />
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="hover:scale-125 hover:text-[#B88E2F] transform transition duration-100">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(true);
                  }}
                >
                  <MdOutlineShoppingCart />
                </Link>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription>
                    <CartSheet />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div
          className={`${
            navIsOpen ? "block" : "hidden"
          } absolute top-full shadow-md w-full max-w-96 self-end px-12 py-3 flex flex-col items-center gap-8 mt-4 bg-accent/25 rounded-lg transition-transform duration-300 ease-out transform`}
        >
            <Link
              href="/account"
              className=" w-full flex flex-row justify-between items-center gap-5 hover:text-[#B88E2F] transform transition duration-100"
              passHref
            >
              <h1>Account</h1>
              <MdOutlineAccountCircle />
            </Link>
            <Link
              href="#"
              className=" w-full flex flex-row justify-between items-center gap-5 hover:text-[#B88E2F] transform transition duration-100"
              passHref
            >
              <h1>Search</h1>
              <MdOutlineSearch />
            </Link>
            <Link
              href="#"
              className=" w-full flex flex-row justify-between items-center gap-5 hover:text-[#B88E2F] transform transition duration-100"
              passHref
            >
              <h1>Favourites</h1>
              <FaRegHeart />
            </Link>
            <Link
              href="/cart"
              className=" w-full flex flex-row justify-between items-center gap-5 hover:text-[#B88E2F] transform transition duration-100"
              passHref
            >
              <h1>Your Cart</h1>
              <MdOutlineShoppingCart />
            </Link>
        </div>
      </nav>
    </>
  );
}
