export default function Footer(){
    return(
        <>
        
        <footer>

<div className=" flex flex-col lg:flex-row justify-between pl-20 pr-20 pt-20 pb-10 border-b-2">

  <div className=" flex flex-col justify-center text-gray-400 p-12 border-b-2 lg:border-r-2 lg:border-b-0">
    <span>400 University Drive Suite 200 Coral Gables,</span>
    <span>FL 33134 USA</span>
  </div>

  <div className=" p-12 border-b-2 lg:border-b-0">
    <h1 className=" text-gray-400 mt-4 mb-12">Links</h1>
    <ul className=" flex flex-col gap-5">
      <a href=""><li className=" font-bold hover:scale-125 transform transition duration-100"><span className=" hover:border-b-2 hover:border-black">Home</span></li></a>
      <a href=""><li className=" font-bold hover:scale-125 transform transition duration-100"><span className=" hover:border-b-2 hover:border-black">Shop</span></li></a>
      <a href=""><li className=" font-bold hover:scale-125 transform transition duration-100"><span className=" hover:border-b-2 hover:border-black">About</span></li></a>
      <a href=""><li className=" font-bold hover:scale-125 transform transition duration-100"><span className=" hover:border-b-2 hover:border-black">Contact</span></li></a>
    </ul>
  </div>

  <div className=" p-12 border-b-2 lg:border-b-0">
    <h1 className=" text-gray-400 mt-4 mb-12">Help</h1>
    <ul className=" flex flex-col gap-5">
      <a href=""><li className=" font-bold hover:scale-125 transform transition duration-100"><span className=" hover:border-b-2 hover:border-black">Payment Options</span></li></a>
      <a href=""><li className=" font-bold hover:scale-125 transform transition duration-100"><span className=" hover:border-b-2 hover:border-black">Returns</span></li></a>
      <a href=""><li className=" font-bold hover:scale-125 transform transition duration-100"><span className=" hover:border-b-2 hover:border-black">Privacy Policies</span></li></a>
    </ul>
  </div>

  <div className=" p-12 md:flex-shrink-0">
    <h1 className=" text-gray-400 mt-4 mb-12">Newsletter</h1>
    <div>
      <input className=" border-b-2 border-black m-3 p-2" type="email" name="" id="" placeholder="Enter Your Email Address" />
      <button className=" border-b-2 border-black p-2 hover:border-none hover:scale-105 active:scale-95 transform transition duration-100">Subscribe</button>
    </div>
  </div>

  </div>

<h1 className=" m-8 ml-20 select-none">2022 Meubel House. All rights reverved</h1>
</footer>

        </>
    )
}