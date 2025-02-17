export default function NationContainer({ imgList, selectIdx }) {
    return (
        imgList.map((el, i) => {
            const opacity = selectIdx === i ? '1' : '.5';

            return <a
                key={`nation${i + 1}`}
                className={`nationBox nation${i + 1}`}
                href="/"
                style={{ opacity }}>{i + 1}
            </a>;
        })
    );
}