(()=>{"use strict";const e=window.wp.blocks,t=window.wp.blockEditor,i=window.ReactJSXRuntime;function n(e){const n=(0,t.useBlockProps)({className:"fu-placeholder-block"});return(0,i.jsx)("div",{...n,children:e.attributes.title})}var s;s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"fu-block-theme/singlepost","title":"Fictional University Single Content","attributes":{"title":{"type":"string","default":"Fictional University Single Content"}},"editorScript":"file:./index.js","render":"file:./render.php"}'),(0,e.registerBlockType)(s.name,{edit:n})})();