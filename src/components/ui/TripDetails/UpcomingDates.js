import uuid4 from "uuid4";
import { Row, Col } from 'reactstrap'

const UpcomingDates = ({ departure }) => {
    const datesInfo = departure.map((item, index) => (
        <Col className="mb-4" md="4" key={uuid4()}>
            <div className="p-2 bg-light rounded-3 text-center position-relative">
                <p className="mb-0">{item.start} - {item.end}</p>
                {/* <Badge color="success" className="position-absolute top-0 end-0 rounded-end-3 rounded-start-0 rounded-bottom-0 py-1 px-2 fw-normal">{item.seats_left} Seats Left</Badge> */}
            </div>
        </Col>
    ));

    return (
        <div className="my-4">
            <h5 className="mb-3">Upcoming Trips 🚐</h5>
            <Row>
                {datesInfo}
            </Row>
            {/* <hr /> */}
        </div>

    )
}

export default UpcomingDates;