import React from "react"

export default function(props) {
    const swatchStyle = {
        backgroundColor: props.color,
        margin: ".2em",
        padding: ".8em",
    };

    function getColor() {
        props.onSelected(props.color);
    };

    return <div onClick={getColor} style={swatchStyle}></div>
}