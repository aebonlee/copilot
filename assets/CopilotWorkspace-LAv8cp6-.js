import{j as e,M as x,r as g}from"./markdown-CFpoqxyr.js";import{b as v}from"./vendor-D7XqJCDT.js";import{u as j}from"./index-B57uzUC2.js";import{S as k}from"./SEOHead-CWVpO3MN.js";import{T as h,C as d}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const C={id:"workspace-overview",icon:"fa-laptop-code",title:"Workspace 개요",titleEn:"Workspace Overview",sections:[{title:"Copilot Workspace란?",titleEn:"What is Copilot Workspace?",content:`### GitHub Copilot Workspace

Copilot Workspace는 GitHub Issue에서 시작하여 AI가 코드 변경 사항을 계획하고 구현하는 AI 기반 개발 환경입니다.

### 핵심 워크플로우

1. **Issue 분석** - GitHub Issue의 내용을 AI가 분석
2. **계획 수립** - 필요한 코드 변경 사항을 계획
3. **코드 구현** - AI가 변경 사항을 자동 구현
4. **검토 & 수정** - 개발자가 결과를 검토하고 수정
5. **PR 생성** - 최종 결과를 Pull Request로 생성

### 주요 특징

- **자연어 → 코드**: Issue 설명만으로 코드 변경
- **멀티 파일 편집**: 여러 파일을 동시에 수정
- **컨텍스트 인식**: 프로젝트 전체 구조 이해
- **반복적 개선**: 결과를 대화형으로 수정 가능

> Copilot Workspace는 아이디어에서 코드까지의 거리를 획기적으로 줄여줍니다.`,contentEn:`### GitHub Copilot Workspace

Copilot Workspace is an AI-powered development environment that starts from a GitHub Issue and has AI plan and implement code changes.

### Core Workflow

1. **Issue Analysis** - AI analyzes the GitHub Issue content
2. **Planning** - Plans necessary code changes
3. **Implementation** - AI automatically implements changes
4. **Review & Edit** - Developer reviews and modifies results
5. **PR Creation** - Creates a Pull Request with final results

### Key Features

- **Natural Language → Code**: Code changes from Issue descriptions alone
- **Multi-file Editing**: Modify multiple files simultaneously
- **Context Awareness**: Understanding of entire project structure
- **Iterative Improvement**: Conversationally refine results

> Copilot Workspace dramatically reduces the distance from idea to code.`}]},c=[C];function y(){const{language:u}=j(),a=u==="ko",[n,o]=v.useState(0),l=c[n],p={code({inline:s,className:t,children:i,...m}){const r=/language-(\w+)/.exec(t||"");return!s&&r?e.jsx(d,{code:String(i).replace(/\n$/,""),language:r[1]}):!s&&!r&&String(i).includes(`
`)?e.jsx(d,{code:String(i).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...m,children:i})},table({children:s}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:s})})},blockquote({children:s}){return e.jsx(h,{type:"tip",children:s})},a({href:s,children:t,...i}){return s!=null&&s.startsWith("/")?e.jsx("a",{href:s,...i,children:t}):e.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",...i,children:t})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(k,{title:"Copilot Workspace",path:"/copilot-workspace"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:a?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:c.map((s,t)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${t===n?"active":""}`,onClick:()=>o(t),children:[e.jsx("i",{className:`fa-solid ${s.icon} nav-icon`})," ",a?s.title:s.titleEn]})},s.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:a?l.title:l.titleEn})}),l.sections.map((s,t)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:a?s.title:s.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(x,{remarkPlugins:[g],components:p,children:a?s.content:s.contentEn})})]},t)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:n===0,onClick:()=>o(n-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",a?"이전":"Previous"]}),e.jsxs("button",{disabled:n===c.length-1,onClick:()=>o(n+1),children:[a?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{y as default};
