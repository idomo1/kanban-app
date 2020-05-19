import React from "react"
import ClearIcon from "@material-ui/icons/Clear"
import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/core"

import ColorPicker from "../colorPicker/ColorPicker"

const ThemedTextField = withStyles({
    root: {
        '& .MuiInput-underline:before': {
            borderBottomWidth: 0,
        },
        '& .MuiInput-underline:after': {
            borderBottomWidth: 0,
        },
        '& .MuiInputBase-input': {
            paddingTop: '.5em',
        }
    },
})(TextField);

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text, colorIndex: this.props.colorIndex};

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(){
        this.props.removeItem(this.props.id);
    }

    render() {
        return (
            <div className='c-item'>
                <button onClick={this.removeItem} className="c-item__remove-item-button"><ClearIcon /></button>
                <ColorPicker onColorChange={this.props.handleColorChange} colorIndex={this.props.colorIndex} />
                <ThemedTextField
                defaultValue={this.props.text}
                value={this.state.value}
                onChange={this.props.handleTextChange}
                placeholder="Write item here..."
                multiline
                fullWidth />
            </div>
    )}
}
