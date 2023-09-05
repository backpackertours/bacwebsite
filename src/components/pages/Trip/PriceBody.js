import { useState } from 'react';
import { Card } from 'reactstrap';

import ShareModal from './ShareModal';
import PriceBodyTrek from './PriceBodyTrek';
import PriceBodyTrip from './PriceBodyTrip';

import { UPCOMING, WEEKEND } from '../../data/types';

const PriceBody = ({ category, price_breakup, price_extras, discount }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Card className="bg-white rounded-4 p-4 drop-shadow border-md">
            {category === UPCOMING &&
                <PriceBodyTrip
                    price_breakup={price_breakup}
                    price_extras={price_extras}
                    discount={discount}
                    toggle={toggle}
                />
            }
            {category === WEEKEND &&
                <PriceBodyTrek
                    price_breakup={price_breakup}
                    price_extras={price_extras}
                    discount={discount}
                    toggle={toggle} />
            }
            <ShareModal modal={modal} toggle={toggle} body="queryform" />
        </Card>
    )
}

export default PriceBody