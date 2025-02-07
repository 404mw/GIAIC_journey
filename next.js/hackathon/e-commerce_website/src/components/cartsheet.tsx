import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";

export default function CartSheet(){
    return(
        <>
          <div className=" w-full min-h-[90vh] border-t pt-10 flex flex-col justify-between">

            <div className=" w-full flex flex-row justify-between items-center">
                <Image className=" bg-[#FBEBB5] rounded-lg" src={"/images/products/asgaard-sofa.png"} alt="Asgaard Sofa" width={108} height={105} />
                <div className=" flex flex-col gap-3">
                    <h1 className=" text-lg">Asgaard Sofa</h1>
                    <div className=" flex flex-row justify-between items-center gap-3">
                        <p>1</p>
                        <p>X</p>
                        <p className=" text-[#B88E2F]">Rs. 250,000.00</p>
                    </div>
                </div>
                <IoIosCloseCircle className=" text-2xl hover:text-gray-400 active:scale-90 cursor-pointer" />
            </div>

            <div>
                <div className=" flex flex-row justify-between items-center p-5 border-b">
                    <h3 className=" text-lg">Subtotal</h3>
                    <p className=" text-[#B88E2F]">Rs. 250,000.00</p>
                </div>
                <div className=" flex flex-row justify-between items-center p-5">
                    <Link href={"./cart"} passHref><Button className=" rounded-full border-black hover:scale-105 active:scale-100 transform transition duration-100" variant={"outline"} >View Cart</Button></Link>
                    <Link href={"./checkout"} passHref><Button className=" rounded-full border-black hover:scale-105 active:scale-100 transform transition duration-100" variant={"outline"}>Check Out</Button></Link>
                </div>
            </div>
          </div>
        
        </>
    )
}