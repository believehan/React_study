export default function NationBox({ nationNum, opacity }) {
    return (
        <a
            href="."
            className={`nationBox`}
            style={{ opacity }}
        >
            {nationNum}
        </a>
    );
}