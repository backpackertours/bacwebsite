import { Row, Col } from 'reactstrap';

const Footer = () => {
    const currentUrl = window.location.href;

    // check if we are on trip details page
    const isTripPage = currentUrl.includes("/trip");

    return (
        <footer className={`${isTripPage ? "mb-sm-menu" : ""}`}>
            <div className="container py-5 px-sm-4">
                <Row>
                    <Col md="4">
                        <strong>What We Do</strong>
                        <p className="text-muted mt-3">Unlock the magic of India's vibrant tapestry with Backpacker Tours, your trusted companion for unforgettable group tours and exhilarating treks. Our expertly crafted itineraries promise to unveil the hidden gems and authentic experiences that will leave you spellbound.</p>
                    </Col>
                    <Col md="4">
                        <p><strong>Contact Info</strong></p>
                        <p className="text-muted"><i className="bi bi-envelope"></i> backpackertours.in@gmail.com</p>
                        <p className="text-muted"><i className="bi bi-telephone"></i> +91 7758905725</p>
                        <p className="text-muted"><i className="bi bi-telephone"></i> +91 2557905877</p>
                    </Col>
                    <Col md="4">
                        <p><strong>Follow Us</strong></p>
                        <div className="d-flex gap-3">
                            <i class="bi bi-instagram" style={{ fontSize: "1.2rem" }}></i>
                            <i class="bi bi-facebook" style={{ fontSize: "1.2rem" }}></i>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="container px-sm-4">
                <hr className="dashed my-0" />
                <p className="text-center py-4 text-muted mb-0"><small>Copyright @ Backpacker Tours | All Rights Reserved</small></p>
            </div>
        </footer>
    )
}

export default Footer;
