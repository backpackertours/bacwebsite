import { useNavigate } from 'react-router-dom';

import {
    Card,
    CardBody,
} from 'reactstrap';

const TripCard = ({ trip }) => {
    const { title, duration, total_seats, grade } = trip;
    const price = trip.price_breakup[0].price;
    const image = trip.gallery[0];

    const imageUrl = "https://res.cloudinary.com/dgjllfp17/image/upload/c_scale,h_200,w_300/";

    const navigate = useNavigate();

    const handleCardClick = () => {
        // REMOVE - opens the trip page in new tab
        // window.open(`/trip/${trip.id}`, "_blank");
        navigate(`/trip/${trip.id}`);
    }

    return (
        <Card className='hovershadow-md md-4 sm-6 border border-0 bg-white rounded-4 h-100' onClick={handleCardClick}>
            <img
                className="rounded rounded-4"
                src={`${imageUrl}/${image}`}
                alt={title}
                style={{
                    width: "100%",
                    height: "200px"
                }}
            />
            <CardBody className="p-3 d-flex flex-column">
                <h6 className='h40'>{title}</h6>
                <div>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="bg-white text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i className="bi bi-calendar-check"></i> <small>{duration}</small></span>
                        {trip.category === "upcoming" ?
                            <span className="bg-white text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i className="bi bi-person-circle"></i> <small>{total_seats} Seats</small></span>
                            :
                            <span className="bg-white text-primary" style={{ fontSize: "12px", fontWeight: "700" }}><i className="bi bi-star-fill"></i> <small>Grade: {grade} </small></span>
                        }
                    </div>
                    <div>
                        <small style={{ fontSize: "12px", color: "gray" }}>Starting From</small>
                        <h6 className="text-slate">{`Rs. ${price} /-`}</h6>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default TripCard;