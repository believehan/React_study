
function NationBox(props) {
    return <a style={{ opacity: props.opacity }} href="/" className={`nationBox`}>{props.value}</a>;
}

export default NationBox;