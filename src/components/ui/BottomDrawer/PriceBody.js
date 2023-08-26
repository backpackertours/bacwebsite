import { Card } from 'reactstrap';

const PriceBody = () => {
    return (
        <Card className="border bg-white rounded-4 p-4 mb-4 drop-shadow">
            <div className="rounded-4">
                <div>
                    <div className="d-flex gap-4 text-muted">
                        <p><i className="bi bi-arrow-left-right text-primary pe-1"></i> <span>Delhi - to - Delhi</span></p>
                        <p><i className="bi bi-clock pe-1 text-primary"></i> <span>8 Days</span></p>
                    </div>
                    <p className="text-primary mb-1"><small>From</small></p>
                    <h5>Rs. 18,500 /- <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h5>
                </div>
                <hr style={{ border: "0.5px dashed" }} />
                <div>
                    <div className="d-flex gap-4 text-muted">
                        <p><i className="bi bi-arrow-left-right text-primary pe-1"></i> <span>Mumbai - to - Mumbai</span></p>
                        <p><i className="bi bi-clock pe-1 text-primary"></i> <span>10 Days</span></p>
                    </div>
                    <p className="text-primary mb-1"><small>From</small></p>
                    <h5>Rs. 22,500 /- <span className="text-primary" style={{ fontSize: "14px" }}>Per Person</span></h5>
                </div>
            </div>
        </Card>
    )
}

export default PriceBody