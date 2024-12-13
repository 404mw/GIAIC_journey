import { MdOutlineAccountCircle, MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";



export default function Navbar(){
    return(<>
        <nav className=" flex justify-around text-2xl font-bolder pt-5">
            <div></div>

            <div className=" flex gap-8 mt-4">
                <a href="./" className="hover:scale-125 transform transition duration-100"><span className="  hover:border-b-2 hover:border-black ">Home</span></a>
                <a href="./shop" className="hover:scale-125 transform transition duration-100"><span className="  hover:border-b-2 hover:border-black ">Shop</span></a>
                <a href="" className="hover:scale-125 transform transition duration-100"><span className="  hover:border-b-2 hover:border-black ">About</span></a>
                <a href="" className="hover:scale-125 transform transition duration-100"><span className="  hover:border-b-2 hover:border-black ">Contact</span></a>
            </div>

            <div className=" flex gap-8 mt-4">
                <a href="" className="hover:scale-125 transform transition duration-100"><MdOutlineAccountCircle /></a>
                <a href="" className="hover:scale-125 transform transition duration-100"><MdOutlineSearch /></a>
                <a href="" className="hover:scale-125 transform transition duration-100"><FaRegHeart /></a>
                <a href="" className="hover:scale-125 transform transition duration-100"><MdOutlineShoppingCart /></a>
            </div>
        </nav>
    
    </>)
}