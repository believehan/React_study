import { useContext, useState } from "react";
import { ImageContext } from "./ImageProvider";

function ImgLoad2() {
    const images = useContext(ImageContext),
        [imgSrc, setImgSrc] = useState(null);

    function loadImg() {
        setImgSrc(images('./starbucks_logo.jpg'));
    }

    return (
        <>
            <div>
                {imgSrc && <img src={imgSrc} alt='img1'></img>}
            </div>
            <button onClick={loadImg}>STARBUCKS</button>
        </>
    );
}

export default ImgLoad2;