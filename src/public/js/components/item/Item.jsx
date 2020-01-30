import React from "react"
import { DragSource } from "react-dnd"
import DraggableTypes from "../types/DraggableTypes"

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
        console.log(dropResult);
    },
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

function Item(props) {
    const { text } = props;

    const { isDragging, connectDragSource } = props;

    return connectDragSource(
        <div className='c-item'>
            <p>{text}<br /></p>
    <p>{isDragging && 'is being dragged'}</p>
        </div>
    )
}

export default DragSource(DraggableTypes.CARD, cardSource, collect)(Item)
