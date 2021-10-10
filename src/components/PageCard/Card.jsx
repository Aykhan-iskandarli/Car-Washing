import React from 'react'
import "./pagecard.css"

const Card = ({children,className}) => {
    return (
        <div className={`pageCard_comp ${className}`}>
            <div >
                {children}
            </div>
        </div>
    )
}

export default Card
