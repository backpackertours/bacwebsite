
import { useState } from 'react';
import { Card } from 'reactstrap';
import { uuid4 } from 'uuid4';
import AlertBox from './AlertBox';
import { Button } from 'reactstrap';

import ShareModal from './ShareModal';
import PriceBreakup from './PriceBreakup';
import PriceExtras from './PriceExtras';

const PriceBody = ({ price_breakup, price_extras, discount }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Card className="bg-white rounded-4 drop-shadow border-sm-0 drop-shadow-sm-0 p-sm-4">
            <div className="rounded-4">
                <h5 className="mb-4 d-md-none">Price Breakup</h5>
                {price_breakup.map(item => (
                    <PriceBreakup
                        key={uuid4()}
                        departure={item.departure}
                        duration={item.duration}
                        price={item.price}
                    />
                ))
                }
                {price_extras.length > 0 && (
                    <>
                        <hr className="mb-3 mt-0 dashed" />
                        <div className="mb-3">
                            <h6 className="mb-2"><i className="bi bi-cash-stack text-primary"></i> Extras</h6>
                            {price_extras.map(item => (
                                <PriceExtras
                                    key={uuid4()}
                                    title={item.title}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </>
                )}
                <div>
                    <small><strong>*Prices are on per person basis.</strong></small>
                </div>
                {
                    discount && (<AlertBox icon="wallet2" text={discount} />)
                }
                <Button className="d-none d-md-block w-100 bg-primary text-white border border-0 rounded-3 mt-3" onClick={toggle}>
                    Send Enquiry
                </Button>
            </div>
            <ShareModal modal={modal} toggle={toggle} body="queryform" />
        </Card>
    )
}

export default PriceBody