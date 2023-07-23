import React, { useState } from 'react';
import './style.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Row,
    Col,
    Button,
    Card, CardTitle, CardText,
    CardSubtitle, CardBody,
} from 'reactstrap';

const items = [
    {
        src: 'https://picsum.photos/id/123/1200/400',
        title: 'Ratnesh Patil',
        subtitle: 'Software Engineer, Cybage',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam quibusdam pariatur? Facilis beatae incidunt explicabo eius voluptates velit odit!',
        key: 1,
    },
    {
        src: 'https://picsum.photos/id/456/1200/400',
        title: 'Ratnesh Patil',
        subtitle: 'Software Engineer, Cybage',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam quibusdam pariatur? Facilis beatae incidunt explicabo eius voluptates velit odit!',
        key: 2,
    },
    {
        src: 'https://picsum.photos/id/678/1200/400',
        title: 'Ratnesh Patil',
        subtitle: 'Software Engineer, Cybage',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam quibusdam pariatur? Facilis beatae incidunt explicabo eius voluptates velit odit!',
        key: 3,
    },
];

const Testimonials = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

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
                <Card className="text-center text-white bg-transparent border border-0 py-5 px-10 align-items-center justify-content-center" style={{ height: "350px" }}>
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                        className='rounded-circle mb-3'
                        style={{
                            height: "75px",
                            width: "75px"
                        }}
                    />
                    <CardTitle tag="h5">
                        {item.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-3 text-muted"
                        tag="h6"
                    >
                        {item.subtitle}
                    </CardSubtitle>
                    <CardText>
                        {item.description}
                    </CardText>
                </Card>
            </CarouselItem>
        );
    });

    return (
        <div className="container py-5">
            <Row>
                <Col className="pe-4" md="5">
                    <div>
                        <h3>Testimonials</h3>
                        <p>Find what our clients say about us!</p>
                    </div>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, praesentium beatae minima doloribus modi ipsa ab, tempore fuga ad eaque nobis necessitatibus distinctio, accusantium officia commodi laudantium molestiae ea. Ullam!
                        Eius consequatur vero ipsa totam eaque illum obcaecati pariatur dolorem eum ab exercitationem, magni corrupti numquam sint perspiciatis distinctio. Iste vel dolorem itaque tempore ipsam fugiat recusandae pariatur, nulla aspernatur.
                        Molestiae, suscipit! Voluptates quis quibusdam
                    </div>
                    <div className="mt-4">
                        <Button color="primary">
                            Contact Us
                        </Button>
                    </div>
                </Col>
                <Col md="7">
                    <Carousel
                        className="p-3 bg-primary rounded"
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        {...args}
                    >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                        />
                        {slides}
                        {/* <CarouselControl
                            direction="prev"
                            directionText="Previous"
                            onClickHandler={previous}
                        />
                        <CarouselControl
                            direction="next"
                            directionText="Next"
                            onClickHandler={next}
                        /> */}
                    </Carousel>
                </Col>
            </Row>

        </div>
    );
}

export default Testimonials;