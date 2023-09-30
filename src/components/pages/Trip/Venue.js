const Venue = ({ venue }) => {
    return (
        <div className="mb-4 bg-white p-3 rounded-4">
            <h5 className="mb-3">Venue</h5>
            <p>{venue.title}</p>
        </div>
    )
}

export default Venue;