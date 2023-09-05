const PriceBodyTrekCard = ({ title, price }) => {
    return (
        <div className="rounded-4">
            <div className="bg-light p-3 rounded-3 mb-3">
                <p>{title}</p>
                <h5 className="mb-0">Rs. {price} /- <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h5>
            </div>
        </div>
    )
}

export default PriceBodyTrekCard;