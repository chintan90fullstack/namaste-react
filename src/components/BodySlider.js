const BodySlider = ({sliderData}) => {
    // console.log("sliderdata2", sliderData?.cards[0]?.card?.card);
    if(sliderData.length != 0)
    {
        const localSliderData = sliderData?.cards[0]?.card?.card;
        // console.log(localSliderData);
        return ( 
            <div className="slidercontainer">
                <h4>{ localSliderData.header.title }</h4>
                <div className="sliderwpr">
                    {
                        localSliderData.imageGridCards.info.map( (slider, index) => 
                            <div className="snglsldr" key={slider.id} id={slider.id}>
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