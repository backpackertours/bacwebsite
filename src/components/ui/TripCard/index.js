import { Card, CardBody, CardText } from 'reactstrap';

import TripDates from '../TripDates';

const TripCard = ({ data }) => {
    return (
        <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100 ' onClick={() => alert('first card')}>
            <img
                className="rounded rounded-4"
                src={data.img}
                alt={data.title}
                style={{
                    width: "100%",
                    height: "200px"
                }}
            />
            <CardBody className="p-3 d-flex flex-column">
                <h6>{data.title}</h6>
                <CardText>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>{data.duration}</small></span>
                        <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>{data.seatsleft} Seats Left</small></span>
                    </div>
                    <TripDates data={data.dates} />
                    <div>
                        <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                        <h6 className="text-primary">{`Rs. ${data.price} /-`}</h6>
                    </div>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default TripCard;