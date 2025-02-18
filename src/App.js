import ImageProvider from './subModule/ImageProvider';
import ImgLoad1 from './subModule/ImgLoad1';
import ImgLoad2 from './subModule/ImgLoad2';

export default function App() {
    return (
        <>
            <ImageProvider>
                <ImgLoad1 />
                <hr />
                <ImgLoad2 />
            </ImageProvider>
        </>
    );
}