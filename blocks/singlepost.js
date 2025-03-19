wp.blocks.registerBlockType('fu-block-theme/singlepost', {
    title: 'Single Post',
    edit: function () {
        return wp.element.createElement("div", { className: "fu-placeholder-block" }, "Single Post Placeholder");
    },
    save: function () {
        return null;
    }
});