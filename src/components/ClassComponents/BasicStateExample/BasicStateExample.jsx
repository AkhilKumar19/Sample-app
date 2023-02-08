import {Component} from "react";
import {BasicPropsExample} from "../BasicPropsExample/BasicPropsExample";

export class BasicStateExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "counter": 0,
            "value": "",
            "changedValue": ""
        };
        this.OnCounterChange = this.OnCounterChange.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }


    OnCounterChange = () => {
        let changeCounterValue = this.state.counter;
        console.log("basic State Example " + changeCounterValue);
        this.setState({counter: (changeCounterValue + 1)});
    }

    OnStateChange = () => {
        let updateValue = "";
        if (this.state.value !== null) {
            updateValue = this.state.value;
        }
        this.setState({changedValue: updateValue})
    }


    resetCounter() {
        let counterZero = 0;
        this.setState({counter: counterZero});
    }

    onInputChange(value) {
        let changedValue = value.target.value.toString();
        console.log("Props " + changedValue);
        this.setState({value: value.target.value});
    }

    render() {
        return (
            <div className={"row"}>
                <div className={"col p-5"}>
                    <div className={"h3"}>State Component</div>
                    <div className={"my-3"}>
                        <div data-testid={"StateChangeMessage"}>
                            Hello State counter value is updated to {this.state.counter}
                        </div>
                        <button className={"btn btn-info m-2"} onClick={this.OnCounterChange}
                                data-testid={"basic-state-example-button"}>counter
                        </button>
                        <button className={"btn btn-secondary m-2"} onClick={this.resetCounter}> reset counter</button>
                    </div>
                    <div>
                        {(this.state.value !== "") &&
                            <>
                                <div className={"h4 text-success fst-italic"}>updated value
                                    : {this.state.value}</div>
                            </>

                        }
                        <div className={"row d-inline-flex"}>
                            <input type="text" className={"form-label mb-2"} value={this.state.value}
                                   onChange={this.onInputChange}/>
                            <button className={"btn btn-primary"} onClick={this.OnStateChange}
                                    data-testid={"basic-state-example-button"}>Update State
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"col"}>
                    <BasicPropsExample propValue={"Static Prop"}
                                       counter={this.state.counter}
                                       changedValue={this.state.changedValue}
                    />
                </div>
            </div>
        );
    }

}