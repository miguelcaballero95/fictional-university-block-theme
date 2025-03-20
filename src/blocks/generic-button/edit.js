import { RichText, InspectorControls, useBlockProps, BlockControls, __experimentalLinkControl as LinkControl, getColorObjectByColorValue } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Popover, Button, PanelBody, PanelRow, ColorPalette } from '@wordpress/components';
import { link } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import colors from '../../../inc/colors';

export default function Edit(props) {

    const blockProps = useBlockProps();

    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);
    const currentColorValue = colors.filter((color) => color.name === props.attributes.color)[0].color;

    return (
        <div {...blockProps}>
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
            <InspectorControls>
                <PanelBody title="Button Settings" initialOpen={true}>
                    <PanelRow>
                        <ColorPalette
                            colors={colors}
                            value={currentColorValue}
                            onChange={(newColor) => {
                                // From the hex value that the color palette returns, we want to extract the color name
                                const { name } = getColorObjectByColorValue(colors, newColor);
                                props.setAttributes({ color: name });
                            }}
                            disableCustomColors={true}
                            clearable={false}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <RichText
                tagName="a"
                className={`btn btn--${props.attributes.size} btn--${props.attributes.color}`}
                value={props.attributes.text}
                allowedFormats={[]}
                onChange={function (newText) {
                    props.setAttributes({ text: newText });
                }}
            />
            {isLinkPickerVisible &&
                <Popover
                    position="bottom center"
                    onFocusOutside={() => { setIsLinkPickerVisible(false) }}
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
        </div>
    );
}
