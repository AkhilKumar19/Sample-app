import {Component} from "react";
import {BasicPropsExample} from "../BasicPropsExample/BasicPropsExample";
import Button from "../../common/Button";

export class BasicStateExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "counter": 0,
            "value": "",
            "changedValue": ""
        };
        this.onCounterChange = this.onCounterChange.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }


    onCounterChange = () => {
        let changeCounterValue = this.state.counter;
        console.log("basic State Example " + changeCounterValue);
        this.setState({counter: (changeCounterValue + 1)});
    }

    onStateChange = () => {
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
                        <Button className={"btn btn-info m-2"} inputOnClick={this.onCounterChange}
                                buttonName={"Counter"}/>
                        <Button className={"btn btn-secondary m-2"} inputOnClick={this.resetCounter}
                                buttonName={"reset counter"}/>
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
                            <Button className={"btn btn-primary"} inputOnClick={this.onStateChange}
                                    buttonName={"Update Props"}/>
                        </div>
                    </div>
                </div>
                {/*<div className={"col"}>*/}
                {/*    <BasicPropsExample propValue={"Static Prop"}*/}
                {/*                       counter={this.state.counter}*/}
                {/*                       changedValue={this.state.changedValue}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        );
    }

}