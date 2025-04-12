import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
    const[btnNameReact, updateNameBtn] = useState("Login");


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo Image"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={()=>{ 
                        btnNameReact === "Login" ? updateNameBtn("Logout") : updateNameBtn("Login")
                        }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};


// export default Header;