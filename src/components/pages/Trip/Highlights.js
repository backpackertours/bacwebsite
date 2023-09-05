import { uuid4 } from 'uuid4'

const Highlights = ({ highlights }) => {
    return (
        <div className="mb-5">
            <h5 className="mb-3">Highlights ✨</h5>
            <ul>
                {highlights.map(item => <li key={uuid4()}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Highlights