import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


// either receive variables in a single object and show them after picking them from object like props.resName OR simply take all variables as parapeters.



// not using keys (not acceptable) <<<<<<< index as key <<<<< unique id

// State Variable - Super Powerful variable

const Body = () => {

// creating state variable
const [listOfRestaurants, setlistOfRestaurants] = useState([]); 
const [filteredRestaurant, updateFilteredRestaurant] = useState([]);
const [searchText, updatesearchText] = useState("");

useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.91360&lng=75.78580&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    updateFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

// Conditional Rendering
// if(listOfRestaurants.length === 0)
// {
//     return <Shimmer></Shimmer>;
// }

// if condition meets then shimmer renders otherwise data will be rendered

    return (listOfRestaurants === 0) ? ( <Shimmer></Shimmer> ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={ (e) => { 
                    updatesearchText(e.target.value);
                     }} />
                    {/* <button onClick={() => { 
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                        updateFilteredRestaurant(filteredRestaurant)
                        }}
                        >Search</button> */}
                        <button onClick={() =>
                            {
                                const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                updateFilteredRestaurant(filteredRestaurant);
                            }
                        }>Search</button>
                </div>
                <button className="filter-btn" onClick={() =>
                    {
                        const filteredList = listOfRestaurants.filter( (res) => res.info.avgRating > 4.4 );
                        setlistOfRestaurants(filteredList);
                    }
                }>Top Rated Restaurants
                </button>
            </div>
            <div className="restro_container">
                {
                    filteredRestaurant.map( (restaurant, index) => <RestaurantCard key={restaurant.info.id} resData={restaurant}></RestaurantCard>)
                }
                
            </div>
        </div>
    )
};

export default Body;