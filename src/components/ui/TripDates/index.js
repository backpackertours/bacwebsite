import { Row, Col } from 'reactstrap';

const TripDates = ({ departureDates }) => {
    const dates = departureDates.map(date => {
        const dateMonth = date.start.split(" ");
        return (
            <Col sm="3" md="3" className="px-1">
                <div className="p-1 text-center rounded-3 bg-white">
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