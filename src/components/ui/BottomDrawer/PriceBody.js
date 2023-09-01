import { useState } from 'react';
import { Card } from 'reactstrap';

import ShareModal from '../ShareModal';
import { UPCOMING, WEEKEND } from '../../data/types';
import PriceBodyTrip from './PriceBodyTrip';
import PriceBodyTrek from './PriceBodyTrek';

const PriceBody = ({ category, price_breakup }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Card className="bg-white rounded-4 p-4 drop-shadow border-md">
            <h5 className="mb-4">Price Breakup</h5>
            {category === UPCOMING &&
                <PriceBodyTrip
                    price_breakup={price_breakup}
                    toggle={toggle}
                />
            }
            {category === WEEKEND &&
                <PriceBodyTrek
                    price_breakup={price_breakup}
                    toggle={toggle} />
            }
            <ShareModal modal={modal} toggle={toggle} body="queryform" />
        </Card>
    )
}

export default PriceBody