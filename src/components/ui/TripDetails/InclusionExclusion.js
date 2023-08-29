import { uuid4 } from 'uuid4';
import { Row, Col } from 'reactstrap';

const InclusionExclusion = ({ inclusion, exclusion, note }) => {
    return (
        <section className="container py-5">
            <hr className="mb-5 mt-0 dashed" />
            <Row>
                <Col md="4" className="pe-5 mb-4">
                    <h5 className="mb-3">Inclusions ✅</h5>
                    <ul className="list-unstyled">
                        {inclusion.map((item) => (<li className="mb-3" key={uuid4()}><i class="bi bi-check2"></i> {item}</li>))}
                    </ul>
                </Col>
                <Col md="4" className="pe-5 mb-4">
                    <h5 className="mb-3">Exlusions ❌</h5>
                    <ul className="list-unstyled">
                        {exclusion.map((item) => (<li className="mb-3" key={uuid4()}><i class="bi bi-x"></i> {item}</li>))}
                    </ul>
                </Col>
                <Col md="4" className="mb-4">
                    <h5 className="mb-3">Please Note ⚠️</h5>
                    <ul className="list-unstyled">
                        {note.map((item) => (<li className="mb-3" key={uuid4()}><i class="bi bi-dash"></i> {item}</li>))}
                    </ul>
                </Col>
            </Row>
        </section >
    )
}

export default InclusionExclusion;