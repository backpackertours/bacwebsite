import { Table } from 'reactstrap';

const TripCost = () => {
    return (
        <Table bordered>
            <tbody>
                <tr>
                    <th scope="row">
                        Delhi to Delhi
                    </th>
                    <td>
                        Rs. 18,500/- per person 08 days
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        Mumbai to Mumbai
                    </th>
                    <td>
                        22,500/- per person 10 days (Train Travel from Mumbai included)
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default TripCost;