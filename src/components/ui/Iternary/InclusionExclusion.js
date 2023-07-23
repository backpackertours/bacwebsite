import { Row, Col } from 'reactstrap';

const InclusionExclusion = () => {
    return (
        <div className="container py-5">
            <Row>
                <Col md="4" className="pe-5">
                    <h5 className="mb-3">Inclusions</h5>
                    <ul className="list-unstyled">
                        <li className="mb-3"><i class="bi bi-check2"></i> Transport as per itinerary starting from Delhi to Delhi</li>
                        <li className="mb-3"><i class="bi bi-check2"></i> 06 Breakfasts and 06 Dinners</li>
                        <li className="mb-3"><i class="bi bi-check2"></i> 01 Night in Chitkul</li>
                        <li className="mb-3"><i class="bi bi-check2"></i> 02 Night stay Kaza</li>
                        <li className="mb-3"><i class="bi bi-check2"></i> 01 Night stay at Chandratal</li>
                        <li className="mb-3"><i class="bi bi-check2"></i> 01 Night Tabo</li>
                        <li className="mb-3"><i class="bi bi-check2"></i> 01 Night stay in Sissu</li>
                        <li className="mb-3"><i class="bi bi-check2"></i> Accommodation on Triple sharing (Hotels / Camps / Homestay )</li>
                        <li className="mb-3"><i class="bi bi-check2"></i> All Required Permit by Government / Taxes / toll / Parking</li>
                        <li className="mb-3"><i class="bi bi-check2"></i> Experience trip leader from Backpacker Tours</li>
                    </ul>
                </Col>
                <Col md="4" className="pe-5">
                    <h5 className="mb-3">Exlusions</h5>
                    <ul className="list-unstyled">
                        <li className="mb-3"><i class="bi bi-x"></i> Any Extra transport not mentioned in Itinerary</li>
                        <li className="mb-3"><i class="bi bi-x"></i> Any Lunch</li>
                        <li className="mb-3"><i class="bi bi-x"></i> Any Internal Transport & Stay in Delhi</li>
                        <li className="mb-3"><i class="bi bi-x"></i> Any extra cost due to Road blocks, landslide or Out of human Control</li>
                        <li className="mb-3"><i class="bi bi-x"></i> Any adventure sports</li>
                    </ul>
                </Col>
                <Col md="4">
                    <h5 className="mb-3">Please Note</h5>
                    <ul className="list-unstyled">
                        <li className="mb-3"><i class="bi bi-dash"></i> Homestay in Chitkul</li>
                        <li className="mb-3"><i class="bi bi-dash"></i> Homestay in Tabo</li>
                        <li className="mb-3"><i class="bi bi-dash"></i> Hotel in Kaza</li>
                        <li className="mb-3"><i class="bi bi-dash"></i> Camp at Chandratal (Attached washroom)</li>
                        <li className="mb-3"><i class="bi bi-dash"></i> Hotel in Sissu</li>
                        <li className="mb-3"><i class="bi bi-dash"></i> Pickup from Mumbai, Pune, Ahmedabad, Surat and Vadodara is availabe</li>
                        <li className="mb-3"><i class="bi bi-dash"></i> Anyone from any state of India can join this trip. We can help you travel from your city to Delhi</li>
                        <li className="mb-3"><i class="bi bi-dash"></i> Backpacker Tours is an Experience curating company. If you are looking for budget trip than we may not a good option for you</li>
                        <li className="mb-3"><i class="bi bi-dash"></i> All travel Exploration is depending on weather conditions and road conditions</li>
                        <li className="mb-3"><i class="bi bi-dash"></i> If the Kaza to Manali route during our visit is not open. we may have to change the itinerary and return via Shimla route, but the return arrival date in delhi will remain same</li>
                        <li className="mb-3"><i class="bi bi-dash"></i> We are travelling in High altitude mountain please carry require medicine</li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default InclusionExclusion;