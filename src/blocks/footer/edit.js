import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {

    const blockProps = useBlockProps({
        className: 'fu-placeholder-block'
    });
    return <div {...blockProps}>Fictional University Footer</div>;
}