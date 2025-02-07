import Navbar from "@/components/navbar";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Quantity from "@/components/quantity";
import Footer from "@/components/footer";

export default function product(){
    return(<>
    <header>
        <nav>
            <Navbar />
        </nav>
    </header>

    <main>
        
        <section className=" flex flex-col">

            <div className="flex flex-row gap-5 pt-28 pl-28">
                <div className="flex flex-row gap-3 border-r-2 border-black pr-5">
                    <Link className=" text-gray-500 hover:text-black cursor-pointer" href="/">Home</Link>
                    <IoIosArrowForward className=" text-2xl font-bold" />
                    <Link className=" text-gray-500 hover:text-black cursor-pointer" href="/shop">Shop</Link>
                    <IoIosArrowForward className=" text-2xl font-bold" />
                </div>
                <h3>Asgaard Sofa</h3>
            </div>

            <div className=" flex flex-col lg:flex-row justify-between gap-5 pl-28 pr-28 pt-12">
                <div className=" lg:w-[50%] pb-20 flex flex-row gap-5">
                    <div className=" w-4/12 flex flex-col justify-between lg:justify-start lg:gap-5">
                        <Image className="bg-[#FFF9E5] rounded-lg hover:scale-125 transform transition duration-300 cursor-pointer" src={'/images/products/Outdoor-sofa-set.png'} alt="altimages" width={180} height={180}/>
                        <Image  className="bg-[#FFF9E5] rounded-lg hover:scale-125 transform transition duration-300 cursor-pointer"src={'/images/products/Outdoor-sofa-set-2.png'} alt="altimages" width={180} height={180}/>
                        <Image  className="bg-[#FFF9E5] rounded-lg hover:scale-125 transform transition duration-300 cursor-pointer"src={'/images/products/Stuart-sofa.png'} alt="altimages" width={180} height={180}/>
                        <Image  className="bg-[#FFF9E5] rounded-lg hover:scale-125 transform transition duration-300 cursor-pointer"src={'/images/products/Maya-sofa-three-seater.png'} alt="altimages" width={180} height={180}/>
                    </div>

                    <div className="">
                        <Image  className="bg-[#FFF9E5] rounded-lg"src={'/images/products/Asgaard-sofa.png'} alt="Asgaard Sofa" width={947} height={799}/>
                    </div>
                </div>

                <div className=" lg:w-[50%] flex flex-col gap-3 lg:pl-12 lg:pr-20 pb-20">
                    <h1 className=" text-4xl">Asgaard Sofa</h1>
                    <p className=" text-xl text-gray-400">Rs. 250,000.00</p>
                    <div className=" flex flex-row gap-5 justify-start items-center">
                        <div className=" flex flex-row border-r-2 border-black text-[#FFDA5B] pr-5">
                            <FaStar className=" hover:scale-125 transform transition duration-300 cursor-pointer" />
                            <FaStar className=" hover:scale-125 transform transition duration-300 cursor-pointer" />
                            <FaStar className=" hover:scale-125 transform transition duration-300 cursor-pointer" />
                            <FaStar className=" hover:scale-125 transform transition duration-300 cursor-pointer" />
                            <FaStarHalfAlt className=" hover:scale-125 transform transition duration-300 cursor-pointer" />
                        </div>
                        <p className=" text-gray-400">5 customers reviewed</p>
                    </div>
                    <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p><br />
                    <div className=" flex flex-col gap-5">
                        <h3 className=" text-gray-400">Size</h3>
                        <div className=" flex flex-row gap-3 justify-start items-center text-center font-bold">
                            <span className=" w-[30px] h-[30px] rounded-md bg-[#FBEBB5] cursor-pointer">L</span>
                            <span className=" w-[30px] h-[30px] rounded-md bg-[#F4F4F4] hover:bg-[#FBEBB5] cursor-pointer">XL</span>
                            <span className=" w-[30px] h-[30px] rounded-md bg-[#F4F4F4] hover:bg-[#FBEBB5] cursor-pointer">XS</span>
                        </div>
                        <h3 className=" text-gray-400">Color</h3>
                        <div className=" flex flex-row gap-3">
                            <span className=" w-[30px] h-[30px] inline-flex rounded-full bg-[#816DFA] hover:scale-125 transform transition duration-300 cursor-pointer"></span>
                            <span className=" w-[30px] h-[30px] inline-flex rounded-full bg-black hover:scale-125 transform transition duration-300 cursor-pointer"></span>
                            <span className=" w-[30px] h-[30px] inline-flex rounded-full bg-[#CDBA7B] hover:scale-125 transform transition duration-300 cursor-pointer"></span>
                        </div>
                        <div className=" flex flex-row gap-5">
                            <Quantity />
                            <Button className=" text-2xl pt-6 pb-6 pl-8 pr-8 hover:border-black active:scale-90 transform transition duration-200" variant={"outline"}>Add to Cart</Button>
                        </div>
                    </div>

                </div>
            </div>

            <div className=" lg:w-[50%] border-t-2 self-end p-8">
                <div className=" w-[70%] grid grid-cols-2 text-gray-400">
                    <p>SKU</p>
                    <p>: SS001</p>
                    <p>Catagory</p>
                    <p>: Sofas</p>
                    <p>Tags</p>
                    <p>: Sofa, Chair. Home, Shop</p>
                    <p>Share</p>
                    <p className=" flex gap-4 text-black items-center">
                        :
                        <FaFacebook className=" hover:scale-125 transform transition duration-300 cursor-pointer" />
                        <FaLinkedin className=" hover:scale-125 transform transition duration-300 cursor-pointer" />
                        <FaTwitter className=" hover:scale-125 transform transition duration-300 cursor-pointer" />
                    </p>
                </div>
            </div>

        </section>

        <section>

            <div className=" flex flex-col pt-16 lg:p-28 pb-16 justify-center items-center border-t-2 border-b-2">
                <div className=" w-[70%] flex flex-col pb-16">
                    <div className=" flex flex-row text-3xl gap-12 justify-center items-center pb-16">
                        <h3 className=" cursor-pointer text-lg lg:text-2xl lg:font-bold ">Description</h3>
                        <h3 className=" text-gray-500 hover:text-black cursor-pointer text-lg lg:text-2xl lg:font-bold ">Additional Information</h3>
                        <h3 className=" text-gray-500 hover:text-black cursor-pointer text-lg lg:text-2xl lg:font-bold ">Reviews [5]</h3>
                    </div>
                    <p className=" text-gray-500">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <br />
                    <p className=" text-gray-500">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
                <div className=" flex flex-col lg:flex-row gap-5">
                    <div className=" bg-[#FFF9E5] rounded-lg">
                        <Image className=" hover:scale-105 transform transition duration-300" src={'/images/products/ottoman2.png'} alt="Ottoman Sofa" width={605} height={348} />
                    </div>
                    <div className=" bg-[#FFF9E5] rounded-lg">
                        <Image className=" hover:scale-110 transform transition duration-300" src={'/images/products/ottoman1.png'} alt="Ottoman Sofa" width={605} height={348} />
                    </div>
                </div>
            </div>

        </section>


        <section className=" flex flex-col justify-center items-center pt-16 pl-20 lg:pl-40 pr-20 lg:pr-40">
        
            <h1 className=" text-4xl">Related Products</h1>
                      
              <div className=" flex flex-col lg:flex-row justify-between gap-12 mt-8 mb-8">
        
                <div className=" flex flex-col justify-between">
                  <Image className=" cursor-pointer m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Trenton-modular-sofa.png'} alt="Product" width={287} height={287}/>
                  <div><h1>Trenton Modular Sofa-3</h1>
                  <h1>Rs. 25,000.00</h1></div>
                </div>
        
                <div className=" flex flex-col justify-between">
                  <Image className=" cursor-pointer m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Granite-dining-table-with-dining-chair.png'} alt="Product" width={287} height={287}/>
                  <div><h1>Granite dining table with dining chair</h1>
                  <h1>Rs. 25,000.00</h1></div>
                </div>
        
                <div className=" flex flex-col justify-between">
                  <Image className=" cursor-pointer m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Outdoor-bar-table-and-stool.png'} alt="Product" width={287} height={287}/>
                  <div><h1>Outdoor bar table and stool</h1>
                  <h1>Rs. 25,000.00</h1></div>
                </div>
        
                <div className=" flex flex-col justify-between">
                  <Image className=" cursor-pointer m-auto hover:scale-110 transform transition duration-300 pb-4" src={'/images/products/Plain-console-with-teak-mirror.png'} alt="Product" width={287} height={287}/>
                  <div><h1>Plain console with teak mirror</h1>
                  <h1>Rs. 25,000.00</h1></div>
                </div>
        
              </div>
        
              <h1 className=" text-2xl mt-12 mb-20"><span className=" border-b-4 border-black pb-3 hover:border-[#B88E2F] cursor-pointer">View More</span></h1>
            </section>
    </main>

    <footer>
        <Footer />
    </footer>
    </>
    )
}