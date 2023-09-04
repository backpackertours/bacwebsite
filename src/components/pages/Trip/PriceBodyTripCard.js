const PriceBodyTripCard = ({ departure, duration, price }) => {
    return (
        <div className="rounded-4">
            <div className="bg-light p-3 rounded-3 mb-3">
                <div className="text-muted">
                    <p><i className="bi bi-arrow-left-right text-primary pe-1"></i> <span>{departure}</span></p>
                    <p><i className="bi bi-clock text-primary pe-1"></i> <span>{duration}</span></p>
                </div>
                <h5 className="mb-0">Rs. {price} /- <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h5>
            </div>
        </div>
    )
}

export default PriceBodyTripCard;