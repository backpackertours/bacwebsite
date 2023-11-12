import { useState } from 'react';
import {
    Input,
    Form,
    FormGroup,
    FormFeedback,
    Button,
    Row,
    Col
} from 'reactstrap';

const initialState = {
    name: {
        error: "",
        value: ""
    },
    phone: {
        error: "",
        value: ""
    },
    email: {
        error: "",
        value: ""
    },
    message: {
        error: "",
        value: ""
    }
}

const ContactForm = () => {
    const [form, setform] = useState(initialState);

    const handleInputChange = (e) => {
        setform({
            ...form,
            [e.target.name]: {
                error: "",
                value: e.target.value
            }
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //validate name
        const namePattern = /^[A-Za-z][a-z]+(?: [A-Za-z][a-z]+)?(?: [A-Za-z][a-z]+)?$/
        const nameMatch = namePattern.test(form.name.value);

        //validate email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const emailMatch = emailPattern.test(form.email.value);

        //validate phone number
        const phonePatter = /^\d{10}$/
        const phoneMatch = phonePatter.test(form.phone.value)


        //validate message
        const messagePattern = /^[A-Za-z0-9\s]+$/
        const messageMatch = messagePattern.test(form.message.value)

        // if any of the input is not matching set up the validation errors.
        if (!nameMatch || !emailMatch || !phoneMatch || !messageMatch) {
            setform({
                name: {
                    error: !nameMatch ? "Please enter valid name! Example: John Doe" : "",
                    value: form.name.value
                },
                phone: {
                    error: !emailMatch ? "Please enter valid phone number! Example: 9955443322" : "",
                    value: form.phone.value
                },
                email: {
                    error: !phoneMatch ? "Please enter valid email! Example: xybz@abc.com" : "",
                    value: form.email.value
                },
                message: {
                    error: !messageMatch ? "Please enter valid message containing only letters and numbers." : "",
                    value: form.message.value
                }
            });

            return;
        }

        alert('Email Sent!');

        setform(initialState);
    }

    return (
        <div>
            <Form onSubmit={handleFormSubmit} noValidate="true">
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <Input
                                className="py-2 px-3"
                                id="exampleName"
                                name="name"
                                placeholder="Name"
                                type="text"
                                value={form.name.value}
                                pattern=""
                                onChange={handleInputChange}
                                invalid={form.name.error ? true : false}
                            />
                            <FormFeedback >
                                {form.name.error}
                            </FormFeedback>
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
                                value={form.email.value}
                                onChange={handleInputChange}
                                invalid={form.email.error ? true : false}
                            />
                            <FormFeedback >
                                {form.email.error}
                            </FormFeedback>
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
                                value={form.phone.value}
                                onChange={handleInputChange}
                                invalid={form.phone.error ? true : false}
                            />
                            <FormFeedback >
                                {form.phone.error}
                            </FormFeedback>
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
                                value={form.message.value}
                                onChange={handleInputChange}
                                invalid={form.message.error ? true : false}
                            />
                            <FormFeedback >
                                {form.message.error}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Button className="bg-primary text-white border border-0 rounded-3" type="submit">
                    Send Message
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm;