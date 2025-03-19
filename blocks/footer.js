wp.blocks.registerBlockType('fu-block-theme/footer', {
    title: 'Footer',
    edit: function () {
        return wp.element.createElement("div", { className: "fu-placeholder-block" }, "Footer Placeholder");
    },
    save: function () {
        return null;
    }
});