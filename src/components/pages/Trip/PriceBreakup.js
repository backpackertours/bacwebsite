const PriceBreakup = ({ departure, duration, price }) => {
    return (
        <div className="rounded-4 mb-3">
            <div>
                <p className="mb-2"><i className="bi bi-arrow-left-right text-primary pe-1"></i> <span>{departure}</span></p>
                <p className="mb-2"><i className="bi bi-clock text-primary pe-1"></i> <span>{duration}</span></p>
            </div>
            <small className="text-primary">From</small>
            <h5 className="mb-0">Rs. {price} /-</h5>
        </div>
    )
}

export default PriceBreakup;