import React from 'react';
import {
    Card, CardText, CardBody, Row, Col, Badge
} from 'reactstrap';

const UpTrips = (props) => {
    return (
        <div className="container py-5">
            <div className="mb-4">
                <h3>Upcoming Trips</h3>
            </div>
            {/* <CardsCorousel /> */}
            <Row>
                <Col className="px-3" md="3" sm="6">
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100' onClick={() => alert('first card')}>
                        <img
                            className="rounded rounded-4"
                            src="https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                            alt="Spiti Valley"
                            style={{
                                width: "100%",
                                height: "200px"
                            }}
                        />
                        <CardBody className="p-3 d-flex flex-column justify-content-between">
                            <div>
                                <small style={{ fontSize: "12px", color: "gray" }}>18 Jul - 25 Jun</small>
                                <h6 className="mt-1">Spiti Valley</h6>
                            </div>
                            <CardText>
                                <div className="d-flex flex-row gap-3 mb-2">
                                    <Badge className="p-2 bg-light text-primary"><i class="bi bi-calendar-check"></i> <small>3N / 4D</small></Badge>
                                    <Badge className="p-2 bg-light text-primary"><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></Badge>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6>Rs. 18,500 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="3" sm="6">
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100' onClick={() => alert('second card')}>
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
                            <div>
                                <small style={{ fontSize: "12px", color: "gray" }}>18 Jul - 25 Jun</small>
                                <h6 className="mb-2">Meghalaya Paradise</h6>
                            </div>
                            <CardText>
                                <div className="d-flex flex-row gap-3 mb-2">
                                    <Badge className="p-2 bg-light text-primary"><i class="bi bi-calendar-check"></i> <small>1N / 2D</small></Badge>
                                    <Badge className="p-2 bg-light text-primary"><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></Badge>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6>Rs. 22,900 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="3" sm="6">
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100' onClick={() => alert('third card')}>
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
                            <div>
                                <small style={{ fontSize: "12px", color: "gray" }}>18 Jul - 25 Jun</small>
                                <h6 className="mb-3">Leh Ladakh</h6>
                            </div>
                            <CardText>
                                <div className="d-flex flex-row gap-3 mb-2">
                                    <Badge className="p-2 bg-light text-primary"><i class="bi bi-calendar-check"></i> <small>2N - 3D</small></Badge>
                                    <Badge className="p-2 bg-light text-primary"><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></Badge>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6>Rs. 28,500 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="3" sm="6">
                    <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100' onClick={() => alert('fourth card')}>
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
                            <div>
                                <small style={{ fontSize: "12px", color: "gray" }}>18 Jul - 25 Jun</small>
                                <h6 className="mb-3">Himachal Pradesh</h6>
                            </div>
                            <CardText>
                                <div className="d-flex flex-row gap-3 mb-2">
                                    <Badge className="p-2 text-primary" color='light'><i class="bi bi-calendar-check"></i> <small>5N / 6D</small></Badge>
                                    <Badge className="p-2 text-primary" color='light'><i class="bi bi-person-circle"></i> <small>8 Seats Left</small></Badge>
                                </div>
                                <div>
                                    <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                                    <h6>Rs. 14,500 /-</h6>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div >

    );
};

export default UpTrips;