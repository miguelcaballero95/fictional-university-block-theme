import { RichText, BlockControls, useBlockProps } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

export default function Edit(props) {

    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        isPressed={props.attributes.size === 'large'}
                        onClick={() => { props.setAttributes({ size: 'large' }) }}>
                        Large
                    </ToolbarButton>
                    <ToolbarButton
                        isPressed={props.attributes.size === 'medium'}
                        onClick={() => { props.setAttributes({ size: 'medium' }) }}>
                        Medium
                    </ToolbarButton>
                    <ToolbarButton
                        isPressed={props.attributes.size === 'small'}
                        onClick={() => { props.setAttributes({ size: 'small' }) }}>
                        Small
                    </ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <RichText
                tagName="h1"
                className={`headline headline--${props.attributes.size}`}
                value={props.attributes.text}
                allowedFormats={['core/bold']}
                onChange={function (newText) {
                    props.setAttributes({ text: newText });
                }}
            />
        </div>
    );
}
