import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Banner = (props) => {
    return (
        <div>
            <Card inverse>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/900/270?grayscale"
                    style={{
                        height: 400
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h1" className="text-center">
                        Backpacker Tours
                    </CardTitle>
                    <CardText className="text-center">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;