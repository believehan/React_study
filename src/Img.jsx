import './App.css';

function Img(props) {
    return <img src = {`${props.src}.jpg`} alt={props.alt} />;
}

export default Img;