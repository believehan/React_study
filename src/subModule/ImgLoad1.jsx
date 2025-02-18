import { useContext, useState } from "react";
import { ImageContext } from "./ImageProvider";

function ImgLoad1() {
    const images = useContext(ImageContext),
        [imgSrc, setImgSrc] = useState(null);

    function loadImg() {
        setImgSrc(images('./jeep_logo.png'));
    }

    return (
        <>
            <div>
                {imgSrc && <img src={imgSrc} alt='img1'></img>}
            </div>
            <button onClick={loadImg}>JEEP</button>
        </>
    );
}

export default ImgLoad1;