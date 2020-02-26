import React, { useState, useEffect } from "react"
import { useDrag, DragPreviewImage } from "react-dnd"
import { getEmptyImage } from "react-dnd-html5-backend"

import DraggableTypes from "../types/DraggableTypes"
import Item from "../item/Item"

const DraggableItem = props => {

    const [colorIndex, setColorIndex] = useState(props.colorIndex ? props.colorIndex : 0);
    const [text, setText] = useState(props.text ? props.text : "");

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: DraggableTypes.CARD,
            id: props.id,
            colorIndex: colorIndex,
            text: text,
            removeItem: props.removeItem
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => {
            if (monitor.didDrop()) {
                item.removeItem(item.id);
            }
        }
    })

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true})
    }, []);

    function handleTextChange(event) {
        setText(event.target.value);
    };

    function handleColorChange(newColorIndex) {
        setColorIndex(newColorIndex);
    };

    return (
        <div ref={drag}>
            <Item
            id={props.id}
            colorIndex={colorIndex}
            text={text}
            removeItem={props.removeItem}
            handleTextChange={handleTextChange}
            handleColorChange={handleColorChange}
            />
        </div>
    )
}

export default DraggableItem
