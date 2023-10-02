import { useState } from "react";
import { LOGO_URL } from "../utils.js/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header=()=>{
   
    const[btnName,SetbtnName]=useState("Login");
    console.log("header render");

    const cartItems=useSelector((store)=>store.cart.items);

    

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="w-24 p-1 m-2">
        <img  className="rounded-lg " 
            src={LOGO_URL}alt="img"/>
        </div>
        <div className="m-7 font-bold text-4xl bg-pink-300 p-2 rounded-xl"><i>FOOD GRID</i></div>
            <div className="flex items-center "> 
             <ul className="flex">
             
            <Link to="/"><li className="m-3">Home</li></Link>
            <Link to="/about"><li className="m-3">About</li></Link>
            {/* <Link to="/contact"><li className="m-3">Contact-us</li></Link> */}
            <Link to="/cart"><li className="m-2 font-bold text-2xl ">🛒 ({cartItems.length})</li></Link>
                
                <button className="px-6" onClick={()=>{
                    btnName==="login"
                    ? SetbtnName("logout")
                    :SetbtnName("login");

                }}>{btnName}</button>
            </ul>
        </div>

        </div>
    );
}

export default Header;