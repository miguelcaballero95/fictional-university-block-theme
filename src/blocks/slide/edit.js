import { Button, PanelBody, PanelRow } from "@wordpress/components"
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';

export default function Edit(props) {

    const blockProps = useBlockProps();

    useEffect(() => {
        async function go() {
            const media = await apiFetch({ path: `/wp/v2/media/${props.attributes.imageID}` });
            if (media) {
                props.setAttributes({
                    imageURL: media.media_details.sizes['page-banner'].source_url
                });
            }
        }
        if (props.attributes.imageID)
            go();
    }, [props.attributes.imageID]);

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Background" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(media) => {
                                    props.setAttributes({ imageID: media.id });
                                }}
                                allowedTypes={['image']}
                                value={props.attributes.imageID}
                                render={({ open }) => (
                                    <Button variant="secondary" onClick={open}>Choose Image</Button>
                                )}
                            />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>

            <div className="hero-slider__slide" style={{ backgroundImage: `url('${props.attributes.imageURL}')` }}>
                <div className="hero-slider__interior container">
                    <div class="hero-slider__overlay t-center">
                        <InnerBlocks
                            allowedBlocks={[
                                'fu-block-theme/generic-heading',
                                'fu-block-theme/generic-button',
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
