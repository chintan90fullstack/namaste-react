import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useState } from "react";


// either receive variables in a single object and show them after picking them from object like props.resName OR simply take all variables as parapeters.



// not using keys (not acceptable) <<<<<<< index as key <<<<< unique id

// State Variable - Super Powerful variable

const Body = () => {

// creating state variable
const [listOfRestaurants, setlistOfRestaurants] = useState(resList); 


// below is normal JS Variable
// let listOfRestaurantsJS = [
    // {
    //     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //     "info": {
    //         "id": "64541",
    //         "name": "Oye24",
    //         "cloudinaryImageId": "r3hc8fyoajjgkmjszx2k",
    //         "locality": "YN Road",
    //         "areaName": "Pardesipura",
    //         "costForTwo": "₹300 for two",
    //         "cuisines": [
    //         "Pizzas",
    //         "South Indian",
    //         "Desserts",
    //         "Chinese",
    //         "Thalis",
    //         "Indian"
    //         ],
    //         "avgRating": 4.3,
    //         "parentId": "599623",
    //         "avgRatingString": "4.3",
    //         "totalRatingsString": "36K+",
    //         "sla": {
    //         "deliveryTime": 24,
    //         "lastMileTravel": 3,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "20-25 mins",
    //         "lastMileTravelString": "3.0 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //         },
    //         "availability": {
    //         "nextCloseTime": "2025-04-05 03:45:00",
    //         "opened": true
    //         },
    //         "badges": {},
    //         "isOpen": true,
    //         "type": "F",
    //         "badgesV2": {
    //         "entityBadges": {
    //             "imageBased": {},
    //             "textBased": {},
    //             "textExtendedBadges": {}
    //         }
    //         },
    //         "aggregatedDiscountInfoV3": {
    //         "header": "60% OFF",
    //         "discountTag": "FLAT DEAL"
    //         },
    //         "orderabilityCommunication": {
    //         "title": {},
    //         "subTitle": {},
    //         "message": {},
    //         "customIcon": {}
    //         },
    //         "differentiatedUi": {
    //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         "differentiatedUiMediaDetails": {
    //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //             "lottie": {},
    //             "video": {}
    //         }
    //         },
    //         "reviewsSummary": {},
    //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //         "restaurantOfferPresentationInfo": {},
    //         "externalRatings": {
    //         "aggregatedRating": {
    //             "rating": "2.9",
    //             "ratingCount": "10"
    //         },
    //         "source": "GOOGLE",
    //         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    //         },
    //         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //     },
    //     "analytics": {},
    //     "cta": {
    //         "link": "https://www.swiggy.com/city/indore/oye24-yn-road-pardesipura-rest64541",
    //         "text": "RESTAURANT_MENU",
    //         "type": "WEBLINK"
    //     },
    //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    // "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    // "info": {
    //     "id": "78273",
    //     "name": "Ansh Restaurant",
    //     "cloudinaryImageId": "kdbuuhsk3yh0j8ubtl1a",
    //     "locality": "South Tukoganj",
    //     "areaName": "Kanchan Bagh",
    //     "costForTwo": "₹250 for two",
    //     "cuisines": [
    //     "Indian",
    //     "Chinese",
    //     "Beverages"
    //     ],
    //     "avgRating": 3.4,
    //     "veg": true,
    //     "parentId": "34371",
    //     "avgRatingString": "4.3",
    //     "totalRatingsString": "11K+",
    //     "sla": {
    //     "deliveryTime": 27,
    //     "lastMileTravel": 2.8,
    //     "serviceability": "SERVICEABLE",
    //     "slaString": "25-30 mins",
    //     "lastMileTravelString": "2.8 km",
    //     "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //     "nextCloseTime": "2025-04-05 00:30:00",
    //     "opened": true
    //     },
    //     "badges": {
    //     "imageBadges": [
    //         {
    //         "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    //         "description": "OnlyOnSwiggy"
    //         },
    //         {
    //         "imageId": "v1695133679/badges/Pure_Veg111.png",
    //         "description": "pureveg"
    //         }
    //     ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //     "entityBadges": {
    //         "imageBased": {
    //         "badgeObject": [
    //             {
    //             "attributes": {
    //                 "description": "OnlyOnSwiggy",
    //                 "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
    //             }
    //             },
    //             {
    //             "attributes": {
    //                 "description": "pureveg",
    //                 "imageId": "v1695133679/badges/Pure_Veg111.png"
    //             }
    //             }
    //         ]
    //         },
    //         "textBased": {},
    //         "textExtendedBadges": {}
    //     }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //     "header": "ITEMS",
    //     "subHeader": "AT ₹69"
    //     },
    //     "orderabilityCommunication": {
    //     "title": {},
    //     "subTitle": {},
    //     "message": {},
    //     "customIcon": {}
    //     },
    //     "differentiatedUi": {
    //     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //     "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {},
    //         "video": {}
    //     }
    //     },
    //     "reviewsSummary": {},
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {},
    //     "externalRatings": {
    //     "aggregatedRating": {
    //         "rating": "--"
    //     }
    //     },
    //     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    // },
    // "analytics": {},
    // "cta": {
    //     "link": "https://www.swiggy.com/city/indore/ansh-restaurant-south-tukoganj-kanchan-bagh-rest78273",
    //     "text": "RESTAURANT_MENU",
    //     "type": "WEBLINK"
    // },
    // "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // },
    // {
    //     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //     "info": {
    //       "id": "247842",
    //       "name": "Johny Hot Dog",
    //       "cloudinaryImageId": "n4inopqkfmhwkm436jij",
    //       "locality": "New Palasia",
    //       "areaName": "New Palasia",
    //       "costForTwo": "₹150 for two",
    //       "cuisines": [
    //         "Fast Food"
    //       ],
    //       "avgRating": 4.1,
    //       "parentId": "111383",
    //       "avgRatingString": "4.7",
    //       "totalRatingsString": "14K+",
    //       "sla": {
    //         "deliveryTime": 24,
    //         "lastMileTravel": 3,
    //         "serviceability": "SERVICEABLE",
    //         "slaString": "20-25 mins",
    //         "lastMileTravelString": "3.0 km",
    //         "iconType": "ICON_TYPE_EMPTY"
    //       },
    //       "availability": {
    //         "nextCloseTime": "2025-04-04 22:00:00",
    //         "opened": true
    //       },
    //       "badges": {
    //         "imageBadges": [
    //           {
    //             "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
    //             "description": "Delivery!"
    //           }
    //         ]
    //       },
    //       "isOpen": true,
    //       "aggregatedDiscountInfoV2": {},
    //       "type": "F",
    //       "badgesV2": {
    //         "entityBadges": {
    //           "imageBased": {
    //             "badgeObject": [
    //               {
    //                 "attributes": {
    //                   "description": "Delivery!",
    //                   "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
    //                 }
    //               }
    //             ]
    //           },
    //           "textBased": {},
    //           "textExtendedBadges": {}
    //         }
    //       },
    //       "orderabilityCommunication": {
    //         "title": {},
    //         "subTitle": {},
    //         "message": {},
    //         "customIcon": {}
    //       },
    //       "differentiatedUi": {
    //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         "differentiatedUiMediaDetails": {
    //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //           "lottie": {},
    //           "video": {}
    //         }
    //       },
    //       "reviewsSummary": {},
    //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //       "restaurantOfferPresentationInfo": {},
    //       "externalRatings": {
    //         "aggregatedRating": {
    //           "rating": "4.3",
    //           "ratingCount": "3.7K+"
    //         },
    //         "source": "GOOGLE",
    //         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    //       },
    //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //     },
    //     "analytics": {},
    //     "cta": {
    //       "link": "https://www.swiggy.com/city/indore/johny-hot-dog-new-palasia-rest247842",
    //       "text": "RESTAURANT_MENU",
    //       "type": "WEBLINK"
    //     },
    //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    // }
// ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter( (res) => res.info.avgRating > 4.4 
                    );
                    setlistOfRestaurants(filteredList);
                    // console.log(listOfRestaurants);
                    }}
                    >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restro_container">
                {
                    listOfRestaurants.map( (restaurant, index) => <RestaurantCard key={restaurant.info.id} resData={restaurant}></RestaurantCard>)
                }
                
            </div>
        </div>
    )
};

export default Body;