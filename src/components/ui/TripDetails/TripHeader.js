import { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import ShareModal from '../ShareModal';

const TripHeader = ({ title, total_seats, duration, age, places_covered }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <section className="container pt-5 pb-4">
                <Row>
                    <Col md="10" lg="10">
                        <h2 className="mb-3">{title}</h2>
                    </Col>
                    <Col className="d-none d-md-block text-end" md="2" lg="2">
                        <Button color="primary" outline onClick={toggle}><i class="bi bi-share-fill"></i> Share</Button>
                    </Col>
                </Row>
                <div className="d-flex gap-4">
                    <p><i className="bi bi-person pe-1 text-primary"></i> {total_seats} Seats</p>
                    <p><i className="bi bi-clock pe-1 text-primary"></i> {duration}</p>
                    <p><i className="bi bi-person-check pe-1 text-primary"></i> Age {age}</p>
                </div>
                <small className="text-muted"><strong>Places Covered - </strong>{places_covered}</small>
            </section>
            <ShareModal modal={modal} toggle={toggle} body="sharelink" />
        </>
    );
};

export default TripHeader;