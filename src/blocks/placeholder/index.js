import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';;

const initPlaceholderBlock = (metadata) => {
    registerBlockType(metadata.name, {
        edit: Edit
    });
};

export default initPlaceholderBlock;