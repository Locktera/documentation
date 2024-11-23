"use strict";(self.webpackChunklocktera_api_documentation=self.webpackChunklocktera_api_documentation||[]).push([[929],{3020:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"API/address-book-management","title":"Address Management","description":"Manage address book entries, including email addresses, names, companies, and phone numbers. This section outlines all endpoints available for creating, updating, retrieving, and deleting address records within an organization\'s address book.","source":"@site/docs/API/address-book-management.md","sourceDirName":"API","slug":"/API/address-book-management","permalink":"/documentation/docs/API/address-book-management","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"intro","permalink":"/documentation/docs/intro"},"next":{"title":"API Key Management","permalink":"/documentation/docs/API/api-key-management"}}');var t=r(4848),a=r(8453),i=r(1470),o=r(9365);const l={},d="Address Management",c={},u=[{value:"Endpoints",id:"endpoints",level:2},{value:"Retrieve Organization Addresses",id:"retrieve-organization-addresses",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Example Response:",id:"example-response",level:4},{value:"Create or Update Address Entry",id:"create-or-update-address-entry",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Example Request:",id:"example-request",level:4},{value:"Example Response:",id:"example-response-1",level:4},{value:"Delete Address Entry",id:"delete-address-entry",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Example Response:",id:"example-response-2",level:4},{value:"Retrieve Address Audit Logs",id:"retrieve-address-audit-logs",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Example Response:",id:"example-response-3",level:4},{value:"Example Implementations",id:"example-implementations",level:3},{value:"API Response Codes",id:"api-response-codes",level:3}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"address-management",children:"Address Management"})}),"\n",(0,t.jsx)(n.p,{children:"Manage address book entries, including email addresses, names, companies, and phone numbers. This section outlines all endpoints available for creating, updating, retrieving, and deleting address records within an organization's address book."}),"\n",(0,t.jsxs)(n.admonition,{title:"Overview",type:"info",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Address Management"})," API enables the following operations:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Retrieve Addresses"}),": Fetch a list of address entries for the organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create or Update Addresses"}),": Add new address entries or update existing ones."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Delete Address Entries"}),": Remove addresses that are no longer needed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Retrieve Audit Logs"}),": Fetch audit logs for address book operations."]}),"\n"]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["All API requests require valid authentication headers for secure operations. Unauthorized requests will return a ",(0,t.jsx)(n.code,{children:"401 Unauthorized"})," error."]})}),"\n",(0,t.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-organization-addresses",children:"Retrieve Organization Addresses"}),"\n",(0,t.jsx)(n.p,{children:"Fetch all address entries associated with a specific organization."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"GET /orgs/{org_id}/addresses"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-response",children:"Example Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "email": "john.doe@example.com",\n    "first_name": "John",\n    "last_name": "Doe",\n    "company": "Example Corp",\n    "phone_number": "+1-234-567-8901"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"create-or-update-address-entry",children:"Create or Update Address Entry"}),"\n",(0,t.jsx)(n.p,{children:"Add a new address entry or update an existing one."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"PUT /orgs/{org_id}/addresses/{email}"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"email"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The email address of the contact."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-request",children:"Example Request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "first_name": "Jane",\n  "last_name": "Doe",\n  "company": "Example Inc",\n  "phone_number": "+1-987-654-3210"\n}\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-response-1",children:"Example Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "email": "jane.doe@example.com",\n  "first_name": "Jane",\n  "last_name": "Doe",\n  "company": "Example Inc",\n  "phone_number": "+1-987-654-3210"\n}\n\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"delete-address-entry",children:"Delete Address Entry"}),"\n",(0,t.jsx)(n.p,{children:"Add a new address entry or update an existing one."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"DELETE /orgs/{org_id}/addresses/{email}"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"email"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The email address of the contact."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-response-2",children:"Example Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "message": "Address entry deleted successfully"\n}\n\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-address-audit-logs",children:"Retrieve Address Audit Logs"}),"\n",(0,t.jsx)(n.p,{children:"Fetch audit logs for address-related operations."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": ",(0,t.jsx)(n.code,{children:"GET /orgs/{org_id}/addresses_audit"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-3",children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"org_id"})})," ",(0,t.jsx)(n.em,{children:"(string, required)"}),": The unique identifier for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-response-3",children:"Example Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "message": "Address entry deleted successfully"\n}\n\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"API Response Codes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"200 OK"}),": Request processed successfully."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"400 Bad Request"}),": Invalid input or parameters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"401 Unauthorized"}),": Authentication failed or invalid API key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"404 Not Found"}),": Resource not found."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"500 Internal Server Error"}),": An error occurred on the server."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"example-implementations",children:"Example Implementations"}),"\n",(0,t.jsxs)(i.A,{defaultValue:"command-line",values:[{label:"Command Line (cURL)",value:"command-line"},{label:"TypeScript",value:"typescript"},{label:"Python",value:"python"},{label:"Go",value:"go"},{label:"JavaScript",value:"javascript"},{label:"Java",value:"java"},{label:"Ruby",value:"ruby"},{label:"React",value:"react"}],children:[(0,t.jsx)(o.A,{value:"command-line",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://api.locktera.com/orgs/{org_id}/addresses" -H "Authorization: Bearer YOUR_API_KEY"\n'})})}),(0,t.jsx)(o.A,{value:"typescript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import axios from 'axios';\n\nasync function fetchAddresses(orgId: string) {\nconst response = await axios.get(`https://api.locktera.com/orgs/${orgId}/addresses`, {\nheaders: {\nAuthorization: `Bearer YOUR_API_KEY`,\n},\n});\nconsole.log(response.data);\n}\n\nfetchAddresses(\"org-123\");\n"})})}),(0,t.jsx)(o.A,{value:"python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests\n\ndef fetch_addresses(org_id):\n    url = f"https://api.locktera.com/orgs/{org_id}/addresses"\n    headers = {"Authorization": "Bearer YOUR_API_KEY"}\n    response = requests.get(url, headers=headers)\n    print(response.json())\n\nfetch_addresses("org-123")\n'})})}),(0,t.jsx)(o.A,{value:"go",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n"fmt"\n"net/http"\n"io/ioutil"\n)\n\nfunc fetchAddresses(orgID string) {\nclient := &http.Client{}\nreq, _ := http.NewRequest("GET", fmt.Sprintf("https://api.locktera.com/orgs/%s/addresses", orgID), nil)\nreq.Header.Add("Authorization", "Bearer YOUR_API_KEY")\nres, _ := client.Do(req)\nbody, _ := ioutil.ReadAll(res.Body)\nfmt.Println(string(body))\n}\n\nfunc main() {\nfetchAddresses("org-123")\n}\n'})})}),(0,t.jsx)(o.A,{value:"javascript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'fetch("https://api.locktera.com/orgs/org-123/addresses", {\n  method: "GET",\n  headers: {\n    Authorization: "Bearer YOUR_API_KEY"\n  }\n})\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error("Error:", error));\n\n'})})}),(0,t.jsx)(o.A,{value:"java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import java.net.HttpURLConnection;\nimport java.net.URL;\nimport java.io.BufferedReader;\nimport java.io.InputStreamReader;\n\npublic class Main {\npublic static void main(String[] args) throws Exception {\nURL url = new URL("https://api.locktera.com/orgs/org-123/addresses");\nHttpURLConnection conn = (HttpURLConnection) url.openConnection();\nconn.setRequestMethod("GET");\nconn.setRequestProperty("Authorization", "Bearer YOUR_API_KEY");\n\n        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n        String inputLine;\n        StringBuffer content = new StringBuffer();\n        while ((inputLine = in.readLine()) != null) {\n            content.append(inputLine);\n        }\n        in.close();\n        System.out.println(content.toString());\n    }\n}\n\n'})})}),(0,t.jsx)(o.A,{value:"ruby",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:'require \'net/http\'\nrequire \'json\'\n\nuri = URI("https://api.locktera.com/orgs/org-123/addresses")\nrequest = Net::HTTP::Get.new(uri)\nrequest["Authorization"] = "Bearer YOUR_API_KEY"\n\nresponse = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|\n  http.request(request)\nend\n\nputs JSON.parse(response.body)\n\n'})})}),(0,t.jsx)(o.A,{value:"react",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react",children:'import axios from \'axios\';\nimport { useEffect, useState } from \'react\';\n\nfunction AddressList() {\nconst [addresses, setAddresses] = useState([]);\n\nuseEffect(() => {\naxios.get("https://api.locktera.com/orgs/org-123/addresses", {\nheaders: {\nAuthorization: "Bearer YOUR_API_KEY",\n}\n})\n.then(response => setAddresses(response.data))\n.catch(error => console.error("Error:", error));\n}, []);\n\nreturn (\n<div>\n<h1>Address List</h1>\n<ul>\n{addresses.map((address, index) => (\n<li key={index}>{address.first_name} {address.last_name}</li>\n))}\n</ul>\n</div>\n);\n}\n\nexport default AddressList;\n\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{title:'Important Replace "YOUR_ACCESS_TOKEN" and "org_id" with actual values in your implementation.',type:"caution"}),"\n",(0,t.jsx)(n.h3,{id:"api-response-codes",children:"API Response Codes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"200 OK"}),": Successfully retrieved addresses."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"401 Unauthorized"}),": Authentication failed or access token is invalid."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"404 Not Found"}),": Organization or address not found."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"500 Internal Server Error"}),": Server encountered an error while processing the request.\nFor more information, visit the full API documentation at Locktera API Documentation."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var s=r(4164);const t={tabItem:"tabItem_Ymn6"};var a=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var s=r(6540),t=r(4164),a=r(3104),i=r(6347),o=r(205),l=r(7485),d=r(1682),c=r(679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[d,u]=m({queryString:r,groupId:t}),[x,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,c.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),j=(()=>{const e=d??x;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=r(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function v(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),t=o[r].value;t!==s&&(d(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,t.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function A(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,f.jsx)(A,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(6540);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);