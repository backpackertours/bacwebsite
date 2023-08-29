import { useState } from 'react';
import { Button, Card } from 'reactstrap';

import ShareModal from '../ShareModal';

const PriceBody = ({ price_breakup }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Card className="bg-white rounded-4 p-4 drop-shadow border-md">
            <h5 className="mb-4">Price Breakup</h5>
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
            <ShareModal modal={modal} toggle={toggle} body="queryform" />
        </Card>
    )
}

export default PriceBody