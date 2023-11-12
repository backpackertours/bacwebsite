import { uuid4 } from 'uuid4';

const Cancellation = ({ cancle_policy }) => {
    return (
        <div className="bg-danger p-4 text-white rounded-4">
            <h5 className="mb-3">Cancellation Policy ❕</h5>
            {cancle_policy.map(item => <p key={uuid4()}>- {item}</p>)}
        </div>
    )
}

export default Cancellation;