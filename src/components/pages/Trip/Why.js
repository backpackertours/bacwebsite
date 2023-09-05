import { uuid4 } from 'uuid4'

const Why = ({ why }) => {
    return (
        <div className="mb-5">
            <h5 className="mb-3">Why Travel with Backpacker Tours? 🤷🏻‍♂️</h5>
            <ul>
                {why.map(item => (<li key={uuid4()}>{item}</li>))}
            </ul>
        </div>)
}

export default Why