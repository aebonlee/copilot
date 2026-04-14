import{j as e,M as x,r as g}from"./markdown-CFpoqxyr.js";import{b as j}from"./vendor-D7XqJCDT.js";import{u as h}from"./index-CQw3mLRZ.js";import{S as b}from"./SEOHead-BorQ4Gq5.js";import{T as C,C as d}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const v={id:"introduction",icon:"fa-info-circle",title:"Copilot Master 소개",titleEn:"About Copilot Master",sections:[{title:"플랫폼 소개",titleEn:"Platform Overview",content:`**Copilot Master**는 GitHub Copilot의 모든 기능을 체계적으로 학습할 수 있는 종합 플랫폼입니다.

VS Code 코드 완성, Copilot Chat, CLI, Workspace, Extensions, Enterprise까지 — GitHub Copilot의 전체 생태계를 한곳에서 학습할 수 있습니다.

### 주요 특징

- **체계적 학습 경로**: 초보자부터 전문가까지 단계별 학습
- **실전 중심 가이드**: 코드 예제와 함께하는 실습형 콘텐츠
- **한국어/영어 지원**: 양국어 완벽 지원
- **커뮤니티**: 학습자 간 경험 공유와 Q&A`,contentEn:`**Copilot Master** is a comprehensive platform for systematically learning all features of GitHub Copilot.

From VS Code code completion, Copilot Chat, CLI, Workspace, Extensions, to Enterprise — learn the entire GitHub Copilot ecosystem in one place.

### Key Features

- **Systematic Learning Paths**: Step-by-step learning from beginner to expert
- **Practice-Oriented Guides**: Hands-on content with code examples
- **Korean/English Support**: Full bilingual support
- **Community**: Experience sharing and Q&A among learners`}]},c=[v];function M(){const{language:u}=h(),i=u==="ko",[o,a]=j.useState(0),r=c[o],m={code({inline:t,className:s,children:n,...p}){const l=/language-(\w+)/.exec(s||"");return!t&&l?e.jsx(d,{code:String(n).replace(/\n$/,""),language:l[1]}):!t&&!l&&String(n).includes(`
`)?e.jsx(d,{code:String(n).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...p,children:n})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(C,{type:"tip",children:t})},a({href:t,children:s,...n}){return t&&t.startsWith("/")?e.jsx("a",{href:t,...n,children:s}):e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",...n,children:s})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(b,{title:"About",description:i?"Copilot Master 플랫폼 소개":"About Copilot Master platform",path:"/about"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:i?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:c.map((t,s)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${s===o?"active":""}`,onClick:()=>a(s),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`}),i?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:i?r.title:r.titleEn})}),r.sections.map((t,s)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:i?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(x,{remarkPlugins:[g],components:m,children:i?t.content:t.contentEn})})]},s)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:o===0,onClick:()=>a(o-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",i?"이전":"Previous"]}),e.jsxs("button",{disabled:o===c.length-1,onClick:()=>a(o+1),children:[i?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{M as default};
