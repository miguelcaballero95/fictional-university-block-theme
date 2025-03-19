import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('fu-block-theme/slideshow', {
    title: 'Slideshow',
    supports: {
        align: ['full']
    },
    attributes: {
        align: {
            type: 'string',
            default: 'full'
        }
    },
    edit: EditComponent,
    save: function () {
        return <InnerBlocks.Content />;
    }
});

function EditComponent({ attributes, setAttributes }) {

    return (
        <div style={{ backgroundColor: '#333', padding: "35px" }}>
            <p style={{ textAlign: "center", fontSize: "20px", color: "#fff" }}>Slideshow</p>
            <InnerBlocks
                allowedBlocks={['fu-block-theme/slide']}
            />
        </div>
    );
}

