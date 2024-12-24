import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";

export default function Contact(){
    return (
      <>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className=" border-b-2 pb-4">Shopping Cart</SheetTitle>
              <SheetDescription>
                <div className=" flex flex-row gap-5 items-center justify-between pt-3">
                    <Image className=" bg-[#FBEBB5] rounded-lg" src={'/images/products/Asgaard-sofa.png'} alt="Asgaard Sofa" width={100} height={100} />
                    <div className=" flex flex-col">
                        <h3>Asgaard Sofa</h3>
                        <div className=" flex flex-row gap-2">
                            <h3>1</h3>
                            <h3>X</h3>
                            <p className=" text-[#B88E2F] text-sm">Rs. 250,000.00</p>
                        </div>
                    </div>
                    <RxCrossCircled className=" text-xl  hover:scale-110 transform transition duration-300 cursor-pointer hover:text-black" />
                </div>
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
                <Button variant={'outline'}>Cart</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </>
    );
}