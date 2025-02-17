import { useContext } from "react";
import { RefDispatch } from "../App";

export default function SharedDataTest() {
    const { data1, data2 } = useContext(RefDispatch);

    return (
        <>
            <h1>num1 : {data1}</h1>
            <h1>num2 : {data2}</h1>
        </>
    );

    // const [ data1, data2 ] = useContext(RefDispatch);

    // return (
    //     <>
    //         <h1>num1 : {data1}</h1>
    //         <h1>num2 : {data2}</h1>
    //     </>
    // );
}