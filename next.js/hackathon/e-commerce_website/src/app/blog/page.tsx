import Image from "next/image";
import Navbar from "@/components/navbar";
import { IoPerson } from "react-icons/io5";
import { FaCalendar, FaTag, FaSearch } from "react-icons/fa";
import Link from "next/link";
import Service from "@/components/service";
import Footer from "@/components/footer";
import Head from "@/components/head";

export default function Blog() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <Head title="Blog"/>

      <main className=" w-full flex flex-col">
        <div className=" flex flex-row gap-5 md:p-12">
          <section className=" lg:w-2/3 flex flex-col gap-20 md:p-12">
            <div className=" flex flex-col gap-3">
              <Image
                src={"/images/blog/blog1.png"}
                alt={"Blog 1"}
                width={817}
                height={500}
              />
              <div className=" flex flex-row justify-start gap-5 text-gray-500">
                <div className=" flex flex-row gap-1 items-center">
                  <IoPerson />
                  <h3>Admin</h3>
                </div>

                <div className=" flex flex-row gap-1 items-center">
                  <FaCalendar />
                  <h3>14 Oct 2022</h3>
                </div>

                <div className=" flex flex-row gap-1 items-center">
                  <FaTag />
                  <h3>Wood</h3>
                </div>
              </div>

              <h1 className=" text-2xl md:text-3xl font-bold pt-5 px-2">
                Going all-in with millennial design
              </h1>
              <p className=" w-[817px] text-gray-500 px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>

              <span className=" px-2">
                <Link
                  className=" p-2 border-b-4 border-gray-400 hover:border-b-black"
                  href=""
                >
                  Read more
                </Link>
              </span>
            </div>

            <div className=" flex flex-col gap-3">
              <Image
                src={"/images/blog/blog2.png"}
                alt={"Blog 1"}
                width={817}
                height={500}
              />
              <div className=" flex flex-row justify-start gap-5 text-gray-500">
                <div className=" flex flex-row gap-1 items-center">
                  <IoPerson />
                  <h3>Admin</h3>
                </div>

                <div className=" flex flex-row gap-1 items-center">
                  <FaCalendar />
                  <h3>14 Oct 2022</h3>
                </div>

                <div className=" flex flex-row gap-1 items-center">
                  <FaTag />
                  <h3>Wood</h3>
                </div>
              </div>

              <h1 className=" text-3xl font-bold pt-5 px-2">
                Exploring new ways of decorating
              </h1>
              <p className="w-[817px] text-gray-500 px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>

              <span className=" px-2">
                <Link
                  className=" pb-2 border-b-4 border-gray-400 hover:border-b-black"
                  href=""
                >
                  Read more
                </Link>
              </span>
            </div>

            <div className=" flex flex-col gap-3">
              <Image
                src={"/images/blog/blog3.png"}
                alt={"Blog 1"}
                width={817}
                height={500}
              />
              <div className=" flex flex-row justify-start gap-5 text-gray-500">
                <div className=" flex flex-row gap-1 items-center">
                  <IoPerson />
                  <h3>Admin</h3>
                </div>

                <div className=" flex flex-row gap-1 items-center">
                  <FaCalendar />
                  <h3>14 Oct 2022</h3>
                </div>

                <div className=" flex flex-row gap-1 items-center">
                  <FaTag />
                  <h3>Handmade</h3>
                </div>
              </div>

              <h1 className=" text-3xl font-bold pt-5 px-2">
                Handmade pieces that took time to make
              </h1>
              <p className="w-[817px] text-gray-500 px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>

              <span className=" px-2">
                <Link
                  className=" pb-2 border-b-4 border-gray-400 hover:border-b-black"
                  href=""
                >
                  Read more
                </Link>
              </span>
            </div>
          </section>

          <section className=" w-1/3 hidden lg:flex flex-col gap-8 md:p-12">
            <div className="relative flex flex-row items-center">
                <input className=" w-full border-2 hover:border-black rounded-md p-2" type="text" name="" id="" placeholder="Search" />
                <FaSearch className=" absolute right-3 hover:scale-125" />
            </div>

            <h3 className=" text-2xl font-bold pt-3">Categories</h3>

            <div className=" flex flex-col gap-1 text-gray-400">
              <div className=" flex flex-row justify-between pt-5 pb-5 pl-3 pr-3 rounded-lg cursor-pointer hover:bg-gray-500/5 ">
                <p>Crafts</p>
                <p>2</p>
              </div>
              <div className=" flex flex-row justify-between pt-5 pb-5 pl-3 pr-3 rounded-lg cursor-pointer hover:bg-gray-500/5 ">
              <p>Design</p>
              <p>8</p>
              </div>
              <div className=" flex flex-row justify-between pt-5 pb-5 pl-3 pr-3 rounded-lg cursor-pointer hover:bg-gray-500/5 ">
              <p>Handmade</p>
              <p>7</p>
              </div>
              <div className=" flex flex-row justify-between pt-5 pb-5 pl-3 pr-3 rounded-lg cursor-pointer hover:bg-gray-500/5 ">
              <p>Interior</p>
              <p>1</p>
              </div>
              <div className=" flex flex-row justify-between pt-5 pb-5 pl-3 pr-3 rounded-lg cursor-pointer hover:bg-gray-500/5 ">
              <p>Wood</p>
              <p>6</p>
              </div>
            </div>

            <h3 className=" text-2xl font-bold pt-3">Recent Posts</h3>

            <div className=" w-full flex flex-col gap-5">
              <div className=" grid grid-cols-3 grid-rows-2 items-center ld:pr-8">
                <Image className=" row-span-2" src={"/images/blog/blog4.png"} alt="Blog 4" width={80} height={80}/>
                <p className=" col-span-2">Going all-in with millennial design</p>
                <p className=" col-span-2 text-gray-400">03 Aug 2022</p>
              </div>
              
              <div className=" grid grid-cols-3 grid-rows-2 items-center pr-6">
                <Image className=" row-span-2" src={"/images/blog/blog5.png"} alt="Blog 5" width={80} height={80}/>
                <p className=" col-span-2">Exploring new ways of decorating</p>
                <p className=" col-span-2 text-gray-400">03 Aug 2022</p>
              </div>

              <div className=" grid grid-cols-3 grid-rows-2 items-center pr-6">
                <Image className=" row-span-2" src={"/images/blog/blog6.png"} alt="Blog 6" width={80} height={80}/>
                <p className=" col-span-2">Handmade pieces that took time to make</p>
                <p className=" col-span-2 text-gray-400">03 Aug 2022</p>
              </div>

              <div className=" grid grid-cols-3 grid-rows-2 items-center pr-6">
                <Image className=" row-span-2" src={"/images/blog/blog7.png"} alt="Blog 7" width={80} height={80}/>
                <p className=" col-span-2">Modern home in Milan</p>
                <p className=" col-span-2 text-gray-400">03 Aug 2022</p>
              </div>
    
              <div className=" grid grid-cols-3 grid-rows-2 items-center pr-6">
                <Image className=" row-span-2" src={"/images/blog/blog8.png"} alt="Blog 8" width={80} height={80}/>
                <p className=" col-span-2">Colorful office redesign</p>
                <p className=" col-span-2 text-gray-400">03 Aug 2022</p>
              </div>

            </div>

          </section>
        </div>

        <div className="hidden md:flex justify-center items-center gap-6 m-8">
            <span className=" cursor-pointer pt-3 pb-3 pl-6 pr-6 bg-[#FBEBB5] rounded-lg">1</span>
            <span className=" cursor-pointer pt-3 pb-3 pl-6 pr-6 bg-[#FFF9E5] rounded-lg hover:bg-[#FBEBB5]">2</span>
            <span className=" cursor-pointer pt-3 pb-3 pl-6 pr-6 bg-[#FFF9E5] rounded-lg hover:bg-[#FBEBB5]">3</span>
            <span className=" cursor-pointer pt-3 pb-3 pl-6 pr-6 bg-[#FFF9E5] rounded-lg hover:bg-[#FBEBB5]">NEXT</span>
          </div>
      </main>

      <Service />
      <Footer />
    </>
  );
}
