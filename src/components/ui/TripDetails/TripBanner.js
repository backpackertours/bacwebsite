import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Badge } from 'reactstrap';

const TripBanner = (props) => {
    return (
        <section className="container pt-5 pb-4">
            <Row>
                <Col md="12">
                    <h3 className="mb-3">Spiti Valley Roadtrip with Sissu</h3>
                    <div className="d-flex gap-4 text-muted">
                        <div>
                            <i className="bi bi-person pe-1 text-primary"></i>
                            <small>15 Seats</small>
                        </div>
                        <div>
                            <i className="bi bi-clock pe-1 text-primary"></i>
                            <small>3N / 4D</small>
                        </div>
                        <div>
                            <i className="bi bi-person-check pe-1 text-primary"></i>
                            <small>Age 18-40</small>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default TripBanner;