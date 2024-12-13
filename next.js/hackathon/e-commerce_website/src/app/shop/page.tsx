import Navbar from "../components/navbar";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { LuFilter } from "react-icons/lu";
import { BsViewList } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import Footer from "../components/footer";
import Service from "../components/service";


export default function Shop(){
    return(<>
    
    <nav>
        <Navbar />
    </nav>
    

    <header className=" h-[50vh] bg-[url('/images/shop_banner.png')] bg-cover bg-center flex flex-col justify-center items-center gap-5 mt-12 mb-12">
        <Image className=" scale-150 transform" src={'/images/logo.png'} alt="Logo" width={77} height={77}/>
        <h1 className=" text-7xl font-bold">Shop</h1>
        <div className=" flex justify-center gap-2 items-center text-xl">
            <h1 className=" font-bold">Home </h1>
            <MdArrowForwardIos className="" />
            <h1>Shop</h1>
        </div>
      
    </header>

    <section className="  hidden md:flex lg:flex justify-between p-8 bg-[#F4F4F4] pl-20 pr-20">

        <div className=" flex justify-center items-center text-lg gap-5">
            <div className=" flex justify-center items-center gap-4 border-r-2 border-black pr-5">
                <LuFilter />
                <h1>Filter</h1>
                <HiViewGrid />
                <BsViewList />
            </div>
            <h1 className="">Showing 1–16 of 32 results</h1>
        </div>

        <div className="flex justify-center items-center text-lg gap-5">
            <label htmlFor="quant">Show</label>
            <input className=" p-2 text-gray-400 w-10 h-10 self-auto" type="text" name="" id="quant" defaultValue={16} minLength={1} maxLength={2} />
            <label htmlFor="sort">Short By</label>
            <select className=" p-2 text-gray-400" name="" id="sort">
                <option value="">default</option>
                <option value="">A - Z</option>
                <option value="">Best Selling</option>
            </select>
        </div>

    </section>

    <section className=" flex flex-col justify-center items-center pl-20 lg:pl-40 pr-20 lg:pr-40">
    
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-12 mt-8 mb-8">
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Trenton-modular-sofa.png'} alt="Product" width={287} height={287}/>
              <div><h1>Trenton Modular Sofa-3</h1>
              <h1>Rs. 25,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Granite-dining-table-with-dining-chair.png'} alt="Product" width={287} height={287}/>
              <div><h1>Granite dining table with dining chair</h1>
              <h1>Rs. 25,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Outdoor-bar-table-and-stool.png'} alt="Product" width={287} height={287}/>
              <div><h1>Outdoor bar table and stool</h1>
              <h1>Rs. 25,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Plain-console-with-teak-mirror.png'} alt="Product" width={287} height={287}/>
              <div><h1>Plain console with teak mirror</h1>
              <h1>Rs. 25,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Grain-coffee-table.png'} alt="Product" width={287} height={287}/>
              <div><h1>Grain Coffee Table</h1>
              <h1>Rs. 15,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Kent-coffee-table.png'} alt="Product" width={287} height={287}/>
              <div><h1>Kent Coffee Table</h1>
              <h1>Rs. 225,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Round-coffee-table.png'} alt="Product" width={287} height={287}/>
              <div><h1>Round Coffee Table</h1>
              <h1>Rs. 251,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Reclaimed-teak-coffee-table.png'} alt="Product" width={287} height={287}/>
              <div><h1>Reclaimed Teak Coffee Table</h1>
              <h1>Rs. 25,200.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Plain-console.png'} alt="Product" width={287} height={287}/>
              <div><h1>Plain Console</h1>
              <h1>Rs. 258,200.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Reclaimed-teak-Sideboard.png'} alt="Product" width={287} height={287}/>
              <div><h1>Reclaimed Teak Sideboard</h1>
              <h1>Rs. 20,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/SJP_0825.png'} alt="Product" width={287} height={287}/>
              <div><h1>SJP_0825</h1>
              <h1>Rs. 200,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Bella-chair-and-table.png'} alt="Product" width={287} height={287}/>
              <div><h1>Bella Chair and Table</h1>
              <h1>Rs. 100,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/side-table1.png'} alt="Product" width={287} height={287}/>
              <div><h1>Granite Square Side Table</h1>
              <h1>Rs. 258,800.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Asgaard-sofa.png'} alt="Product" width={287} height={287}/>
              <div><h1>Asgaard Sofa</h1>
              <h1>Rs. 250,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Maya-sofa-three-seater.png'} alt="Product" width={287} height={287}/>
              <div><h1>Maya Sofa Three Seater</h1>
              <h1>Rs. 115,000.00</h1></div>
            </div>
    
            <div className=" flex flex-col justify-between">
              <Image className="  m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Outdoor-sofa-set.png'} alt="Product" width={287} height={287}/>
              <div><h1>Outdoor-sofa-set</h1>
              <h1>Rs. 244,000.00</h1></div>
            </div>
    
          </div>
    
          <div className=" flex gap-6 m-20">
            <span className=" pt-3 pb-3 pl-6 pr-6 bg-[#FBEBB5] rounded-lg">1</span>
            <span className=" pt-3 pb-3 pl-6 pr-6 bg-[#FFF9E5] rounded-lg">2</span>
            <span className=" pt-3 pb-3 pl-6 pr-6 bg-[#FFF9E5] rounded-lg">3</span>
            <span className=" pt-3 pb-3 pl-6 pr-6 bg-[#FFF9E5] rounded-lg">NEXT</span>
          </div>
    </section>

    <footer>
        <Service />
        <Footer />
    </footer>
    </>)
}