import { Link } from 'react-router-dom';

function Product1({helpText}) {
    return (
        <>
            <h3>상품1 페이지</h3>

            <Link to='/Help'>{helpText}</Link>
        </>
    );
}

export default Product1;