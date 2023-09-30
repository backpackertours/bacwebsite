import {
    Input,
    Form,
    FormGroup,
    Button,
    Row,
    Col
} from 'reactstrap';

const ContactForm = () => {
    return (
        <div>
            <Form>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <Input
                                className="py-2 px-3"
                                id="exampleName"
                                name="name"
                                placeholder="Name"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup>
                            <Input
                                className="py-2 px-3"
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup>
                            <Input
                                className="py-2 px-3"
                                id="examplePhone"
                                name="phone"
                                placeholder="Phone Number"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup>
                            <Input
                                className="py-2 px-3"
                                id="exampleSubject"
                                name="subject"
                                placeholder="Subject"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup>
                            <Input
                                className="py-2 px-3"
                                id="exampleMessage"
                                name="message"
                                type="textarea"
                                placeholder="Message"
                                rows="3"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button className="bg-primary text-white border border-0 rounded-3">
                    Send Message
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm;