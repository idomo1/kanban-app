import React from "react"

import ColorPicker from "../colorPicker/ColorPicker"
import TextField from "@material-ui/core/TextField"

const ItemPreview = props => {
    return (
        <div className='c-item'>
            <ColorPicker colorIndex={props.colorIndex} />
                <TextField
                defaultValue={props.text}
                multiline
                fullWidth />
        </div>
    )
};

export default ItemPreview
