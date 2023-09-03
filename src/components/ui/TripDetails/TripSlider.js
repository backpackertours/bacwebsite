import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselControl,
} from 'reactstrap';

const TripSlider = ({ gallery }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    // cloudinary image url
    const imageUrl = "https://res.cloudinary.com/dgjllfp17/image/upload/c_scale,h_700,w_950/v1693663080/backpackers/";

    // build items array from our gallery
    const items = gallery.map((item) => {
        return {
            src: `${imageUrl}/${item}`
        }
    })
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img
                    alt="Spiti Valley"
                    src={item.src}
                    style={{
                        width: "100%",
                        height: "500px"
                    }}
                />
            </CarouselItem>
        );
    });

    return (

        <Carousel
            className="rounded-4"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default TripSlider;