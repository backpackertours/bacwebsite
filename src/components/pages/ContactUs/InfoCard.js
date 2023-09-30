const InfoCard = ({ icon, data, title }) => {
    return (
        <div className="rounded-4 bg-white p-3">
            <div className="d-flex mb-2 align-items-center">
                <i className={`bi bi-${icon} text-primary me-2`}></i>
                <strong>{title}</strong>
            </div>
            <div>
                <p className="mb-0">{data}</p>
            </div>

        </div>
    )
}

export default InfoCard;