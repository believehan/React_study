export default function ChangeStateValue({aSyncValue, setAsyncValue}) {
    function setValue() {
        setAsyncValue(s => s + 1);
    }

    return (
        <>
            <button onClick={setValue}>ChangeStateValue</button>
            <div className="ChangeDtateValue">
                {aSyncValue}
            </div>
        </>
    )
}