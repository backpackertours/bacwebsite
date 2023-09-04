const InfoCard = ({ icon, data, title }) => {
    return (
        <div className="d-flex align-items-center gap-3 border rounded-4 p-2">
            <i className={`bi bi-${icon} p-3 text-primary bg-primary-light rounded-3`}></i>
            <div>
                <strong>{title}</strong>
                <p className="mb-0">{data}</p>
            </div>

        </div>
    )
}

export default InfoCard;