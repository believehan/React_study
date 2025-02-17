import { useContext } from "react";
import { RefDispatch } from "../App";

export default function Plus() {
    const dispatch = useContext(RefDispatch);

    function plus() {
        dispatch({ type: 'PLUS' });
    }

    return (
        <button onClick={plus}>+</button>
    );
}