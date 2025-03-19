wp.blocks.registerBlockType('fu-block-theme/page', {
    title: 'Page',
    edit: function () {
        return wp.element.createElement("div", { className: "fu-placeholder-block" }, "Page Placeholder");
    },
    save: function () {
        return null;
    }
});