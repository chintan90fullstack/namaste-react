import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const[btnNameReact, setNameBtn] = useState("Login");
    // console.log("Header Render");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between sm: bg-yellow-50 lg: bg-green-50">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL} alt="Logo Image"/>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {(onlineStatus) ? "🔴" : "🟢"}</li>
                    <li><Link className="px-4" to="/">Home</Link></li>
                    <li><Link className="px-4" to="/about">About Us</Link></li>
                    <li><Link className="px-4" to="/grocery">Grocery</Link></li>
                    <li><Link className="px-4" to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button onClick={()=>{ 
                        btnNameReact === "Login" ? setNameBtn("Logout") : setNameBtn("Login")
                        }}>{btnNameReact}</button>
                </ul>
            </div>
            
        </div>
    )
};


// export default Header;