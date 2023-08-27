import { useState } from 'react';
import { Button, Card } from 'reactstrap';

import ShareModal from '../ShareModal';

const PriceBody = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Card className="bg-white rounded-4 p-4 drop-shadow border-md">
            <h5 className="mb-4">Price Breakup</h5>
            <div className="rounded-4">
                <div>
                    <div className="d-flex gap-4 text-muted">
                        <p><i className="bi bi-arrow-left-right text-primary pe-1"></i> <span>Delhi - to - Delhi</span></p>
                        <p><i className="bi bi-clock pe-1 text-primary"></i> <span>8 Days</span></p>
                    </div>
                    <p className="text-primary mb-1"><small>From</small></p>
                    <h5 className="mb-0">Rs. 18,500 /- <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h5>
                </div>
                <hr style={{ border: "0.5px dashed" }} />
                <div>
                    <div className="d-flex gap-4 text-muted">
                        <p><i className="bi bi-arrow-left-right text-primary pe-1"></i> <span>Mumbai - to - Mumbai</span></p>
                        <p><i className="bi bi-clock pe-1 text-primary"></i> <span>10 Days</span></p>
                    </div>
                    <p className="text-primary mb-1"><small>From</small></p>
                    <h5 className="mb-0">Rs. 22,500 /- <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h5>
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