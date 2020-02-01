import React from "react"
import Swatch from "../swatch/Swatch"

/**
 * An interface which allows the user to pick from discrete colors
 * availabile colors are provided as an iterable through props,
 * Given colors can be in any format which css supports
 */
export default class SwatchPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {selected: props.currentColor};
    }

    render() {
        let swatches = [];
        this.props.colors.forEach(color => {
            swatches.push(<Swatch key={color} onSelected={this.props.onColorSelected} color={color} />);
        })

        return (
        <div className="c-swatch-picker">
            {swatches}
        </div>)
    }
}
