import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardText } from 'reactstrap';

import TripDates from '../TripDates';

const TripCard = ({ trip }) => {
    const navigate = useNavigate();
    const { title, duration, total_seats } = trip;
    const price = trip.price_breakup[0].price;
    const image = trip.gallery[0];

    const handleCardClick = () => {
        navigate(`/trip/${trip.id}`);
    }

    return (
        <Card className='hovershadow md-4 sm-6 border border-0 bg-light rounded-4 h-100' onClick={handleCardClick}>
            <img
                className="rounded rounded-4"
                src={image}
                alt={title}
                style={{
                    width: "100%",
                    height: "200px"
                }}
            />
            <CardBody className="p-3 d-flex flex-column">
                <h6>{title}</h6>
                <CardText>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-calendar-check"></i> <small>{duration}</small></span>
                        <span className="bg-light text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i class="bi bi-person-circle"></i> <small>{total_seats} Seats</small></span>
                    </div>
                    <TripDates departureDates={trip.departure} />
                    <div>
                        <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                        <h6 className="text-primary">{`Rs. ${price} /-`}</h6>
                    </div>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default TripCard;