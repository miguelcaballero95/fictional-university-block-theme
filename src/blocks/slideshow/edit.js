import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
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
            <div style={{ backgroundColor: '#333', padding: "35px" }}>
                <p style={{ textAlign: "center", fontSize: "20px", color: "#fff" }}>Slideshow</p>
                <InnerBlocks
                    allowedBlocks={['fu-block-theme/slide']}
                />
            </div>
        </div>
    );
}
