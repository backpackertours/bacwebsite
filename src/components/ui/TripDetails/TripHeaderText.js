const TripHeaderText = (props) => {
    return (
        <section className="container pt-3 pb-4">
            <h2 className="mb-3">Spiti Valley Roadtrip with Sissu</h2>
            <div className="d-flex gap-4">
                <p><i className="bi bi-person pe-1 text-primary"></i> 15 Seats</p>
                <p><i className="bi bi-clock pe-1 text-primary"></i> 3N / 4D</p>
                <p><i className="bi bi-person-check pe-1 text-primary"></i> Age 18-40</p>
            </div>
            <small className="text-muted"><strong>Places Covered - </strong>Delhi | Chandigarh | Chitkul | Nako | Dhankar | Kaza | Hikkim | Ki | Kibber | Chicham Bridge | Chandratal Lake | Kunzum pass | Manali</small>
        </section>
    );
};

export default TripHeaderText;