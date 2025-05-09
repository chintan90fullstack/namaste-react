import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const[btnNameReact, setNameBtn] = useState("Login");
    // console.log("Header Render");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo Image"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {(onlineStatus) ? "🔴" : "🟢"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>{ 
                        btnNameReact === "Login" ? setNameBtn("Logout") : setNameBtn("Login")
                        }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};


// export default Header;