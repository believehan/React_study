import { Link } from 'react-router-dom';

function Product2({ helpText }) {
    return (
        <>
            <h3>상품2 페이지</h3>

            <Link to='/Help'>{helpText}</Link>
        </>
    );
}

export default Product2;