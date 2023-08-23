const TripDates = ({ data }) => {
    const dates = data.map(date => {
        const dateMonth = date.split(" ");
        return (
            <div className=" border text-center p-1 rounded-3 bg-white" style={{ minWidth: "40px" }}>
                <small className="d-block" style={{ fontSize: "12px" }}>{dateMonth[0]}</small>
                <small className="d-block" style={{ fontSize: "12px" }}>{dateMonth[1]}</small>
            </div>
        )
    });

    return (
        <div className='d-flex justify-content-between mb-2'>
            {dates}
        </div>
    )
}

export default TripDates