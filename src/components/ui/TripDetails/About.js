const About = ({ aboutInfo }) => {
    return (
        <div className="mb-5">
            <h5 className="mb-3">About This Trip 📑</h5>
            <p className="mb-0">
                {aboutInfo}
            </p>
            {/* <hr className="mt-4" /> */}
        </div>
    )
}

export default About;