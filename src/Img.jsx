import './App.css';

function Img({src, alt}) {
    return <img src = {`${src}.jpg`} alt={alt} />;
}

export default Img;