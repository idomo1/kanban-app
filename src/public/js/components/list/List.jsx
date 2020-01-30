import React from "react"

export default (props) => (
    <div className="l-row__elem">
        <h2 className="c-title">{props.title}</h2>
        {props.children}
    </div>
)
