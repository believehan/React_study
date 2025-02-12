export default function Event2({ style }) {
    function setBg(e) {
        e.preventDefault();
        e.target.style.backgroundColor = 'green';
    }

    return (
        <div>
            <a href="/" style={style} onClick={setBg}>두 번째 요소</a>
        </div>
    );
}