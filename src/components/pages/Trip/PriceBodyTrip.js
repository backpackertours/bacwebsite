import { Button } from 'reactstrap';
import PriceBodyTripCard from './PriceBodyTripCard';
import PriceBodyTripExtras from './PriceBodyTripExtras';
import uuid4 from 'uuid4';
import AlertBox from './AlertBox';

const PriceBodyTrip = ({ price_breakup, price_extras, price_private, discount, toggle }) => {
    return (
        <div className="rounded-4">
            {price_breakup.map(item => (
                <PriceBodyTripCard
                    key={uuid4()}
                    departure={item.departure}
                    duration={item.duration}
                    price={item.price}
                />
            ))
            }
            {price_extras.map(item => (
                <PriceBodyTripExtras
                    key={uuid4()}
                    title={item.title}
                    price={item.price}
                />
            ))}
            {
                discount && (<AlertBox icon="wallet2" text={discount} />)
            }
            <Button className="d-none d-md-block w-100 bg-primary text-white border border-0 rounded-3 mt-3" onClick={toggle}>
                Send Enquiry
            </Button>
        </div>
    )
}

export default PriceBodyTrip;