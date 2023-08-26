import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {
    Card, CardText, CardBody
} from 'reactstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 ' onClick={() => alert('first card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column">
                            <h6>Spiti Valley</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 18,500 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 ' onClick={() => alert('second card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://plus.unsplash.com/premium_photo-1661964133089-630b18fef6e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column justify-content-between">
                            <h6>Meghalaya Paradise</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 22,900 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 ' onClick={() => alert('third card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column justify-content-between">
                            <h6>Leh Ladakh</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 28,500 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 ' onClick={() => alert('fourth card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://images.unsplash.com/photo-1574937167914-b997f7c80cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1338&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column justify-content-between">
                            <h6>Hampta Pass</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 32,900 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 ' onClick={() => alert('first card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column">
                            <h6>Spiti Valley</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 18,500 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 ' onClick={() => alert('second card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://plus.unsplash.com/premium_photo-1661964133089-630b18fef6e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column justify-content-between">
                            <h6>Meghalaya Paradise</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 22,900 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 ' onClick={() => alert('third card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column justify-content-between">
                            <h6>Leh Ladakh</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className=" border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 28,500 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 bg-white' onClick={() => alert('fourth card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://images.unsplash.com/photo-1574937167914-b997f7c80cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1338&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column justify-content-between">
                            <h6>Hampta Pass</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 32,900 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 bg-white' onClick={() => alert('first card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column">
                            <h6>Spiti Valley</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 18,500 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 bg-white' onClick={() => alert('second card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://plus.unsplash.com/premium_photo-1661964133089-630b18fef6e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column justify-content-between">
                            <h6>Meghalaya Paradise</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 22,900 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 bg-white' onClick={() => alert('third card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column justify-content-between">
                            <h6>Leh Ladakh</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 28,500 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 bg-white' onClick={() => alert('fourth card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://images.unsplash.com/photo-1574937167914-b997f7c80cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1338&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column justify-content-between">
                            <h6>Hampta Pass</h6>
                            <CardText>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></span>
                                    <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></span>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>23</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Jul</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>30</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Aug</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>03</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Sep</small>
                                    </div>
                                    <div className="bg-white border text-center p-1 rounded-3" style={{ minWidth: "40px" }}>
                                        <small className="d-block" style={{ fontSize: "12px" }}>18</small>
                                        <small className="d-block" style={{ fontSize: "12px" }}>Nov</small>
                                    </div>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6 className="text-primary">Rs. 32,900 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </SwiperSlide>
            </Swiper >
        </>
    );
}
