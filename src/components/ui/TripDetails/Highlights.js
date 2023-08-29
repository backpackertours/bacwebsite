import React from 'react'

const Highlights = ({ highlightInfo }) => {
    return (
        <div className="mb-5">
            <h5 className="mb-3">Highlights ✨</h5>
            <p className="mb-0">
                {highlightInfo}
            </p>
        </div>
    )
}

export default Highlights