import React, {useState} from "react";

export default function BasicFuncStateExample(props) {
    const [flag, setFlag] = useState(false);

    function getOnClick() {
        return () => setFlag(true);
    }

    return (
        <div>
            <title>{props.title}</title>
            {flag && <div>Button Clicked!!!</div>}
            <button data-testid={"testButton"} onClick={getOnClick()}>click!</button>
        </div>
    );
}
