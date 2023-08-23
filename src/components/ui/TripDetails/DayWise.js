import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Badge,
} from 'reactstrap';

const DayWise = (props) => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Day 01: Delhi - Chitkul</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <p>
                            We will board a train from Delhi to Chandigarh and start a further journey to Chitkul. This will be a night journey to Chitkul. Our tentative journey start time from Delhi is at 12.00 pm
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Day 02: Relaxing day in Chitkul</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <p>
                            Today is a relaxing day in Chitkul. In the evening we will go for a walk to the village and Monastery. Our stay has a mesmerising view of Mountains. Before we start our journey to a high altitude area we will acclimatize for a day. Night stay in Chitkul
                        </p>
                        <div className="d-flex gap-2">
                            <strong>Meal - </strong>
                            <div className="d-flex align-items-center gap-2">
                                <Badge>Dinner</Badge>
                            </div>
                        </div>
                        <p><strong>Attractions -</strong> Evening walk to Monastery, staying in valley view Homestay</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">Day 03: Chitkul – Nako – Gue - Tabo (9 hours journey)</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <p>
                            After a quick breakfast we will start our journey towards kaza. We will visit Nako Lake. We will also visit Gue monastery, a 500 year old Mummy. This journey is going to be beautiful as the mountains start turning into cold desert. Landscape you better capture in eyes we will reach Tabo around 05.00 pm Night stay in Tabo                        </p>
                        <div className="d-flex gap-2">
                            <strong>Meal - </strong>
                            <div className="d-flex align-items-center gap-2">
                                <Badge>Breakfast</Badge>
                                <Badge>Dinner</Badge>
                            </div>
                        </div>
                        <p><strong>Attractions -</strong> Nako lake, Nako Monastery, Gue monastery, Tabo monastery</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="4">Day 04: Tabo – Ki – Chicham – Kibber - Kaza</AccordionHeader>
                    <AccordionBody accordionId="4">
                        <p>
                            After a quick breakfast we will start our journey towards kaza. We will visit Nako Lake. We will also visit Gue monastery, a 500 year old Mummy. This journey is going to be beautiful as the mountains start turning into cold desert. Landscape you better capture in eyes we will reach Tabo around 05.00 pm Night stay in Tabo                        </p>
                        <div className="d-flex gap-2">
                            <strong>Meal - </strong>
                            <div className="d-flex align-items-center gap-2">
                                <Badge>Breakfast</Badge>
                                <Badge>Dinner</Badge>
                            </div>
                        </div>
                        <p><strong>Attractions -</strong> Nako lake, Nako Monastery, Gue monastery, Tabo monastery</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="5">Day 05: Kaza – Langza – Hikkim – Komic - Kaza</AccordionHeader>
                    <AccordionBody accordionId="5">
                        <p>
                            After a quick breakfast we will start our journey towards kaza. We will visit Nako Lake. We will also visit Gue monastery, a 500 year old Mummy. This journey is going to be beautiful as the mountains start turning into cold desert. Landscape you better capture in eyes we will reach Tabo around 05.00 pm Night stay in Tabo                        </p>
                        <div className="d-flex gap-2">
                            <strong>Meal - </strong>
                            <div className="d-flex align-items-center gap-2">
                                <Badge>Breakfast</Badge>
                                <Badge>Dinner</Badge>
                            </div>
                        </div>
                        <p><strong>Attractions -</strong> Nako lake, Nako Monastery, Gue monastery, Tabo monastery</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="6">Day 06: Kaza - Chandratal Lake (5 hours)</AccordionHeader>
                    <AccordionBody accordionId="6">
                        <p>
                            After a quick breakfast we will start our journey towards kaza. We will visit Nako Lake. We will also visit Gue monastery, a 500 year old Mummy. This journey is going to be beautiful as the mountains start turning into cold desert. Landscape you better capture in eyes we will reach Tabo around 05.00 pm Night stay in Tabo                        </p>
                        <div className="d-flex gap-2">
                            <strong>Meal - </strong>
                            <div className="d-flex align-items-center gap-2">
                                <Badge>Breakfast</Badge>
                                <Badge>Dinner</Badge>
                            </div>
                        </div>
                        <p><strong>Attractions -</strong> Nako lake, Nako Monastery, Gue monastery, Tabo monastery</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="7">Day 07: Chandratal Lake to sissu (05 hrs journey)</AccordionHeader>
                    <AccordionBody accordionId="7">
                        <p>
                            After a quick breakfast we will start our journey towards kaza. We will visit Nako Lake. We will also visit Gue monastery, a 500 year old Mummy. This journey is going to be beautiful as the mountains start turning into cold desert. Landscape you better capture in eyes we will reach Tabo around 05.00 pm Night stay in Tabo                        </p>
                        <div className="d-flex gap-2">
                            <strong>Meal - </strong>
                            <div className="d-flex align-items-center gap-2">
                                <Badge>Breakfast</Badge>
                                <Badge>Dinner</Badge>
                            </div>
                        </div>
                        <p><strong>Attractions -</strong> Nako lake, Nako Monastery, Gue monastery, Tabo monastery</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="8">Day 08: Sissu – Manali - Delhi</AccordionHeader>
                    <AccordionBody accordionId="8">
                        <p>
                            After a quick breakfast we will start our journey towards kaza. We will visit Nako Lake. We will also visit Gue monastery, a 500 year old Mummy. This journey is going to be beautiful as the mountains start turning into cold desert. Landscape you better capture in eyes we will reach Tabo around 05.00 pm Night stay in Tabo                        </p>
                        <div className="d-flex gap-2">
                            <strong>Meal - </strong>
                            <div className="d-flex align-items-center gap-2">
                                <Badge>Breakfast</Badge>
                                <Badge>Dinner</Badge>
                            </div>
                        </div>
                        <p><strong>Attractions -</strong> Nako lake, Nako Monastery, Gue monastery, Tabo monastery</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default DayWise;