import React from "react";
import ReactDOM from "react-dom/client";



/*
* Header
*  - Logo
*  - Nav Items
*
* Body
*  - Search
*  - Restaurant Container
*    - RestaurantCard
*       - image
*       - Name
*       - star rating
*       - cusisine
*       - delivery time
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="/images/FoodLogo.png" alt="Logo Image"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

// either receive variables in a single object and show them after picking them from object like props.resName OR simply take all variables as parapeters.

const RestuarntCard = (props) => {
    // const RestuarntCard = ({resImage, resName, resCuisine, resRating, resDeliveryTime}) => {
    const {resImage, resName, resCuisine, resRating, resDeliveryTime} = props;
    return (
        <div className="res-card">
            <img className="res-logo" src={resImage} alt={resName} />
            <h3>{props.resName}</h3>
            <h4>{resCuisine}</h4>
            <h4>{resRating}</h4>
            <h4>{resDeliveryTime}</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search box
            </div>
            <div className="restro_container">
                <RestuarntCard resImage="https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2Fc3ab63df-5921-4b0a-bfed-ebe9027047b7.jpeg" resName="Meghna Foods" resCuisine="Biryani, North Indian, Chiniese, Asian" resRating="4.4 stars" resDeliveryTime="38 minutes"></RestuarntCard>

                <RestuarntCard resImage="https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2Fc3ab63df-5921-4b0a-bfed-ebe9027047b7.jpeg" resName="Hotel Relaxin" resCuisine="Fast Foods" resRating="4.6 stars" resDeliveryTime="16 minutes"></RestuarntCard>

            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            Here comes footer area
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);