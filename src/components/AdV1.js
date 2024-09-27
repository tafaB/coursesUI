import Carousel from "../components/CarouselV2";
export default function AdV1({title, subTitle, carouselData, breakNum, bgColour}) {
    return (
            <div class={`${bgColour}`}>
                <div class="p-10">
                    <p class="text-5xl mt-10 m-5 font-thin">
                        {title.split(" ").map((word, index) => (
                            <span key={index}>
                                {word}{" "}
                                {index === breakNum && <br />} 
                            </span>
                        ))}
                    </p>
                    <p class="m-5 text-xl font-thin">{subTitle}</p>
                </div>
                <Carousel carouselData={carouselData} />
            </div>
    );
}