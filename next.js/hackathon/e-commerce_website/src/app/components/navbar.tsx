'use client'
import { MdOutlineAccountCircle, MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { useState } from "react";
import CartSheet from "./cartsheet";


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(<>
        <nav className=" flex justify-around text-2xl font-bolder pt-5">
            <div></div>

            <div className=" flex gap-8 mt-4">
                <Link href="/" className="hover:scale-125 transform transition duration-100"><span className="  hover:border-b-2 hover:border-black ">Home</span></Link>
                <Link href="./shop" className="hover:scale-125 transform transition duration-100"><span className="  hover:border-b-2 hover:border-black ">Shop</span></Link>
                <Link href="" className="hover:scale-125 transform transition duration-100"><span className="  hover:border-b-2 hover:border-black ">About</span></Link>
                <Link href="" className="hover:scale-125 transform transition duration-100"><span className="  hover:border-b-2 hover:border-black ">Contact</span></Link>
            </div>

            <div className="flex gap-8 mt-4">
                <a href="#" className="hover:scale-125 transform transition duration-100">
                <MdOutlineAccountCircle />
                </a>
                <a href="#" className="hover:scale-125 transform transition duration-100">
                <MdOutlineSearch />
                </a>
                <a href="#" className="hover:scale-125 transform transition duration-100">
                <FaRegHeart />
                </a>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen} >
          <SheetTrigger className="hover:scale-125 transform transition duration-100">
            <a href="#" onClick={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
            >
              <MdOutlineShoppingCart />
            </a>
          </SheetTrigger>

          <SheetContent className="w-80 p-6">
            <SheetTitle>Shopping Cart</SheetTitle>
            <CartSheet />

            {/* Close button */}
            <SheetClose onClick={() => setIsOpen(false)} className="mt-4 text-blue-500">
              Close
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
        </nav>
    
    </>)
}