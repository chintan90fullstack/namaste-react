const BodySlider = ({sliderData}) => {
    // console.log("sliderdata2", sliderData?.cards[0]?.card?.card);
    if(sliderData.length != 0)
    {
        const localSliderData = sliderData?.cards[0]?.card?.card;
        // console.log(localSliderData);
        return ( 
            <div className="flex flex-wrap">
                <h4 className="content-center w-full text-center text-4xl py-5">{ localSliderData.header.title }</h4>
                <div className="flex-wrap flex">
                    {
                        localSliderData.imageGridCards.info.map( (slider, index) => 
                            <div className="bg-gray-100 hover:bg-gray-200 m-4 p-4 rounded-lg w-[260px] h-80" key={slider.id} id={slider.id}>
                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+slider.imageId} alt={"restaurant curated for "+slider.action.text} />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default BodySlider;