import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // const RestaurantCard = ({resImage, resName, resCuisine, resRating, resDeliveryTime}) => {
    const {resData} = props;
    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
    return (
        <div className="res-card m-4 p-4 w-[260px] bg-gray-100 h-[580px] rounded-lg hover:bg-gray-200">
            <img className="res-logo" src={ CDN_URL + cloudinaryImageId} alt={name} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>
        </div>
    )
};

export default RestaurantCard;