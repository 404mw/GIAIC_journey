import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getLatestProducts } from "@/sanity/utils/fetchProducts";
import ProductCard from "@/components/productCart";

export default async function Home() {
  const products = await getLatestProducts();

  return (
    <>
      <header className=" w-full h-full bg-[#FBEBB5]">
        <Navbar />

        {/* Hero section*/}
        <section className=" max-w-full w-full flex flex-col-reverse md:flex-row md:h-[100vh]">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:pl-24 md:pt-24 lg:pb-24">
            <h1 className=" text-6xl md:text-7xl lg:text-8xl">
              Rocket Single Seater
            </h1>
            <Link href="/shop" className="mt-12 text-4xl">
              <span className="border-b-4 border-black hover:border-[#B88E2F] pb-3">
                Shop Now
              </span>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              className="w-full h-full object-cover"
              src="/images/products/rocket-single-seater.png"
              alt="Rocket single seater product image"
              width={2000}
              height={1000}
            />
          </div>
        </section>
      </header>

      {/* Side tables*/}

      <section className=" w-full flex lg:flex-row flex-col bg-[#FAF4F4]">
        <div className=" w-1/2 m-24 md:ml-36">
          <div className=" relative">
            <Image
              className=""
              src={"/images/products/side-table1.png"}
              alt=""
              width={605}
              height={562}
            />

            <div className=" absolute top-[80%] left-0 z-10">
              <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold pb-2">
                Side Table
              </h1>
              <Link href="/shop" className=" text-lg sm:text-xl md:text-2xl">
                <span className=" border-b-4 border-black pb-3 hover:border-[#B88E2F]">
                  View More
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className=" w-1/2 m-24 md:ml-36">
          <div className=" relative">
            <Image
              className=""
              src={"/images/products/side-table2.png"}
              alt=""
              width={605}
              height={562}
            />

            <div className=" absolute top-[80%] left-0 z-10">
              <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold pb-2">
                Side Table
              </h1>
              <Link href="/shop" className=" text-lg sm:text-xl md:text-2xl">
                <span className=" border-b-4 border-black pb-3 hover:border-[#B88E2F]">
                  View More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------ Top Picks -------------- */}

      <section className=" flex flex-col justify-center items-center px-10 md:px20 lg:px-40">
        <div className=" flex flex-col justify-center items-center pt-24">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl">
            Top Picks For You
          </h1>
          <p className=" w-10/12 text-center text-gray-400 my-5">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>

        <div className=" flex flex-col lg:flex-row justify-between gap-12 mt-8 mb-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.slug.current} product={product} />
          ))}
        </div>

        <Link href="/shop">
          <h1 className=" text-2xl mt-12 mb-20 cursor-pointer">
            <span className=" border-b-4 border-black pb-3 hover:border-[#B88E2F]">
              View More
            </span>
          </h1>
        </Link>
      </section>

      {/* ------------ Asgaard - New Arrival -------------- */}

      <section className=" flex flex-col-reverse pt-10 lg:flex-row bg-[#FFF9E5]">
        <Image
          src={"/images/products/Asgaard-sofa.png"}
          alt="Product"
          width={947}
          height={799}
        />

        <div className=" flex flex-col justify-center items-center gap-5 m-auto">
          <h1 className=" text-xl md:text-2xl font-bold">New Arrivals</h1>
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold">
            Asgaard sofa
          </h1>
          <Link href="/shop/product">
            <Button
              variant="outline"
              className=" bg-[#FFF9E5] text-xl md:text-2xl my-4 px-5 md:px-10 py-7 border-[3px] border-black hover:border-[#B88E2F] active:scale-95 transition transform duration-100"
            >
              Order Now
            </Button>
          </Link>
        </div>
      </section>

      {/* ------------ Blogs -------------- */}

      <section className=" w-full flex flex-col items-center p-7 md:p12 lg:p-20">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" text-4xl">Our Blogs</h1>
          <p className=" text-gray-400 mb-12 mt-4 text-center">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>

        <div className=" flex flex-col lg:flex-row gap-20 lg:gap-5 pb-12">
          <div className=" flex flex-col items-center gap-2">
            <Image
              className=" cursor-pointer hover:opacity-80"
              src={"/images/blog1.png"}
              alt="Blog-1"
              width={393}
              height={393}
            />
            <p className=" mt-4">Going all-in with millennial design</p>
            <Link href="#">
              <h1 className=" hover:underline font-bold text-xl cursor-pointer">
                Read More
              </h1>
            </Link>

            <div className=" flex justify-between gap-5">
              <span className=" flex justify-center items-center gap-1">
                <FaRegClock />
                <span>5 min</span>
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
            <Image
              className=" cursor-pointer hover:opacity-80"
              src={"/images/blog2.png"}
              alt="Blog-1"
              width={393}
              height={393}
            />
            <p className=" mt-4">Going all-in with millennial design</p>
            <Link href="#">
              <h1 className=" hover:underline font-bold text-xl cursor-pointer">
                Read More
              </h1>
            </Link>

            <div className=" flex justify-between gap-5">
              <span className=" flex justify-center items-center gap-2">
                <FaRegClock />
                <span>5 min</span>
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
            <Image
              className=" cursor-pointer hover:opacity-80"
              src={"/images/blog3.png"}
              alt="Blog-1"
              width={393}
              height={393}
            />
            <p className=" mt-4">Going all-in with millennial design</p>
            <Link href="#">
              <h1 className=" hover:underline font-bold text-xl cursor-pointer">
                Read More
              </h1>
            </Link>

            <div className=" flex justify-between gap-5">
              <span className=" flex justify-center items-center gap-2">
                <FaRegClock />
                <span>5 min</span>
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

        <div className=" border-b-4 border-black hover:border-[#B88E2F] pt-3 pb-3">
          <Link href="/blog">
            <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold">
              View All Posts
            </h1>
          </Link>
        </div>
      </section>

      {/* ------------ Social - Insta -------------- */}

      <section className=" h-[60vh] bg-[url('/images/insta.png')] bg-cover bg-center flex flex-col justify-center items-center gap-5">
        <h1 className=" text-4xl md:text-5xl lg:text-7xl font-bold">
          Our Instagram
        </h1>
        <h1 className=" text-lg md:text-xl">Follow our store on Instagram</h1>
        <Button className=" rounded-t-full rounded-b-full mt-4 p-8 pl-16 pr-16 text-2xl bg-[#F4F4F4]-5 hover:bg-[#F4F4F4]-5 text-black shadow-2xl shadow-gray-600 hover:bg-[#B88E2F]/50 hover:text-white active:scale-95 transform transition duration-100">
          Follow Us
        </Button>
      </section>

      {/* ------------ Footer -------------- */}

      <Footer />
    </>
  );
}
