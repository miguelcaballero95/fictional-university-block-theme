wp.blocks.registerBlockType('fu-block-theme/events-and-blogs', {
    title: 'Events and Blogs',
    edit: function () {
        return wp.element.createElement("div", { className: "fu-placeholder-block" }, "Events and Blogs Placeholder");
    },
    save: function () {
        return null;
    }
});