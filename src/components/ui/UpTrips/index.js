import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Row, Col
} from 'reactstrap';

const UpTrips = (props) => {
    return (
        <div className="container py-5">
            <div className="mb-4">
                <h3>Upcoming Trips</h3>
            </div>
            <Row>
                <Col md="3" sm="6">
                    <Card className='md-4 sm-6'>
                        <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="3" sm="6">
                    <Card className='md-4 sm-6'>
                        <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="3" sm="6">
                    <Card className='md-4 sm-6'>
                        <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="3" sm="6">
                    <Card className='md-4 sm-6'>
                        <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

    );
};

export default UpTrips;