import React from "react"
import Item from "../item/Item"

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

    addItem() {
        this.setState(prevState => ({
            items: prevState.items.concat({
                id: prevState.itemIndex,
                item: <Item key={prevState.itemIndex} id={prevState.itemIndex} removeItem={this.removeItem}/>
            }),
            itemIndex: prevState.itemIndex + 1
        }));
    }

    render() {
        return (
            <div className="l-row__elem">
                <h2 className="c-title">{this.props.title}</h2>
                {this.state.items.map(item => item.item)}
                {this.props.children}
                <button onClick={this.addItem} className="c-add-item-button">Add new card...</button>
            </div>
        )
    }
};

export default List;
