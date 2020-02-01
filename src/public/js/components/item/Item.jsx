import React from "react"
import { DragSource } from "react-dnd"
import DraggableTypes from "../types/DraggableTypes"
import ClearIcon from "@material-ui/icons/Clear"
import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/core"
import ColorPicker from "../colorPicker/ColorPicker"

const cardSource = {

    isDragging(props, monitor) {
        return monitor.getItem().id === props.id;
    },

    beginDrag(props, monitor, component) {
        return {
            id: props.id,
            text: component.state.text,
            colorIndex: component.state.colorIndex
        };
    },

    endDrag(props, monitor, component) {
        // Remove item from original list when dropped on new list
        if (!monitor.didDrop()) {
            return
        }

        const item = monitor.getItem();
        component.removeItem(item.id);
    },
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

const ThemedTextField = withStyles({
    root: {
        '& .MuiInput-underline:before': {
            borderBottomWidth: 0,
        },
        '& .MuiInput-underline:after': {
            borderBottomWidth: 0,
        },
    },
})(TextField);

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text, colorIndex: this.props.colorIndex};

        this.removeItem = this.removeItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
    }

    removeItem() {
        this.props.removeItem(this.props.id);
    }

    handleChange(event) {
        this.setState({text: event.target.value})
    }

    onColorChange(newColorIndex) {
        this.setState({colorIndex: newColorIndex});
    }

    render() {
        const { connectDragSource } = this.props;

    return connectDragSource(
        <div className='c-item'>
            <button onClick={this.removeItem} className="c-item__remove-item-button"><ClearIcon /></button>
            <ColorPicker onColorChange={this.onColorChange} colorIndex={this.props.colorIndex} />
            <ThemedTextField
            defaultValue={this.props.text}
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Write item here..."
            multiline
            fullWidth />
        </div>
        )
    }
}

export default DragSource(DraggableTypes.CARD, cardSource, collect)(Item)
