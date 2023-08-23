import React from 'react';

const Slider = (args) => {

    return (
        <div className="container py-5 mb-5 text-wrap rounded-4">
            <h2 className="mb-4 text-center">We <i className="bi bi-suit-heart-fill text-primary"></i> to make memories with you!</h2>
            {/* TODO - Make this slider horizontal, and add a shading gradient over */}
            <div className="slider-container" md="12">
                <div className="sliding-background">
                </div>
            </div>
        </div >
    );
}

export default Slider;