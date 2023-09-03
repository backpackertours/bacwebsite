const About = ({ aboutInfo }) => {
    return (
        <div className="mb-5">
            <h5 className="mb-3">About This Trip 📑</h5>
            {aboutInfo.map(item => (<p key={item}>{item}</p>))}
        </div>
    )
}

export default About;