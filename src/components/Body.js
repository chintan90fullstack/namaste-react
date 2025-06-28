import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import BodySlider from "./BodySlider";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


// either receive variables in a single object and show them after picking them from object like props.resName OR simply take all variables as parapeters.



// not using keys (not acceptable) <<<<<<< index as key <<<<< unique id

// State Variable - Super Powerful variable

const Body = () => {
    console.log("Body Render");

// creating state variable
const [apiData, setApiData] = useState([]);
const [listOfRestaurants, setListOfRestaurants] = useState([]); 
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const [searchText, setSearchText] = useState("");

useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setApiData(json?.data);
};

const onlineStatus = useOnlineStatus();
if(onlineStatus === false) {
     return <h1>Your internet connection is unstable.Please Check your connection.</h1>;
}

// console.log("body testig", listOfRestaurants)
// Conditional Rendering
// if(listOfRestaurants.length === 0)
// {
//     return <Shimmer></Shimmer>;
// }

// if condition meets then shimmer renders otherwise data will be rendered

    return (listOfRestaurants.length === 0) ? ( <Shimmer></Shimmer> ) : (
        <div className="body">

            <BodySlider sliderData={apiData}></BodySlider>

            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border-solid rounded-lg border border-gray-300 bg-white py-2 px-4 pr-10" value={searchText} onChange={ (e) => { 
                    setSearchText(e.target.value);
                     }} />
                    {/* <button onClick={() => { 
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                        setFilteredRestaurant(filteredRestaurant)
                        }}
                        >Search</button> */}
                        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() =>
                            {
                                const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setFilteredRestaurant(filteredRestaurant);
                            }
                        }>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() =>
                        {
                            const filteredList = listOfRestaurants.filter( (res) => res.info.avgRating > 4.4 );
                            setListOfRestaurants(filteredList);
                        }
                    }>Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map( (restaurant, index) => <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant}></RestaurantCard></Link>)
                }
                
            </div>
        </div>
    )
};

export default Body;