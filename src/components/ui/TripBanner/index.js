import './style.css';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Banner = (props) => {
    return (
        <div className="container">
            <Card className="border border-0" inverse>
                <CardImg
                    className="rounded-4"
                    alt="Card image cap"
                    src="https://images.unsplash.com/photo-1619282401041-56e69dcc5335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
                    style={{
                        height: 400
                    }}
                    width="100%"
                />
                <CardImgOverlay className='border border-0 rounded-4 bg-darkblue d-flex flex-column justify-content-center align-items-center'>
                    <CardTitle tag="h1" className="text-center text-white">
                        Spiti Valley Roadtrip with Sissu
                    </CardTitle>
                    <CardText className="text-center">
                        Kaza | Nako | Gue | Tabo | Chicham | Sissu | Chandratal | Manali
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;