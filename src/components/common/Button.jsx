import {Component} from "react";


export default class Button extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <button className={this.props.className} onClick={this.props.inputOnClick}>
                {this.props.buttonName}
            </button>
        );
    }
}