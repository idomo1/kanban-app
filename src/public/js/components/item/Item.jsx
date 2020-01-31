import React from "react"
import { DragSource } from "react-dnd"
import DraggableTypes from "../types/DraggableTypes"
import ClearIcon from "@material-ui/icons/Clear"
import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/core"

const cardSource = {
    beginDrag(props) {
        return {text: props.text}
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return
        }

        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
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
        this.state = {text: ""};

        this.removeItem = this.removeItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    removeItem() {
        this.props.removeItem(this.props.id);
    }

    handleChange(event) {
        this.setState({text: event.target.value})
    }

    render() {
        const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
        <div className='c-item'>
            <button onClick={this.removeItem} className="c-item__remove-item-button"><ClearIcon /></button>
            <ThemedTextField
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Write item here..."
            multiline
            fullWidth />
            <p>{isDragging && 'is being dragged'}</p>
        </div>
        )
    }
}

export default DragSource(DraggableTypes.CARD, cardSource, collect)(Item)
