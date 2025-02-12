import Counter from "./subModule/Counter";

function App() {
    const spanStyle = {
        display: 'inline-block',
        margin: '20px 20px',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '2em',
    },
        btnStyle = {
            marginRight: '40px',
        };

    return (
        <Counter spanStyle={spanStyle} btnStyle={btnStyle} />
    );
}

export default App;