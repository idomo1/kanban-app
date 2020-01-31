import React from "react"
import { DropTarget } from "react-dnd"
import Item from "../item/Item"
import DraggableTypes from "../types/DraggableTypes"

const spec = {
    drop(props, monitor, component) {
        if (monitor.didDrop()) {
            return;
        }

        const item = monitor.getItem();
        component.addItem(null, item.text);
    },
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {itemIndex: 0, items: []};

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(key) {
        this.setState(prevState => ({
            items: prevState.items.filter(
                item => item.id != key
            )
        }))
    }

    addItem(event, defaultText="") {
        this.setState(prevState => ({
            items: prevState.items.concat({
                id: prevState.itemIndex,
                item: <Item key={prevState.itemIndex} id={prevState.itemIndex} text={defaultText.toString()} removeItem={this.removeItem} />
            }),
            itemIndex: prevState.itemIndex + 1
        }));
    }

    render() {
        const { connectDropTarget } = this.props;

        return connectDropTarget(
            <div className="l-row__elem">
                <h2 className="c-title">{this.props.title}</h2>
                {this.state.items.map(item => item.item)}
                {this.props.children}
                <button onClick={this.addItem} className="c-add-item-button">Add new card...</button>
            </div>
        )
    }
};

export default DropTarget(DraggableTypes.CARD, spec, collect)(List);
