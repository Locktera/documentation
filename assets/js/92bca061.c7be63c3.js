"use strict";(self.webpackChunklocktera_api_documentation=self.webpackChunklocktera_api_documentation||[]).push([[723],{4979:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"API/organization-management","title":"Organization Management","description":"Manage and configure organizational details, including API keys, tags, customizations, access logs, and more. This section outlines all endpoints available for organization-level management.","source":"@site/docs/API/organization-management.md","sourceDirName":"API","slug":"/API/organization-management","permalink":"/docs/API/organization-management","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Events Management","permalink":"/docs/API/events-management"},"next":{"title":"Tag Management","permalink":"/docs/API/tag-management"}}');var t=r(4848),a=r(8453);r(1470),r(9365);const s={},o="Organization Management",l={},d=[{value:"Endpoints",id:"endpoints",level:2},{value:"Retrieve Organization Information",id:"retrieve-organization-information",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Example Response:",id:"example-response",level:4},{value:"Retrieve Organization Information",id:"retrieve-organization-information-1",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Example Response:",id:"example-response-1",level:4},{value:"Update Organization Details",id:"update-organization-details",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Example Request:",id:"example-request",level:4},{value:"Delete Organization",id:"delete-organization",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Example Request:",id:"example-request-1",level:4},{value:"Retrieve Access Log",id:"retrieve-access-log",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Example Request:",id:"example-request-2",level:4},{value:"Retrieve Audit Log",id:"retrieve-audit-log",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Retrieve Monthly Consumption",id:"retrieve-monthly-consumption",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Retrieve Organization Customizations",id:"retrieve-organization-customizations",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Update Organization Customizations",id:"update-organization-customizations",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"Example Implementations",id:"example-implementations",level:4}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"organization-management",children:"Organization Management"})}),"\n",(0,t.jsx)(n.p,{children:"Manage and configure organizational details, including API keys, tags, customizations, access logs, and more. This section outlines all endpoints available for organization-level management."}),"\n",(0,t.jsxs)(n.admonition,{title:"Overview",type:"info",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Organization Management"})," API enables the following operations:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Retrieve Organization Details"}),": Access information about an organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Update Organization Details"}),": Modify organization settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Delete Organizations"}),": Remove organizations from the hierarchy."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Access Logs"}),": Monitor access activities within the organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Audit Logs"}),": Retrieve audit trails for organizational operations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consumption Tracking"}),": View monthly resource consumption."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Customizations"}),": Retrieve or update organization-level customizations."]}),"\n"]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["All API requests require valid authentication headers for secure operations. Unauthorized requests will return a ",(0,t.jsx)(n.code,{children:"401 Unauthorized"})," error."]})}),"\n",(0,t.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-organization-information",children:"Retrieve Organization Information"}),"\n",(0,t.jsx)(n.p,{children:"Retrieve detailed information about a specific organization."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"GET /orgs/{org_id}"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-response",children:"Example Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "org-123",\n  "name": "Example Organization",\n  "created_at": "2023-01-01T00:00:00Z",\n  "customizations": {...}\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-organization-information-1",children:"Retrieve Organization Information"}),"\n",(0,t.jsx)(n.p,{children:"Retrieve detailed information about a specific organization."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"GET /orgs/{org_id}"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-response-1",children:"Example Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "org-123",\n  "name": "Example Organization",\n  "created_at": "2023-01-01T00:00:00Z",\n  "customizations": {...}\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"update-organization-details",children:"Update Organization Details"}),"\n",(0,t.jsx)(n.p,{children:"Modify the details of an organization."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"PATCH /orgs/{org_id}"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})})," ",(0,t.jsx)(n.em,{children:"(string, optional)"}),": The new name for the organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"customizations"})})," ",(0,t.jsx)(n.em,{children:"(object, optional)"}),": Updated customizations for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-request",children:"Example Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Updated Organization Name"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"delete-organization",children:"Delete Organization"}),"\n",(0,t.jsx)(n.p,{children:"Remove an organization from the hierarchy."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"DELETE /orgs/{org_id}"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-3",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-request-1",children:"Example Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "message": "Organization deleted successfully"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-access-log",children:"Retrieve Access Log"}),"\n",(0,t.jsx)(n.p,{children:"Fetch the access log for an organization."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"GET /orgs/{org_id}/access_log"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-4",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-request-2",children:"Example Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "timestamp": "2023-11-01T12:00:00Z",\n    "user": "john.doe@example.com",\n    "action": "LOGIN",\n    "status": "SUCCESS"\n  }\n]\n\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-audit-log",children:"Retrieve Audit Log"}),"\n",(0,t.jsx)(n.p,{children:"Fetch the audit trail for children organizations or operations."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"GET /orgs/{org_id}/children_audit"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-5",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-monthly-consumption",children:"Retrieve Monthly Consumption"}),"\n",(0,t.jsx)(n.p,{children:"View monthly resource consumption for an organization."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"GET /orgs/{org_id}/consumption"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-6",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-organization-customizations",children:"Retrieve Organization Customizations"}),"\n",(0,t.jsx)(n.p,{children:"Fetch current customization settings for an organization."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"GET /orgs/{org_id}/customizations"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-7",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"update-organization-customizations",children:"Update Organization Customizations"}),"\n",(0,t.jsx)(n.p,{children:"Modify customization settings for an organization."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"PUT /orgs/{org_id}/customizations"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-8",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"customizations"})})," ",(0,t.jsx)(n.em,{children:"(object, required)"}),": The updated customizations object."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"example-implementations",children:"Example Implementations"}),"\n",(0,t.jsx)(n.p,{children:"API Response Codes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"200 OK"}),": Request processed successfully."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"400 Bad Request"}),": Invalid input or parameters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"401 Unauthorized"}),": Authentication failed or invalid API key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"404 Not Found"}),": Resource not found."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"500 Internal Server Error"}),": An error occurred on the server."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var i=r(4164);const t={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,s),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>E});var i=r(6540),t=r(4164),a=r(3104),s=r(6347),o=r(205),l=r(7485),d=r(1682),c=r(679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:t}}=e;return{value:n,label:r,attributes:i,default:t}}))}(r);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=h(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[d,u]=g({queryString:r,groupId:t}),[x,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,c.Dv)(r);return[t,(0,i.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),j=(()=>{const e=d??x;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var p=r(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function f(e){let{className:n,block:r,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),t=o[r].value;t!==i&&(d(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,t.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function z(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function b(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(z,{...n,...e})]})}function E(e){const n=(0,p.A)();return(0,v.jsx)(b,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var i=r(6540);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);