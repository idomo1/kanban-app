import React from "react"
import SwatchPicker from "../swatchPicker/SwatchPicker";

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        const colors = ["#F18F01", "#006E90", "#D84797", "#6F58C9"];

        this.state = {
            displaySwatches: false,
            colors: colors,
            color: colors[this.props.colorIndex], };

        this.toggleSwatchDisplay = this.toggleSwatchDisplay.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.displaySwatches = this.displaySwatches.bind(this);
    }

    toggleSwatchDisplay() {
        this.setState(prevState => ({displaySwatches: !prevState.displaySwatches}));
    }

    changeColor(newColor) {
        this.setState({color: newColor});
    }

    onColorChange(newColor) {
        this.changeColor(newColor);
        this.props.onColorChange(this.state.colors.indexOf(newColor));
    }

    displaySwatches() {
        return (
            <SwatchPicker
            colors={this.state.colors}
            currentColor={this.state.color}
            onColorSelected={this.onColorChange} />
        )
    }

    render() {
        const pickerStyles = {
            width: this.props.width ? this.props.width : "3em",
            height: this.props.height ? this.props.height : "1em",
            borderRadius: ".2em",
            position: "relative",
            backgroundColor: this.state.color,
        };
        let swatches;
        if (this.state.displaySwatches) {
            swatches = this.displaySwatches();
        }

        return (
            <>
            {swatches}
            <div onClick={this.toggleSwatchDisplay} style={pickerStyles}></div>
            </>
        )
    }
}
