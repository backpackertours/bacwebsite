import { uuid4 } from 'uuid4';

const Faqs = ({ faqs }) => {
    return (
        <section className="container py-5">
            <h4 className="mb-4">Frequently Asked Questions</h4>
            {faqs.map(item => (
                <div className="mb-3" key={uuid4()}>
                    <p className="mb-2"><strong>Q. {item.que}</strong></p>
                    <p><strong>Ans.</strong> {item.ans}</p>
                </div>
            ))}
        </section >
    )
}

export default Faqs;