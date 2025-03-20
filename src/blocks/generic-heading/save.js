import { RichText } from '@wordpress/block-editor';

export default function Save(props) {
    function createTagName() {
        switch (props.attributes.size) {
            case 'large':
                return 'h1';
            case 'medium':
                return 'h2';
            case 'small':
                return 'h3';
            default:
                return 'h1';
        }
    }
    return (
        <RichText.Content
            tagName={createTagName()}
            value={props.attributes.text}
            className={`headline headline--${props.attributes.size}`}
        />
    );
}
