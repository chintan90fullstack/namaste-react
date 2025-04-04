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
    const {resData} = props;
    return (
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt={resData.info.name} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>
        </div>
    )
};

const resList =[
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "915536",
        "name": "Raju Hotel",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/525e83fe-7210-49b8-a86d-a71b2b2e7b89_915536.JPG",
        "locality": "Shop no 4 new market Sarwate bus stand",
        "areaName": "South Tukoganj",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Thalis",
          "Indian"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "165961",
        "avgRatingString": "4.2",
        "totalRatingsString": "36",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/raju-hotel-shop-no-4-new-market-sarwate-bus-stand-south-tukoganj-rest915536",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "64555",
        "name": "Cafe Udipi",
        "cloudinaryImageId": "tokrn4mddawinwyg2igu",
        "locality": "Old Palasia",
        "areaName": "Old Palasia",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.4,
        "parentId": "54358",
        "avgRatingString": "4.4",
        "totalRatingsString": "6.8K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "1.4K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/cafe-udipi-old-palasia-rest64555",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "104220",
        "name": "Upvaas",
        "cloudinaryImageId": "svaiehswsnzuheii2my8",
        "locality": "Sapna Sangeeta Road",
        "areaName": "Snehnagar",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "North Indian",
          "Home Food"
        ],
        "avgRating": 4.4,
        "parentId": "219903",
        "avgRatingString": "4.4",
        "totalRatingsString": "14K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "758"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/upvaas-sapna-sangeeta-road-snehnagar-rest104220",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "247842",
        "name": "Johny Hot Dog",
        "cloudinaryImageId": "n4inopqkfmhwkm436jij",
        "locality": "New Palasia",
        "areaName": "New Palasia",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Fast Food"
        ],
        "avgRating": 4.7,
        "parentId": "111383",
        "avgRatingString": "4.7",
        "totalRatingsString": "14K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "3.7K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/johny-hot-dog-new-palasia-rest247842",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "64541",
        "name": "Oye24",
        "cloudinaryImageId": "r3hc8fyoajjgkmjszx2k",
        "locality": "YN Road",
        "areaName": "Pardesipura",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "South Indian",
          "Desserts",
          "Chinese",
          "Thalis",
          "Indian"
        ],
        "avgRating": 4.3,
        "parentId": "599623",
        "avgRatingString": "4.3",
        "totalRatingsString": "36K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-05 03:45:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "2.9",
            "ratingCount": "10"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/oye24-yn-road-pardesipura-rest64541",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "78273",
        "name": "Ansh Restaurant",
        "cloudinaryImageId": "kdbuuhsk3yh0j8ubtl1a",
        "locality": "South Tukoganj",
        "areaName": "Kanchan Bagh",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Indian",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "34371",
        "avgRatingString": "4.3",
        "totalRatingsString": "11K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-05 00:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "OnlyOnSwiggy",
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹69"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/ansh-restaurant-south-tukoganj-kanchan-bagh-rest78273",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "161891",
        "name": "Shree Chotiwala Restaurant",
        "cloudinaryImageId": "3973690f7073c30def2c9b5138d2927f",
        "locality": "Nath Mandir",
        "areaName": "South Tukoganj",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Thalis",
          "Chinese",
          "Punjabi"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "184402",
        "avgRatingString": "4.3",
        "totalRatingsString": "15K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹69"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/shree-chotiwala-restaurant-nath-mandir-south-tukoganj-rest161891",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "62185",
        "name": "Sam's Momos",
        "cloudinaryImageId": "wrwrngygzztx6lh1wpfn",
        "locality": "New Palasia",
        "areaName": "New Palasia",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Chinese",
          "Snacks",
          "Pastas"
        ],
        "avgRating": 4.3,
        "parentId": "176744",
        "avgRatingString": "4.3",
        "totalRatingsString": "31K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Chinese.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹60"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.6",
            "ratingCount": "463"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/sams-momos-new-palasia-rest62185",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "224900",
        "name": "Raju Bhai ka Dhaba (Mansha Foods) ",
        "cloudinaryImageId": "nqzyryfsgpchx3qnp2y6",
        "locality": "Gurmit Nagar",
        "areaName": "Bhawar Kuan",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Indian",
          "Biryani",
          "Chinese",
          "Snacks"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "165894",
        "avgRatingString": "4.5",
        "totalRatingsString": "5.5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/raju-bhai-ka-dhaba-mansha-foods-gurmit-nagar-bhawar-kuan-rest224900",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "67386",
        "name": "Shree Leela Kitchen",
        "cloudinaryImageId": "a1jcoxj83vijycgew0w9",
        "locality": "Chhoti Gwaltoli",
        "areaName": "Chhoti Gwaltoli",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Indian"
        ],
        "avgRating": 4.3,
        "parentId": "185050",
        "avgRatingString": "4.3",
        "totalRatingsString": "4.7K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.8",
            "ratingCount": "903"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/shree-leela-kitchen-chhoti-gwaltoli-rest67386",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "65127",
        "name": "Oven Story Pizza - Standout Toppings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/20/ee5c4150-b4f6-4c8a-91af-aef3098ee9f8_65127.jpg",
        "locality": "NR MAHI SALON",
        "areaName": "SAKET SQUARE",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.6,
        "parentId": "3534",
        "avgRatingString": "4.6",
        "totalRatingsString": "6.8K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 4.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.2",
            "ratingCount": "48"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/oven-story-pizza-standout-toppings-nr-mahi-salon-saket-square-rest65127",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "289132",
        "name": "Hotel samrat",
        "cloudinaryImageId": "dupndrfbhjomc1gyongn",
        "locality": "South Tukoganj",
        "areaName": "Mg Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Indian",
          "Chinese"
        ],
        "avgRating": 3.9,
        "parentId": "101897",
        "avgRatingString": "3.9",
        "totalRatingsString": "91",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.6",
            "ratingCount": "1.4K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/hotel-samrat-south-tukoganj-mg-road-rest289132",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "969590",
        "name": "Kunafa Bytes",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/8/c7812c90-bbcd-4cad-96cc-627d965fe08d_969590.jpg",
        "locality": "Tower Chouraha",
        "areaName": "Bhawar Kuan",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Turkish"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "356841",
        "avgRatingString": "4.0",
        "totalRatingsString": "20",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:30:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/kunafa-bytes-tower-chouraha-bhawar-kuan-rest969590",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "66793",
        "name": "Hotel Surya",
        "cloudinaryImageId": "w2kpjav095uw3cyvdj2r",
        "locality": "South Tukoganj",
        "areaName": "South Tukoganj",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Chinese",
          "Pizzas",
          "Indian"
        ],
        "avgRating": 4.4,
        "parentId": "358526",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.9K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:45:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "4.1K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/hotel-surya-south-tukoganj-rest66793",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "73875",
        "name": "Neelkanth Restaurant",
        "cloudinaryImageId": "cftknve00ulek4fsjksc",
        "locality": "RNT Marg",
        "areaName": "RNT Marg",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Thalis",
          "Beverages",
          "Indian"
        ],
        "avgRating": 3.6,
        "parentId": "145363",
        "avgRatingString": "3.6",
        "totalRatingsString": "242",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-04 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "2.4K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/city/indore/neelkanth-restaurant-rnt-marg-rest73875",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ];


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search box
            </div>
            <div className="restro_container">
                <RestuarntCard resData={resList[0]}></RestuarntCard>
                <RestuarntCard resData={resList[1]}></RestuarntCard>
                <RestuarntCard resData={resList[2]}></RestuarntCard>
                <RestuarntCard resData={resList[3]}></RestuarntCard>
                <RestuarntCard resData={resList[4]}></RestuarntCard>
                <RestuarntCard resData={resList[5]}></RestuarntCard>
                <RestuarntCard resData={resList[6]}></RestuarntCard>
                <RestuarntCard resData={resList[7]}></RestuarntCard>
                <RestuarntCard resData={resList[8]}></RestuarntCard>
                <RestuarntCard resData={resList[9]}></RestuarntCard>
                <RestuarntCard resData={resList[10]}></RestuarntCard>
                <RestuarntCard resData={resList[11]}></RestuarntCard>
                <RestuarntCard resData={resList[12]}></RestuarntCard>
                <RestuarntCard resData={resList[13]}></RestuarntCard>
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