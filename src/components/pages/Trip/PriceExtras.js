import { Row, Col } from 'reactstrap'
const PriceExtras = ({ title, price }) => {
    return (
        <div className="mb-2">
            <Row>
                <Col xs="7" md="7"><small><span>{title}</span></small></Col>
                <Col xs="5" md="5" className="text-end"><small>- {price === 0 ? "No Extra Cost" : `Rs. ${price}`}</small></Col>
            </Row>
        </div>
    )
}

export default PriceExtras;