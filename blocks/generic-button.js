import { RichText, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { ToolbarGroup, ToolbarButton, Popover, Button } from '@wordpress/components';
import { link } from '@wordpress/icons';
import { useState } from '@wordpress/element';

registerBlockType('fu-block-theme/generic-button', {
    title: 'Generic Button',
    attributes: {
        text: {
            type: 'string',
        },
        size: {
            type: 'string',
            default: 'large'
        },
        linkObject: {
            type: 'object',
        }
    },
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent(props) {

    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        onClick={() => { setIsLinkPickerVisible(!isLinkPickerVisible) }}
                        icon={link}
                    />
                </ToolbarGroup>
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
                tagName="a"
                className={`btn btn--${props.attributes.size} btn--blue`}
                value={props.attributes.text}
                allowedFormats={[]}
                onChange={function (newText) {
                    props.setAttributes({ text: newText });
                }}
            />
            {isLinkPickerVisible &&
                <Popover
                    position="bottom center"
                    onClose={() => { setIsLinkPickerVisible(false) }} >
                    <LinkControl
                        settings={[]}
                        value={props.attributes.linkObject}
                        onChange={(value) => {
                            props.setAttributes({ linkObject: value });
                        }} />
                    <Button
                        variant="primary"
                        onClick={() => setIsLinkPickerVisible(false)}
                        style={{ display: "block", width: "100%" }}>
                        Confirm Link
                    </Button>
                </Popover>
            }
        </>
    );
}

function SaveComponent(props) {
    return <a href={props.attributes.linkObject.url} className={`btn btn--${props.attributes.size} btn--blue`}>{props.attributes.text}</a>;
}