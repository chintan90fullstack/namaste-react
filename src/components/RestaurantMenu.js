import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants"

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState([]);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch (MENU_API + resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    };


    if(resInfo.length == 0) return ( <Shimmer></Shimmer> );

    // console.log(resInfo);
    const {name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating, totalRatingsString	} = resInfo?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    const regularCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const menuSection = regularCards.find(
        (card) => card?.card?.card?.itemCards
      );
      
      const itemCards = menuSection?.card?.card?.itemCards || [];
    // console.log(itemCards);


    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>
                {itemCards.map( item => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li> )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;