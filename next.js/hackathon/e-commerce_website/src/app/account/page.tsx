import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Service from "@/components/service";
import Footer from "@/components/footer";
import Head from "@/components/head";

export default function Account(){
    return(<>
    
    <Navbar />

    <Head title="My Account"/>

    <main className=" w-full flex flex-col lg:flex-row justify-evenly items-center gap-20 pb-12 lg:py-20 lg:px-40">

        <div className=" w-4/6 lg:w-1/3 h-[500px] flex flex-col md:justify-between justify-evenly">

            <h3 className=" text-4xl md:text-5xl mb-5 md:m-0">Login</h3>
            <form action="" className=" w-full flex flex-col justify-center gap-6">

                <label className=" font-bold" htmlFor="uname">Username or Email address</label>
                <input type="text" name="" id="uname" className=" border-2 p-3 md:p-5 rounded-lg" />

                <label className=" font-bold" htmlFor="upass">Password</label>
                <input type="password" name="" id="upass" className=" border-2 p-3 md:p-5 rounded-lg" />

                <div className=" flex flex-row gap-5 items-center">
                    <input className=" cursor-pointer w-4 h-4 rounded-lg" type="checkbox" name="" id="remem" />
                    <label className=" cursor-pointer" htmlFor="remem">Remember Me</label>
                </div>
                
                <div className=" flex flex-row items-end gap-5 ">
                <Button className=" w-40 h-10 text-lg hover:border-black focus:scale-95 transform transition duration-100" variant={"outline"}>Login</Button>
                    <Link className=" text-blue-500 hover:text-blue-800" href={'#'}>Lost Your Password?</Link>
                </div>
            </form>
        </div>
        
        <div className=" w-4/6 lg:w-1/3 h-[500px] mb-10 flex flex-col justify-between">

            <h3 className=" text-4xl md:text-5xl mb-5">Register</h3>
            <form action="" className=" w-full flex flex-col justify-center gap-5 lg:gap-3">

                <label className=" font-bold" htmlFor="umail">Email address</label>
                <input type="email" name="" id="umail" className=" border-2 p-3 md:p-5 rounded-lg" />

                <p>A link to set a new password will be sent to your email address.</p>

                <br />

                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="#"><span className=" cursor-pointer underline font-bold">privacy policy</span></Link>.</p>
                
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