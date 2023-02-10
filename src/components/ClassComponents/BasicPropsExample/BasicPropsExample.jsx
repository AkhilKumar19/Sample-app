import {Component} from "react";

export class BasicPropsExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<div className={"col p-5"}>
            <div className={"h3"}>Props Component</div>
            <div className={"counterMessage"} data-testid={"StateChangeMessage"}>
                Hello {this.props.propValue} is updated
            </div>
            <div className={"font-large ftn-italic"}>{this.props.counter}</div>
            <div className={"text-color-info"}>{this.props.changedValue}</div>
        </div>);
    }


}