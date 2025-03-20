export default function Save(props) {
    return (
        <a
            href={props.attributes.linkObject.url}
            className={`btn btn--${props.attributes.size} btn--${props.attributes.color}`}>
            {props.attributes.text}
        </a>);
}
