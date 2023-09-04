import { useState } from 'react';
import {
    Button,
    Col,
    Row
} from 'reactstrap';

import AlertBoxClosable from './AlertBoxClosable';
import ShareModal from './ShareModal';

const TripHeader = ({ title, private_plan, total_seats, duration, age, places_covered, location, grade }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <section className="container pt-5 pb-4">
                {private_plan && <AlertBoxClosable icon="person" text={private_plan} />}
                <Row>
                    <Col md="10" lg="10">
                        <h2 className="mb-3">{title}</h2>
                    </Col>
                    <Col className="d-none d-md-block text-end" md="2" lg="2">
                        <Button color="primary" outline onClick={toggle}><i className="bi bi-share-fill pe-1"></i> Share</Button>
                    </Col>
                </Row>
                <div className="d-flex gap-4">
                    {total_seats && <p><i className="bi bi-person pe-1 text-primary"></i> {total_seats} Seats</p>}
                    {duration && <p><i className="bi bi-clock pe-1 text-primary"></i> {duration}</p>}
                    {age && <p><i className="bi bi-person-check pe-1 text-primary"></i> Age {age}</p>}
                    {location && <p><i className="bi bi-star-fill pe-1 text-primary"></i>Difficulty - {grade}</p>}
                    {grade && <p><i className="bi bi-geo-alt pe-1 text-primary"></i> {location}</p>}
                </div>
                {places_covered && <small className="text-muted"><strong>Places Covered - </strong>{places_covered}</small>}
            </section>
            <ShareModal modal={modal} toggle={toggle} body="sharelink" />
        </>
    );
};

export default TripHeader;