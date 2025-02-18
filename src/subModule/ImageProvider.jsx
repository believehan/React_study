import { createContext } from 'react';

const images = require.context('../assets/images', false, /\.(jpg|png|svg)$/);
export const ImageContext = createContext();

function ImageProvider({ children }) {
    return (
        <ImageContext.Provider value={images}>
            {children}
        </ImageContext.Provider>
    );
}

export default ImageProvider;