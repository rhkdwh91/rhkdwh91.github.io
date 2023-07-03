import{j as e,a as p,F as w}from"./emotion-react-jsx-runtime.browser.esm-9f7ab893.js";import{I as h,c as i}from"./Icon-9f6e5e3e.js";import{a as x}from"./chunk-OPEUWD42-a3b45fd8.js";import{P as n}from"./index-1fc0ca9a.js";import{a,c as t}from"./styles-b6697972.js";import{c as b}from"./polished.esm-ed3ce7df.js";import{S as g}from"./StoryLinkWrapper-88952c11.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./extends-98964cd2.js";var I={name:"1qhkosj",styles:"border:0;border-radius:0;background:none;padding:0;font-size:inherit"},W={name:"13jr1vs",styles:"color:inherit;&:hover,&:active{color:inherit;text-decoration:underline;}"},S={name:"m8gvx1",styles:"svg{height:1em;width:1em;vertical-align:middle;position:relative;bottom:0;margin-right:0;}"};const k=a("display:inline-block;transition:transform 150ms ease-out,color 150ms ease-out;text-decoration:none;color:",t.secondary,";&:hover,&:focus{cursor:pointer;transform:translateY(-1px);color:",b(.07,t.secondary),";}&:active{transform:translateY(0);color:",b(.1,t.secondary),";}svg{display:inline-block;height:1em;width:1em;vertical-align:text-top;position:relative;bottom:-0.125em;margin-right:0.4em;}",r=>r.containsIcon&&S,";",r=>r.secondary&&a("color:",t.mediumdark,";&:hover{color:",t.dark,";}&:active{color:",t.darker,";}",""),";",r=>r.tertiary&&a("color:",t.dark,";&:hover{color:",t.darkest,";}&:active{color:",t.mediumdark,";}",""),";",r=>r.nochrome&&W,";",r=>r.inverse&&a("color:",t.lightest,";&:hover{color:",t.lighter,";}&:active{color:",t.light,";}",""),";",r=>r.isButton&&I,";","");var q={name:"1xo3o5q",styles:">svg:last-of-type{height:0.7em;width:0.7em;margin-right:0;margin-left:0.25em;bottom:auto;vertical-align:inherit;}"};const V=i("span",{target:"e8l8el13"})(r=>r.withArrow&&q,";"),_=i("a",{target:"e8l8el12"})(k,";"),A=i("button",{target:"e8l8el11"})("background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;",k,";"),B=r=>r&&i(({containsIcon:l,inverse:c,nochrome:m,secondary:f,tertiary:y,...d})=>e(r,{...d}),{target:"e8l8el10"})(k,";");function o({isButton:r,withArrow:l,LinkWrapper:c,children:m,...f}){const y=e(w,{children:p(V,{withArrow:l,children:[m,l&&e(h,{icon:"arrowright"})]})}),d=B(c);let u=_;return c?u=d:r&&(u=A),e(u,{...f,children:y})}o.propTypes={isButton:n.bool,children:n.node,withArrow:n.bool,containsIcon:n.bool,LinkWrapper:n.oneOfType([n.func,n.object]),inverse:n.bool,nochrome:n.bool,secondary:n.bool,tertiary:n.bool};o.defaultProps={isButton:!1,children:null,withArrow:!1,containsIcon:!1,LinkWrapper:void 0,inverse:!1,nochrome:!1,secondary:!1,tertiary:!1};o.__docgenInfo={description:"Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.",methods:[],displayName:"Link",props:{isButton:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{defaultValue:{value:"null",computed:!1},type:{name:"node"},required:!1,description:""},withArrow:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},containsIcon:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},LinkWrapper:{defaultValue:{value:"undefined",computed:!0},type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1,description:""},inverse:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},nochrome:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},secondary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},tertiary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};const C=i(o,{target:"e5uri5a0"})({name:"13kmxi1",styles:"&&{color:red;}"}),N=x("onLinkClick"),J={title:"Design System/Link",component:o},s={render:()=>p("div",{children:[e(o,{href:"https://storybook.js.org/tutorials/",children:"Default"}),e("br",{}),e(o,{secondary:!0,href:"https://storybook.js.org/tutorials/",children:"Secondary"}),e("br",{}),e(o,{tertiary:!0,href:"https://storybook.js.org/tutorials/",children:"tertiary"}),e("br",{}),e(o,{nochrome:!0,href:"https://storybook.js.org/tutorials/",children:"nochrome"}),e("br",{}),p(o,{href:"https://storybook.js.org/tutorials/",children:[e(h,{icon:"discord","aria-hidden":!0}),"With icon in front"]}),e("br",{}),e(o,{containsIcon:!0,href:"https://storybook.js.org/tutorials/","aria-label":"Toggle side bar",children:e(h,{icon:"sidebar","aria-hidden":!0})}),e("br",{}),e(o,{containsIcon:!0,withArrow:!0,href:"https://storybook.js.org/tutorials/",children:"With arrow behind"}),e("br",{}),e("span",{style:{background:"#333"},children:e(o,{inverse:!0,href:"https://storybook.js.org/tutorials/",children:"Inverted colors"})}),e("br",{}),e(o,{isButton:!0,onClick:N,children:"is actually a button"}),e("br",{}),e(o,{tertiary:!0,LinkWrapper:g,href:"http://storybook.js.org",children:"has a LinkWrapper like GatsbyLink or NextLink"}),e("br",{}),e(C,{tertiary:!0,LinkWrapper:g,href:"http://storybook.js.org",children:"has a LinkWrapper like GatsbyLink or NextLink with custom styling"})]})};var L,v,j;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div>
      <Link href='https://storybook.js.org/tutorials/'>Default</Link>
      <br />
      <Link secondary href='https://storybook.js.org/tutorials/'>
        Secondary
      </Link>
      <br />
      <Link tertiary href='https://storybook.js.org/tutorials/'>
        tertiary
      </Link>
      <br />
      <Link nochrome href='https://storybook.js.org/tutorials/'>
        nochrome
      </Link>
      <br />
      <Link href='https://storybook.js.org/tutorials/'>
        <Icon icon='discord' aria-hidden />
        With icon in front
      </Link>
      <br />
      <Link containsIcon href='https://storybook.js.org/tutorials/' aria-label='Toggle side bar'>
        <Icon icon='sidebar' aria-hidden />
      </Link>
      <br />
      <Link containsIcon withArrow href='https://storybook.js.org/tutorials/'>
        With arrow behind
      </Link>
      <br />
      <span style={{
      background: '#333'
    }}>
        <Link inverse href='https://storybook.js.org/tutorials/'>
          Inverted colors
        </Link>
      </span>
      <br />
      {/* gatsby and styled-components don't work nicely together  */}
      {/* eslint-disable-next-line */}
      <Link isButton onClick={onLinkClick}>
        is actually a button
      </Link>
      <br />
      <Link tertiary LinkWrapper={StoryLinkWrapper} href='http://storybook.js.org'>
        has a LinkWrapper like GatsbyLink or NextLink
      </Link>
      <br />
      <CustomLink tertiary LinkWrapper={StoryLinkWrapper} href='http://storybook.js.org'>
        has a LinkWrapper like GatsbyLink or NextLink with custom styling
      </CustomLink>
    </div>
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const K=["ALL"];export{s as ALL,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Link.stories-33e2236b.js.map
