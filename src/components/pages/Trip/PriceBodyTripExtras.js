const PriceBodyTripExtras = ({ title, price }) => {
    return (
        <div className="bg-light rounded-3 p-3 mb-3">
            <p><i className="bi bi-person text-primary pe-1"></i> <span>{title}</span></p>
            <h6>Rs. {price} <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h6>
        </div>
    )
}

export default PriceBodyTripExtras;