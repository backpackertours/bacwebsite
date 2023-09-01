import { uuid4 } from 'uuid4'

const Highlights = ({ highlightInfo }) => {
    return (
        <div className="mb-5">
            <h5 className="mb-3">Highlights ✨</h5>
            <ul>
                {highlightInfo.map(item => <li key={uuid4()}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Highlights