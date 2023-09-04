const AppWidget = ({ url, icon }) => {
    return (
        <a href={url} className={`py-2 px-3 rounded-4 bg-${icon}`} target="_blank" rel="noreferrer">
            <i className={`bi bi-${icon} text-white f2`}></i>
        </a>
    )
}

export default AppWidget;