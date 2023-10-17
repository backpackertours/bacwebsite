import { Row, Col } from 'reactstrap';
import uuid4 from 'uuid4';

const TripDates = ({ departureDates }) => {
    // only show first four dates on the trip card.
    const datesArr = departureDates.length > 3 ? departureDates.slice(0, 4) : departureDates;

    const dates = datesArr.map(date => {
        const dateMonth = date.start.split(" ");
        return (
            <Col sm="3" md="3" className="px-1" key={uuid4()}>
                <div className="p-1 text-center rounded-3 bg-gray">
                    <small className="d-block" style={{ fontSize: "12px" }}>{dateMonth[0]}</small>
                    <small className="d-block" style={{ fontSize: "12px" }}>{dateMonth[1]}</small>
                </div>
            </Col>
        )
    });

    return (
        <Row className='mb-2 mx-0'>
            {dates}
        </Row>
    )
}

export default TripDates