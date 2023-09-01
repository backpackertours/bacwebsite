import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const Venue = ({ venue }) => {
    return (
        <div>
            <h5 className="mb-3">Venue</h5>
            <div className="bg-primary-light p-3 rounded-4">
                <p>{venue.title}</p>
                <Button className="rounded-3" color="primary"><Link className="link" to={venue.link} target="_blank">View on map</Link></Button>
            </div>
        </div>
    )
}

export default Venue;