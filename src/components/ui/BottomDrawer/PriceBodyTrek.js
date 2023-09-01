import { Button } from "reactstrap";

const PriceBodyTrek = ({ price_breakup, toggle }) => {
    return (
        <div className="rounded-4">
            <div>
                <p>{price_breakup[0].title}</p>
                <p className="text-primary mb-1"><small>From</small></p>
                <h5 className="mb-0">Rs. {price_breakup[0].price} /- <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h5>
            </div>
            <hr style={{ border: "0.5px dashed" }} />
            <div>
                <p>{price_breakup[1].title}</p>
                <p className="text-primary mb-1"><small>From</small></p>
                <h5 className="mb-0">Rs. {price_breakup[1].price} /- <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h5>
            </div>
            <Button className="d-none d-md-block w-100 bg-primary text-white border border-0 rounded-3 mt-3" onClick={toggle}>
                Send Enquiry
            </Button>
        </div>)
}

export default PriceBodyTrek;