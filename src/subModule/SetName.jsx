export default function SetName({ setYourName }) {
    const myName = [
        '머털이',
        '홍길동',
        '김구라',
    ];

    function getName(e) {
        setYourName(e.target.textContent);
    }

    return (
        <>
            <button onClick={getName}>{myName[0]}</button>
            <button onClick={getName}>{myName[1]}</button>
            <button onClick={getName}>{myName[2]}</button>
        </>
    );
}