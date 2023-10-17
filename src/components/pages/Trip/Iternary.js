import { useEffect, useState } from 'react';
import { uuid4 } from 'uuid4';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Badge,
} from 'reactstrap';

import { UPCOMING, WEEKEND } from '../../data/types';

const Iternary = ({ category, iternary }) => {
    const [content, setContent] = useState("");

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    useEffect(() => {
        if (category === UPCOMING) {
            const iternaryList = () =>
                iternary.map((item, index) => (
                    <AccordionItem key={uuid4()}>
                        <AccordionHeader targetId={`${index + 1}`}>Day {index + 1}: {item.title}</AccordionHeader>
                        <AccordionBody accordionId={`${index + 1}`}>
                            {typeof (item.desc) !== "string" ?
                                (
                                    <ul>
                                        {item.desc.map((item) => <li key={uuid4()}>{item}</li>)}
                                    </ul>
                                )
                                :
                                (
                                    <p>
                                        {item.desc}
                                    </p>
                                )
                            }

                            {item.meal.length > 0 && (
                                <div className="d-flex gap-2">
                                    <strong>Meal - </strong>
                                    {item.meal.length ?
                                        (
                                            <div className="d-flex align-items-center gap-2">
                                                {item.meal.map(item => (<Badge color="primary" pill key={uuid4()}>{item}</Badge>))}
                                            </div>
                                        )
                                        :
                                        <p>No Meal</p>
                                    }
                                </div>
                            )}
                            {item.attractions.length > 0 && <p className="mt-3"><strong>Attractions -</strong> {item.attractions ? item.attractions : "No Attractions"}</p>}
                        </AccordionBody>
                    </AccordionItem>
                ));
            setContent(iternaryList)
        }
    }, [category, iternary]);

    return (
        <div className="mb-4 p-3 bg-white rounded-4">
            <h5 className="mb-3">Day wise iternary</h5>
            <div>
                {
                    category === UPCOMING && (<Accordion flush open={open} toggle={toggle}>
                        {content}
                    </Accordion>)
                }
                {
                    category === WEEKEND && iternary.map(item => (
                        <div key={uuid4()}>
                            <strong>{item.title}</strong>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
            {/* <hr className="mt-4" /> */}
        </div>
    );
}

export default Iternary;