wp.blocks.registerBlockType('fu-block-theme/header', {
    title: 'Header',
    edit: function () {
        return wp.element.createElement("div", { className: "fu-placeholder-block" }, "Header Placeholder");
    },
    save: function () {
        return null;
    }
});