import { MdArrowForwardIos } from "react-icons/md";
import Navbar from "../components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Service from "../components/service";
import Footer from "../components/footer";

export default function Account(){
    return(<>
    
    <nav><Navbar /></nav>

    <header className=" h-[50vh] bg-[url('/images/shop_banner.png')] bg-cover bg-center flex flex-col justify-center items-center gap-5 mt-12 mb-20">
              <Image
                className=" scale-150 transform"
                src={"/images/logo.png"}
                alt="Logo"
                width={77}
                height={77}
              />
              <h1 className=" text-7xl font-bold">My Account</h1>
              <div className=" flex justify-center gap-2 items-center text-xl">
                <h1 className=" font-bold">Home </h1>
                <MdArrowForwardIos className="" />
                <h1>My Account</h1>
              </div>
    </header>

    <main className=" w-full flex flex-col lg:flex-row justify-between items-center gap-20 p-2 lg:pt-20 lg:pb-20 lg:pr-40 lg:pl-40">

        <div className=" w-4/6 lg:w-1/3 h-[500px] mb-10 flex flex-col justify-between">

            <h3 className=" text-5xl">Login</h3>
            <form action="" className=" w-full flex flex-col justify-center gap-6">

                <label className=" font-bold" htmlFor="uname">Username or Email address</label>
                <input type="text" name="" id="uname" className=" border-2 p-5 rounded-lg" />

                <label className=" font-bold" htmlFor="upass">Password</label>
                <input type="password" name="" id="upass" className=" border-2 p-5 rounded-lg" />

                <div className=" flex flex-row gap-5 items-center">
                    <input className=" w-4 h-4 rounded-lg" type="checkbox" name="" id="remem" />
                    <label htmlFor="remem">Remember Me</label>
                </div>
                
                <div className=" flex flex-row items-end gap-5 ">
                <Button className=" w-40 h-10 text-lg hover:border-black focus:scale-95 transform transition duration-100" variant={"outline"}>Login</Button>
                    <Link className=" text-blue-800 hover:text-blue-500" href={'#'}>Lost Your Password?</Link>
                </div>
            </form>
        </div>
        
        <div className=" w-4/6 lg:w-1/3 h-[500px] mb-10 flex flex-col justify-between">

            <h3 className=" text-5xl">Register</h3>
            <form action="" className=" w-full flex flex-col justify-center gap-5 lg:gap-3">

                <label className=" font-bold" htmlFor="umail">Email address</label>
                <input type="email" name="" id="umail" className=" border-2 p-5 rounded-lg" />

                <p>A link to set a new password will be sent to your email address.</p>

                <br />

                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.</p>
                
                <div className=" flex flex-row items-end gap-5 ">
                    <Button className=" w-40 h-10 text-lg hover:border-black focus:scale-95 transform transition duration-100" variant={"outline"}>Register</Button>
                </div>
            </form>
        </div>
    
    </main>

    <footer>

    <Service />
    <Footer />
    </footer>
    </>)
}