import { useBlockProps } from '@wordpress/block-editor';

export default function Edit(props) {

    const blockProps = useBlockProps({
        className: 'fu-placeholder-block'
    });

    return <div {...blockProps}>{props.attributes.title}</div>;
}
