import React from "react"
import { DragSource } from "react-dnd"
import DraggableTypes from "../types/DraggableTypes"
import ClearIcon from '@material-ui/icons/Clear'

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

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem() {
        this.props.removeItem(this.props.id);
    }

    render() {
        const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
        <div className='c-item'>
            <button onClick={this.removeItem} className="c-remove-item-button"><ClearIcon /></button>
            <p>{this.state.text}<br /></p>
            <p>{isDragging && 'is being dragged'}</p>
        </div>
        )
    }
}

export default DragSource(DraggableTypes.CARD, cardSource, collect)(Item)
