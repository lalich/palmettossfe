import React, { useState } from "react";
import './styles.css'

const Marker = ({ text }) => {
    const [hovered, setHovered] = useState(false)

    const markerStyle = {
        width: hovered ? '120px ' : '90px',
        height: hovered ? '90px' : '60px',
        backgroundImage:`url(${process.env.PUBLIC_URL}/PSS_Logo.png)`,
        backgroundSize: 'cover',
        cursor: hovered ? `url(${process.env.PUBLIC_URL}/PSS_Icon.png), auto` : 'auto',
        
    };

    const markerTextStyle = {
        display: hovered ? 'block' : 'none',
        backgroundColor: 'black',
        color: 'green',
        position: 'absolute',

    };

    return (
        <div
            style={markerStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
     
            <div style={markerTextStyle}>{text}</div>
        </div>
    )
    }

export default Marker