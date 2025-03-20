(()=>{"use strict";const t=window.wp.blocks,e=window.wp.blockEditor,o=window.wp.components,s=window.wp.primitives,i=window.ReactJSXRuntime,n=(0,i.jsx)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(s.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),r=window.wp.element,l=[{name:"blue",color:"#0d3b66"},{name:"orange",color:"#ee964b"},{name:"dark-orange",color:"#f95738"}],a=JSON.parse('{"UU":"fu-block-theme/generic-button"}');(0,t.registerBlockType)(a.UU,{edit:function(t){const s=(0,e.useBlockProps)(),[a,c]=(0,r.useState)(!1),u=l.filter((e=>e.name===t.attributes.color))[0].color;return(0,i.jsxs)("div",{...s,children:[(0,i.jsxs)(e.BlockControls,{children:[(0,i.jsx)(o.ToolbarGroup,{children:(0,i.jsx)(o.ToolbarButton,{onClick:()=>{c(!a)},icon:n})}),(0,i.jsxs)(o.ToolbarGroup,{children:[(0,i.jsx)(o.ToolbarButton,{isPressed:"large"===t.attributes.size,onClick:()=>{t.setAttributes({size:"large"})},children:"Large"}),(0,i.jsx)(o.ToolbarButton,{isPressed:"medium"===t.attributes.size,onClick:()=>{t.setAttributes({size:"medium"})},children:"Medium"}),(0,i.jsx)(o.ToolbarButton,{isPressed:"small"===t.attributes.size,onClick:()=>{t.setAttributes({size:"small"})},children:"Small"})]})]}),(0,i.jsx)(e.InspectorControls,{children:(0,i.jsx)(o.PanelBody,{title:"Button Settings",initialOpen:!0,children:(0,i.jsx)(o.PanelRow,{children:(0,i.jsx)(o.ColorPalette,{colors:l,value:u,onChange:o=>{const{name:s}=(0,e.getColorObjectByColorValue)(l,o);t.setAttributes({color:s})},disableCustomColors:!0,clearable:!1})})})}),(0,i.jsx)(e.RichText,{tagName:"a",className:`btn btn--${t.attributes.size} btn--${t.attributes.color}`,value:t.attributes.text,allowedFormats:[],onChange:function(e){t.setAttributes({text:e})}}),a&&(0,i.jsxs)(o.Popover,{position:"bottom center",onFocusOutside:()=>{c(!1)},onClose:()=>{c(!1)},children:[(0,i.jsx)(e.__experimentalLinkControl,{settings:[],value:t.attributes.linkObject,onChange:e=>{t.setAttributes({linkObject:e})}}),(0,i.jsx)(o.Button,{variant:"primary",onClick:()=>c(!1),style:{display:"block",width:"100%"},children:"Confirm Link"})]})]})},save:function(t){return(0,i.jsx)("a",{href:t.attributes.linkObject.url,className:`btn btn--${t.attributes.size} btn--${t.attributes.color}`,children:t.attributes.text})}})})();