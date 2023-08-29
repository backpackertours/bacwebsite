import { uuid4 } from 'uuid4'
const ThingsToCarry = ({ things_to_carry }) => {
    return (
        <div>
            <h5 className="mb-3">Things To Carry 🧳</h5>
            {
                things_to_carry.map(item => (
                    <div key={uuid4()}>
                        <h6>{item.title}</h6>
                        <ul>
                            {item.items.map(item => (
                                <li key={uuid4()}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default ThingsToCarry;