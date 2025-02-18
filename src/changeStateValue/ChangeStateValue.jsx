import { useState } from "react";
import DivStyle from "../styledJs/css_App";

export default function ChangeStateValue({ transValue }) {
    const [stateValue, setStateValue] = useState(5);

    function setValue() {
        setStateValue(stateValue + 1);
        transValue(stateValue);
    }

    return (
        <>
            <button onClick={setValue}>ChangeStateValue</button>
            <DivStyle >
                {stateValue}
            </DivStyle>
        </>
    );
}