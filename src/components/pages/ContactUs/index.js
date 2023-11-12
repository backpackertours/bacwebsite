import { Row, Col } from 'reactstrap';

import ContactForm from './ContactForm';
import InfoCard from './InfoCard';

const ContactUs = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.259419514316!2d72.8222074!3d19.2275226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c89dccf3ffff%3A0x320e35903b84c63c!2sBackpacker%20Tours!5e0!3m2!1sen!2sin!4v1692820430156!5m2!1sen!2sin";

    return (
        <section className="bg-gray">
            <div className="bg-dark text-light text-center py-1">We are still working on the website. For inquiry, please contact +91 8082647928.</div>
            <section className="container py-5 px-sm-4">
                {/* TODO - Remove this if not used. */}
                {/* <div className='mb-4 text-center'>
                    <span className='px-3 py-2 bg-white text-center text-slate rounded-4' style={{ fontSize: "3rem" }}>📲</span>
                </div> */}
                <h1 className="mb-5 text-center">Contact Us</h1>
                <Row className="pt-3 justify-content-between">
                    <Col className="mb-5 d-flex flex-column gap-3" lg="5">
                        <InfoCard icon="telephone" data="+91 8082647928, +91 8286835202" title="Phone Number" />
                        <InfoCard icon="envelope" data="backpackmumbai@gmail.com" title="Email" />
                        <InfoCard icon="geo-alt" data="Backpacker Tours, Shop No 9, Manas building, near Pragati vidyalaya school Gorai 2 Borivali west Mumbai 92"
                            title="Address"
                        />
                    </Col>
                    <Col className="mb-5" lg="6">
                        <h5 className="mb-4">Send Us Message</h5>
                        <ContactForm />
                    </Col>
                </Row>
                <div>
                    <h3 className="mb-4">Locate Us</h3>
                    <iframe className="w-100 rounded-4" style={{ height: 500 }} title="Backpacker Tours Address" src={mapUrl} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </section>
    )
}

export default ContactUs;