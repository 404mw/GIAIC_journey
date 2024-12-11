import { MdOutlineAccountCircle, MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";



export default function Navbar(){
    return(<>
        <nav className=" flex justify-around text-2xl font-bolder">
            <div></div>

            <div className=" flex gap-8 mt-4">
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>

            <div className=" flex gap-8 mt-4">
                <a href=""><MdOutlineAccountCircle /></a>
                <a href=""><MdOutlineSearch /></a>
                <a href=""><FaRegHeart /></a>
                <a href=""><MdOutlineShoppingCart /></a>
            </div>
        </nav>
    
    </>)
}