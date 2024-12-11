import Navbar from "./components/navbar" ;
import Footer from "./components/footer"
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (<>

    <nav className=" bg-[#FBEBB5]">
      <Navbar />
    </nav>

      <header className=" bg-[#FBEBB5] flex flex-col-reverse lg:flex-row lg:h-[100vh]">

        <div className=" lg:w-1/2 flex flex-col justify-center pl-24 lg:pt-24 pb-24">
          <h1 className=" text-8xl">Rocket single seater</h1>
          <a href="" className=" mt-12 text-4xl hover:underline">Shop Now</a>
        </div>

        <div className=" w-full lg:w-1/2 lg:pb-20">
          <Image src={'/images/rocket-single-seater.png'} alt="main image" width={'2000'} height={'1000'} />
        </div>

      </header>
    

          {/* Section 2  */}

    <section className="flex lg:flex-row flex-col bg-[#FAF4F4]">

      <div className=" w-1/2 m-24 ml-36">
        <div className=" relative">
          <Image src={'/images/side-table1.png'} alt="" width={605} height={562} />
        
          <div className=" absolute bottom-0 left-0 z-10">
            <h1 className=" text-4xl font-bold">Side Table</h1><br />
            <a href="" className=" text-2xl hover:underline">View More</a>
          </div>
        </div>
      </div>

      <div className=" w-1/2 m-24 mr-36">
        <div className=" relative">
          <Image src={'/images/side-table2.png'} alt="" width={605} height={562} />
        
          <div className=" absolute bottom-0 left-0 z-10">
            <h1 className=" text-4xl font-bold">Side Table</h1><br />
            <a href="" className=" text-2xl hover:underline">View More</a>
          </div>
        </div>
      </div>

    </section>


    {/* ------------ Section 3 -------------- */}

    <section className=" flex flex-col justify-center items-center pl-20 lg:pl-40 pr-20 lg:pr-40">

      <div className=" flex flex-col justify-center items-center pt-24">
        <h1 className=" text-4xl">Top Picks For You</h1>
        <p className=" text-gray-400 mt-5">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      </div>

      <div className=" flex flex-col lg:flex-row justify-between gap-12 mt-8 mb-8">

        <div className=" flex flex-col justify-between">
          <Image className="  m-auto" src={'/images/Trenton-modular-sofa.png'} alt="Product" width={287} height={287}/>
          <div><h1>Trenton Modular Sofa-3</h1>
          <h1>Rs. 25,000.00</h1></div>
        </div>

        <div className=" flex flex-col justify-between">
          <Image className="  m-auto" src={'/images/Granite-dining-table-with-dining-chair.png'} alt="Product" width={287} height={287}/>
          <div><h1>Granite dining table with dining chair</h1>
          <h1>Rs. 25,000.00</h1></div>
        </div>

        <div className=" flex flex-col justify-between">
          <Image className="  m-auto" src={'/images/Outdoor-bar-table-and-stool.png'} alt="Product" width={287} height={287}/>
          <div><h1>Outdoor bar table and stool</h1>
          <h1>Rs. 25,000.00</h1></div>
        </div>

        <div className=" flex flex-col justify-between">
          <Image className="  m-auto" src={'/images/Plain-console-with-teak-mirror.png'} alt="Product" width={287} height={287}/>
          <div><h1>Plain console with teak mirror</h1>
          <h1>Rs. 25,000.00</h1></div>
        </div>

      </div>

      <h1 className=" text-2xl hover:underline mt-12 mb-20">View More</h1>
    </section>


    {/* ------------ Section 3 -------------- */}

    <section className=" flex flex-col-reverse pt-10 lg:flex-row bg-[#FFF9E5]">

      <Image src={"/images/Asgaard-sofa.png"} alt="Product" width={947} height={799} />

      <div className=" flex flex-col justify-center items-center gap-5 m-auto">
        <h1 className=" text-2xl font-bold">New Arrivals</h1>
        <h1 className=" text-5xl font-bold">Asgaard sofa</h1>
        <Button variant="outline" className=" bg-[#FFF9E5] text-2xl mt-4 pl-10 pr-10 pt-7 pb-7 border-[3px] border-black hover:bg-transparent">Order Now</Button>
      </div>


    </section>


    {/* ------------ Section 4 -------------- */}

    <section className=" w-full flex flex-col items-center p-20">

      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-4xl">Our Blogs</h1>
        <p className=" text-gray-400 mb-12 mt-4">Find a bright ideal to suit your taste with our great selection</p>
      </div>

      <div className=" flex flex-col lg:flex-row gap-20 lg:gap-5 pb-12">

        <div className=" flex flex-col items-center gap-2">
          <Image src={'/images/blog1.png'} alt="Blog-1" width={393} height={393}/>
          <p className=" mt-4">Going all-in with millennial design</p>
          <h1 className=" hover:underline font-bold text-xl">Read More</h1>

          <div className=" flex justify-between gap-5">

            <span className=" flex justify-center items-center gap-1">
              <FaRegClock />
              <span>
                5 min
              </span>
              </span>
            <span className="flex items-center gap-1">
              <FaRegCalendarAlt />
              <span>
              12
              <sup className="ml-0.5 text-xs">th</sup>
              </span>
              Oct 2022
            </span>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2">
          <Image src={'/images/blog2.png'} alt="Blog-1" width={393} height={393}/>
          <p className=" mt-4">Going all-in with millennial design</p>
          <h1 className=" hover:underline font-bold text-xl">Read More</h1>

          <div className=" flex justify-between gap-5">

            <span className=" flex justify-center items-center gap-2">
              <FaRegClock />
              <span>
                5 min
              </span>
              </span>
            <span className="flex items-center gap-1">
              <FaRegCalendarAlt />
              <span>
              12
              <sup className="ml-0.5 text-xs">th</sup>
              </span>
              Oct 2022
            </span>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-2">
          <Image src={'/images/blog3.png'} alt="Blog-1" width={393} height={393}/>
          <p className=" mt-4">Going all-in with millennial design</p>
          <h1 className=" hover:underline font-bold text-xl">Read More</h1>

          <div className=" flex justify-between gap-5">

            <span className=" flex justify-center items-center gap-2">
              <FaRegClock />
              <span>
                5 min
              </span>
              </span>
            <span className="flex items-center gap-1">
              <FaRegCalendarAlt />
              <span>
              12
              <sup className="ml-0.5 text-xs">th</sup>
              </span>
              Oct 2022
            </span>
          </div>
        </div>

      </div>

      <div className=" border-b-4 border-black pt-3 pb-3">
        <h1 className=" text-3xl font-bold">View All Posts</h1>
      </div>
    </section>


    {/* ------------ Section 5 -------------- */}

    <section className=" h-[60vh] bg-[url('/images/insta.png')] bg-cover bg-center flex flex-col justify-center items-center gap-5">
      <h1 className=" text-7xl font-bold">Our Instagram</h1>
      <h1 className=" text-xl">Follow our store on Instagram</h1>
      <Button className=" rounded-t-full rounded-b-full mt-4 p-8 pl-16 pr-16 text-2xl bg-[#F4F4F4]-5 hover:bg-[#F4F4F4]-5 text-black shadow-2xl shadow-gray-600 hover:bg-gray-800/25 hover:text-white">Follow Us</Button>
    </section>


    {/* ------------ Footer -------------- */}

    <Footer />
  </>
  );
}
