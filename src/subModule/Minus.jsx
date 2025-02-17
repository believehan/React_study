import { useContext } from "react";
import { RefDispatch } from "../App";

export default function Minus() {
    const dispatch = useContext(RefDispatch);

    function minus() {
        dispatch({ type: 'MINUS' });
    }

    return (
        <button onClick={minus}>-</button>
    );
}