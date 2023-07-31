import { Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className="bg-light">
            <div className="container py-5">
                <Row>
                    <Col md="3">
                        {/* TODO - Insert logo here instead of text */}
                        <strong>Backpacker Tours</strong>
                        <p className="text-muted mt-3 pe-3"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt expedita obcaecati maiores accusantium nobis numquam, nam harum? Eius, odio!</small></p>
                    </Col>
                    <Col md="2">
                        <p><strong>Menu</strong></p>
                        <p className="text-muted">Home</p>
                        <p className="text-muted">About Us</p>
                        <p className="text-muted">Contact Us</p>
                    </Col>
                    <Col md="2">
                        <p><strong>Policies</strong></p>
                        <p className="text-muted">Refund Policy</p>
                        <p className="text-muted">Cancellation Policy</p>
                        <p className="text-muted">Payment Policy</p>
                    </Col>
                    <Col md="3">
                        <p><strong>Contacts</strong></p>
                        <p className="text-muted">Email - backpackertours.in@gmail.com</p>
                        <p className="text-muted">+91-7758905725</p>
                        <p className="text-muted">+91-2557905877</p>
                    </Col>
                    <Col md="2">
                        <p><strong>Follow Us</strong></p>
                        <div className="d-flex gap-3">
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-twitter"></i>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="container">
                <hr />
                <div className="text-center pt-3 pb-4">Copyright @ Backpacker Tours</div>
            </div>
        </footer>
    )
}

export default Footer;
