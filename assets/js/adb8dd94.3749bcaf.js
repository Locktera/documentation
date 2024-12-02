"use strict";(self.webpackChunklocktera_api_documentation=self.webpackChunklocktera_api_documentation||[]).push([[133],{6233:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"API/drm-storage-configuration","title":"DRM Storage Configuration","description":"Manage storage settings for your organization, including supported storage options like Azure, BYOS, and S3. This section outlines the endpoints for configuring and retrieving storage settings.","source":"@site/docs/API/drm-storage-configuration.md","sourceDirName":"API","slug":"/API/drm-storage-configuration","permalink":"/documentation/docs/API/drm-storage-configuration","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Customization Management","permalink":"/documentation/docs/API/customization-management"},"next":{"title":"Error Management","permalink":"/documentation/docs/API/error-management"}}');var a=r(4848),o=r(8453);r(1470),r(9365);const i={},s="DRM Storage Configuration",l={},u=[{value:"Endpoints",id:"endpoints",level:2},{value:"Retrieve Storage Configuration",id:"retrieve-storage-configuration",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Example Response:",id:"example-response",level:4},{value:"Update Storage Configuration",id:"update-storage-configuration",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Example Request:",id:"example-request",level:4},{value:"Example Response:",id:"example-response-1",level:4},{value:"Example Implementations",id:"example-implementations",level:4}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"drm-storage-configuration",children:"DRM Storage Configuration"})}),"\n",(0,a.jsx)(n.p,{children:"Manage storage settings for your organization, including supported storage options like Azure, BYOS, and S3. This section outlines the endpoints for configuring and retrieving storage settings."}),"\n",(0,a.jsxs)(n.admonition,{title:"Overview",type:"info",children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"DRM Storage Configuration"})," API enables the following operations:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Retrieve Storage Configuration"}),": View current storage settings for an organization."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Update Storage Configuration"}),": Modify the storage settings for an organization."]}),"\n"]})]}),"\n",(0,a.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,a.jsxs)(n.p,{children:["All API requests require valid authentication headers. Unauthorized requests will return a ",(0,a.jsx)(n.code,{children:"401 Unauthorized"})," error."]})}),"\n",(0,a.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,a.jsx)(n.h3,{id:"retrieve-storage-configuration",children:"Retrieve Storage Configuration"}),"\n",(0,a.jsx)(n.p,{children:"Fetch the current storage configuration for an organization."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Endpoint"}),": ",(0,a.jsx)(n.code,{children:"GET /orgs/{org_id}/storage_config"})]}),"\n",(0,a.jsx)(n.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"org_id"})})," ",(0,a.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-response",children:"Example Response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\r\n  "storage_type": "BYOS",\r\n  "configuration": {\r\n    "provider": "Azure",\r\n    "container_name": "secure-container",\r\n    "connection_string": "AccountName=example;AccountKey=***"\r\n  }\r\n}\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"update-storage-configuration",children:"Update Storage Configuration"}),"\n",(0,a.jsx)(n.p,{children:"Modify the storage configuration for an organization."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Endpoint"}),": ",(0,a.jsx)(n.code,{children:"PUT /orgs/{org_id}/storage_config"})]}),"\n",(0,a.jsx)(n.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"org_id"})})," ",(0,a.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"storage_config"})})," ",(0,a.jsx)(n.em,{children:"(object, required)"}),": The updated storage configuration object."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-request",children:"Example Request:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\r\n  "storage_type": "S3",\r\n  "configuration": {\r\n    "bucket_name": "my-secure-bucket",\r\n    "access_key": "ACCESS_KEY",\r\n    "secret_key": "SECRET_KEY"\r\n  }\r\n}\r\n\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-response-1",children:"Example Response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\r\n  "message": "Storage configuration updated successfully"\r\n}\r\n\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h4,{id:"example-implementations",children:"Example Implementations"}),"\n",(0,a.jsx)(n.p,{children:"API Response Codes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"200 OK"}),": Request processed successfully."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"400 Bad Request"}),": Invalid input or parameters."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"401 Unauthorized"}),": Authentication failed or invalid API key."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"404 Not Found"}),": Resource not found."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"500 Internal Server Error"}),": An error occurred on the server."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var o=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>A});var t=r(6540),a=r(4164),o=r(3104),i=r(6347),s=r(205),l=r(7485),u=r(1682),c=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,o=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[u,d]=p({queryString:r,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),x=(()=>{const e=u??m;return g({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),a=s[r].value;a!==t&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function A(e){const n=(0,f.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(6540);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);