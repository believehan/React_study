
function NationBox({ value, opacity = '0.5' }) {
    return <a style={{ opacity }} href="/" className={`nationBox`}>{value}</a>;
}

export default NationBox;