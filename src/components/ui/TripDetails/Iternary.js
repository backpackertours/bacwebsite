import React, { useEffect, useState } from 'react';
import { uuid4 } from 'uuid4';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Badge,
} from 'reactstrap';

const Iternary = ({ iternaryInfo }) => {
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
        const iternaryList = iternaryInfo.map((item, index) => (
            <AccordionItem key={uuid4()}>
                <AccordionHeader targetId={`${index + 1}`}>Day {index + 1}: {item.title}</AccordionHeader>
                <AccordionBody accordionId={`${index + 1}`}>
                    <p>
                        {item.desc}
                    </p>
                    <div className="d-flex gap-2">
                        <strong>Meal - </strong>
                        {item.meal.length ?
                            (
                                <div className="d-flex align-items-center gap-2">
                                    {item.meal.map(item => (<Badge color="primary" pill>{item}</Badge>))}
                                </div>
                            )
                            :
                            <p>No Meal</p>
                        }
                    </div>
                    <p className="mt-3"><strong>Attractions -</strong> {item.attractions ? item.attractions : "No Attractions"}</p>
                </AccordionBody>
            </AccordionItem>
        ));

        setContent(iternaryList)
    }, [iternaryInfo]);

    return (
        <div className="mb-5">
            <h5 className="mb-3">Day wise iternary 🗺️</h5>
            <div>
                <Accordion open={open} toggle={toggle}>
                    {content}
                </Accordion>
            </div>
            {/* <hr className="mt-4" /> */}
        </div>
    );
}

export default Iternary;