import React, { useState } from 'react';
import './style.css'
import {
    Row,
    Col,
    Button,
} from 'reactstrap';


const Slider = (args) => {

    return (
        <div className="container py-5 mb-5">
            <h2 className="mb-4">We <i className="bi bi-suit-heart-fill text-secondary" color="secondary"></i> to make memories with <span className="text-secondary">you!</span></h2>
            {/* TODO - Make this slider horizontal, and add a shading gradient over */}
            <div className="slider-container" md="12">
                <div className="sliding-background">
                </div>
            </div>
        </div>
    );
}

export default Slider;