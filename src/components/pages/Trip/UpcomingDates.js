import uuid4 from "uuid4";
import { useState } from "react";
import { Button, Row, Col } from 'reactstrap';


const UpcomingDates = ({ months, departure }) => {
    const [currentMonth, setcurrentMonth] = useState(months[0]);
    const showDates = departure.filter((date) => date.start.includes(currentMonth))

    const showMonths = months.map((month, index) => (
        <Button
            className={currentMonth === month ? "btn-date-active" : "btn-date"}
            key={uuid4()}
            onClick={() => changeCurrentMonth(index)}>
            {month}
        </Button>)
    )

    const dates = showDates.map(date => (
        <Col md="3" key={uuid4()} className="mb-3">
            <div className="p-2 bg-light rounded-3 text-center position-relative">
                <p className="mb-0">{date.start} - {date.end}</p>
            </div>
        </Col>
    ))

    const changeCurrentMonth = (index) => setcurrentMonth(months[index]);
    return (
        <div className="my-4 bg-white p-3 rounded-4">
            <h5 className="mb-3">Upcoming Departures</h5>
            <div className="d-flex gap-3 justify-content-center mb-4">
                {showMonths}
            </div>
            <Row>
                {dates}
            </Row>
        </div>
    )
}

export default UpcomingDates;