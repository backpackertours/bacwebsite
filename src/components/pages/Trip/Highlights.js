import { uuid4 } from 'uuid4'

const Highlights = ({ highlights }) => {
    return (
        <div className="mb-4 bg-white p-3 rounded-4">
            <h5 className="mb-3">Highlights ✨</h5>
            <ul>
                {highlights.map(item => <li key={uuid4()}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Highlights