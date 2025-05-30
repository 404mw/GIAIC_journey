import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Service from "@/components/service";
import Footer from "@/components/footer";
import Head from "@/components/head";

export default function Contact(){
    return (
      <>
        <nav>
          <Navbar />
        </nav>

        <Head title="Contact"/>

        <main className=" flex flex-col justify-center items-center p-2 lg:p-20">
          <div className=" w-2/3 lg:w-1/2 flex flex-col justify-center items-center text-center gap-5">
            <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl">Get In Touch With Us</h1>
            <p className=" text-sm md:text-lg text-gray-500">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>

          <div className=" w-full flex flex-col lg:flex-row gap-5 p-7 sm:p-12 md:p-20 lg:mt-20">

            <div className=" w-full lg:w-1/2 flex flex-col gap-16 my-20 lg:my-0">
              <div className=" flex flex-row gap-8">
              <HiLocationMarker className=" text-5xl" />
              <div className=" flex flex-col gap-5 lg:pr-48">
                <h3 className=" text-4xl">Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
              </div>
              
              <div className=" flex flex-row gap-8">
              <FaPhoneAlt className=" text-4xl" />
              <div className=" flex flex-col gap-3 lg:pr-48">
                <h3 className=" text-4xl">Phone</h3>
                <p>Mobile: +(84) 546-6789 </p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
              </div>

              <div className=" flex flex-row gap-8">
              <FaClock className=" text-4xl" />
              <div className=" flex flex-col gap-3 lg:pr-48">
                <h3 className=" text-4xl">Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
              </div>

            </div>

            <form action="" className=" w-full lg:w-1/2 flex flex-col gap-5">
              <label htmlFor="fname">Your Name</label>
              <input className=" border-2 p-5 rounded-lg" type="text" name="" id="fname" placeholder="Abc" minLength={3} required />

              <label htmlFor="email">Email address</label>
              <input
                className=" border-2 p-5 rounded-lg" type="email"
                name=""
                id="email"
                placeholder="abc@def.com"
                required
              />

              <label htmlFor="sub">Subject</label>
              <input className=" border-2 p-5 rounded-lg" type="text" name="" id="sub" placeholder=" Optional" />

              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id="message"
                className=" border-2 p-5 resize-none w-full h-44 rounded-lg"
                placeholder="Hi! i’d like to ask about"
                maxLength={300}
                required
              ></textarea>
              <Button className=" w-full align-center hover:border-black focus:scale-95 transform transition duration-100" variant={"outline"}>Submit</Button>
            </form>

          </div>
        </main>

        <footer>
          <Service />
          <Footer />
        </footer>
      </>
    );
}

