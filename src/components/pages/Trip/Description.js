const Description = ({ description }) => {
    return (
        <div className="mb-4 bg-white p-3 rounded-4">
            <h5 className="mb-3">About This Trip</h5>
            {description.map(item => (<p key={item}>{item}</p>))}
        </div>
    )
}

export default Description;