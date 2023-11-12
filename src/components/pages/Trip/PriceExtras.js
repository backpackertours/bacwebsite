import { Row, Col } from 'reactstrap'
const PriceExtras = ({ title, price }) => {
    return (
        <div className="mb-2">
            <Row>
                <Col xs="7" md="7"><small><span>{title}</span></small></Col>
                {price === 0 && <Col xs="5" md="5" className="text-end"><small>No Extra Cost</small></Col>}
                {price === 1 && <Col xs="5" md="5" className="text-end"><small>On Demand</small></Col>}
                {typeof (price) !== "number" && <Col xs="5" md="5" className="text-end"><small>Rs. {price}</small></Col>}
            </Row>
        </div>
    )
}

export default PriceExtras;