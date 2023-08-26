import { Input, Card, Form, FormGroup, Label, Button } from 'reactstrap';

const QueryFormBody = () => {
    return (
        <Card className="border bg-white rounded-4 p-4 mb-4 drop-shadow">
            <div>
                <h5 className="mb-3">Send Enquiry</h5>
                <Form>
                    <FormGroup>
                        <Input
                            id="exampleName"
                            name="name"
                            placeholder="Name"
                            type="name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">
                            Select Date
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                14 Jun - 24 Jul
                            </option>
                            <option>
                                14 Jun - 24 Jul
                            </option>
                            <option>
                                14 Jun - 24 Jul
                            </option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">
                            Message
                        </Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                        />
                    </FormGroup>
                    <Button className="w-100 bg-primary text-white border border-0 rounded-3">
                        Send Enquiry
                    </Button>
                </Form>
            </div>
        </Card>
    )
}

export default QueryFormBody