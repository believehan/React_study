
import Son from './Son';
export default function Parent({ parentName }) {
    return (
        <>
            <div>나의 아빠는 {parentName}</div>
            <Son sonName="홍길동" />
        </>
    );
}