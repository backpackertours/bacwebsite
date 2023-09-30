import { uuid4 } from "uuid4";

const InclusionCard = ({ title, items, icon }) => {
    return (
        <div className="mb-4 bg-white p-3 rounded-4">
            <h5 className="mb-3">{title}</h5>
            <ul className="list-unstyled">
                {items.map((item) => (<li className="mb-3" key={uuid4()}><i className={`bi bi-${icon}`}></i> {item}</li>))}
            </ul>
        </div>
    )
}

export default InclusionCard;