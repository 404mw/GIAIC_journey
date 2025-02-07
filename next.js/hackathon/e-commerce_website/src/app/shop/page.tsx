import Navbar from "@/components/navbar";
import { LuFilter } from "react-icons/lu";
import { BsViewList } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import Footer from "@/components/footer";
import Service from "@/components/service";
import HeadComponent from "@/components/head";
import { getLatestProducts } from "@/sanity/utils/fetchProducts";
import ProductCard from "@/components/productCart";

export default async function Shop() {
  const products = await getLatestProducts();
  return (
    <>
    <Navbar />

        <HeadComponent title="Shop" />

      <main className=" max-w-[1440px] min-w-full">
        <section className=" flex justify-between md:p-3 lg:p-8 bg-[#F4F4F4] md:px-20">
          <div className=" hidden md:flex justify-center items-center text-lg gap-5">
            <div className=" hidden lg:flex justify-center items-center gap-4 border-r-2 border-black pr-5">
              <LuFilter className=" hover:scale-125" />
              <h1>Filter</h1>
              <HiViewGrid className=" hover:scale-125" />
              <BsViewList className=" hover:scale-125" />
            </div>
            <h1 className="">Showing 1–16 of 32 results</h1>
          </div>

          <div className="flex justify-center items-center text-sm md:text-lg gap-5 p-3">
            <label htmlFor="quant">Show</label>
            <input
              className=" p-2 text-gray-400 w-10 h-10 self-auto"
              type="text"
              name=""
              id="quant"
              defaultValue={16}
              minLength={1}
              maxLength={2}
            />
            <label htmlFor="sort">Short By</label>
            <select className=" p-2 text-gray-400" name="" id="sort">
              <option value="">New Arrival</option>
              <option value="">A - Z</option>
              <option value="">Best Selling</option>
            </select>
          </div>
        </section>

        <section className=" flex flex-col justify-center items-center pl-20 lg:pl-40 pr-20 lg:pr-40">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-12 mt-8 mb-8">
            {products.map((product) => (
              <ProductCard key={product.slug.current} product={product} />
            ))}
          </div>

          <div className=" flex gap-6 m-20">
            <span className=" hidden md:block py-3 px-6 bg-[#FBEBB5] rounded-lg cursor-pointer">
              1
            </span>
            <span className=" hidden md:block py-3 px-6 bg-[#FFF9E5] rounded-lg hover:bg-[#FBEBB5] cursor-pointer">
              2
            </span>
            <span className=" hidden md:block py-3 px-6 bg-[#FFF9E5] rounded-lg hover:bg-[#FBEBB5] cursor-pointer">
              3
            </span>
            <span className=" py-3 px-6 bg-[#FFF9E5] rounded-lg hover:bg-[#FBEBB5] cursor-pointer">
              NEXT
            </span>
          </div>
        </section>
      </main>

      <footer>
        <Service />
        <Footer />
      </footer>
    </>
  );
}
