import { uuid4 } from 'uuid4';
import AlertBox from './AlertBox';
import PriceBodyTrekCard from './PriceBodyTrekCard';

import { Button } from "reactstrap";

const PriceBodyTrek = ({ price_breakup, price_extras, discount, toggle }) => {
    return (
        <div className="rounded-4">
            {price_breakup.map(item => (
                <PriceBodyTrekCard
                    key={uuid4()}
                    title={item.title}
                    price={item.price}
                />
            ))
            }
            {
                discount && (<AlertBox icon="wallet2" text={discount} />)
            }
            <Button className="d-none d-md-block w-100 bg-primary text-white border border-0 rounded-3 mt-3" onClick={toggle}>
                Send Enquiry
            </Button>
        </div>
    )
}

export default PriceBodyTrek;