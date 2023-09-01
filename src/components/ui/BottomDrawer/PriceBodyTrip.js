import { Button } from 'reactstrap';

const PriceBodyTrip = ({ price_breakup, toggle }) => {
    console.log(price_breakup);
    return (
        <div className="rounded-4">
            <div>
                <div className="d-flex gap-4 text-muted">
                    <p><i className="bi bi-arrow-left-right text-primary pe-1"></i> <span>{price_breakup[0].departure} - to - {price_breakup[0].departure}</span></p>
                    <p><i className="bi bi-clock pe-1 text-primary"></i> <span>{price_breakup[0].duration}</span></p>
                </div>
                <p className="text-primary mb-1"><small>From</small></p>
                <h5 className="mb-0">Rs. {price_breakup[0].price} /- <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h5>
            </div>
            <hr style={{ border: "0.5px dashed" }} />
            <div>
                <div className="d-flex gap-4 text-muted">
                    <p><i className="bi bi-arrow-left-right text-primary pe-1"></i> <span>{price_breakup[1].departure} - to - {price_breakup[1].departure}</span></p>
                    <p><i className="bi bi-clock pe-1 text-primary"></i> <span>{price_breakup[1].duration}</span></p>
                </div>
                <p className="text-primary mb-1"><small>From</small></p>
                <h5 className="mb-0">Rs. {price_breakup[1].price} /- <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h5>
            </div>
            <Button className="d-none d-md-block w-100 bg-primary text-white border border-0 rounded-3 mt-3" onClick={toggle}>
                Send Enquiry
            </Button>
        </div>
    )
}

export default PriceBodyTrip;