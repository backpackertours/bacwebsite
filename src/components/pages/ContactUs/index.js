import { Row, Col } from 'reactstrap';

import ContactForm from './ContactForm';
import InfoCard from './InfoCard';

const ContactUs = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.259419514316!2d72.8222074!3d19.2275226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c89dccf3ffff%3A0x320e35903b84c63c!2sBackpacker%20Tours!5e0!3m2!1sen!2sin!4v1692820430156!5m2!1sen!2sin";

    return (
        <section className="container py-5">
            <h1 className="mb-5 text-center">Get In Touch</h1>
            <Row className="mb-5 pt-3">
                <Col className="d-flex flex-column gap-3" lg="5">
                    <InfoCard icon="telephone" data="+91 8082647928" title="Phone Number 1" />
                    <InfoCard icon="telephone" data="+91 8286835202" title="Phone Number 2" />
                    <InfoCard icon="envelope" data="backpackmumbai@gmail.com" title="Email" />
                    <InfoCard icon="geo-alt" data="Backpacker Tours, Shop No 9, Manas building, near Pragati vidyalaya school Gorai 2 Borivali west Mumbai 92"
                        title="Address"
                    />
                </Col>
                <Col lg="7">
                    <ContactForm />
                </Col>
            </Row>
            <div>
                <h5 className="mb-4">Locate Us</h5>
                <iframe className="w-100 rounded-4" style={{ height: 500 }} title="Backpacker Tours Address" src={mapUrl} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default ContactUs