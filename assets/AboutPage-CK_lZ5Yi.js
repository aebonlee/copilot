import{j as o,M as C,r as x}from"./markdown-CFpoqxyr.js";import{b as g}from"./vendor-D7XqJCDT.js";import{u as f}from"./index-ZkR4MYEP.js";import{S as h}from"./SEOHead-CWVpO3MN.js";import{T as j,C as d}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const w={id:"introduction",icon:"fa-info-circle",title:"Copilot Master 소개",titleEn:"About Copilot Master",sections:[{title:"플랫폼 소개",titleEn:"Platform Overview",content:`**Copilot Master**는 Microsoft Copilot 생태계의 모든 기능을 체계적으로 학습할 수 있는 종합 플랫폼입니다.

GitHub Copilot(VS Code, Chat, CLI, Workspace, Extensions, Enterprise)부터 Microsoft 365 Copilot(Word, Excel, PowerPoint, Outlook, Teams), Windows Copilot, Copilot Studio, Power Platform(Power Automate, Power Apps, Power BI)까지 — Copilot의 전체 생태계를 한곳에서 학습할 수 있습니다.

### 주요 특징

- **체계적 학습 경로**: 개발자 도구부터 업무자동화까지 13개 학습 가이드
- **실전 중심 가이드**: 코드 예제, 프롬프트 팁, 실무 시나리오 기반 학습
- **한국어/영어 지원**: 양국어 완벽 지원
- **업무자동화 실전**: 문서, 이메일, 데이터 분석, 워크플로우 자동화 시나리오
- **커뮤니티**: 학습자 간 경험 공유와 Q&A

### 학습 카테고리

| 카테고리 | 주요 내용 |
|----------|-----------|
| **GitHub Copilot** | VS Code 코드 완성, Chat, CLI, Workspace, Extensions, Enterprise |
| **M365 Copilot** | Word, Excel, PowerPoint, Outlook, Teams |
| **자동화 도구** | Windows Copilot, Copilot Studio, Power Platform |
| **업무자동화 실전** | 문서·이메일·데이터·워크플로우 자동화 시나리오 |`,contentEn:`**Copilot Master** is a comprehensive platform for systematically learning the entire Microsoft Copilot ecosystem.

From GitHub Copilot (VS Code, Chat, CLI, Workspace, Extensions, Enterprise) to Microsoft 365 Copilot (Word, Excel, PowerPoint, Outlook, Teams), Windows Copilot, Copilot Studio, and Power Platform (Power Automate, Power Apps, Power BI) — learn the entire Copilot ecosystem in one place.

### Key Features

- **Systematic Learning Paths**: 13 learning guides from developer tools to work automation
- **Practice-Oriented Guides**: Code examples, prompt tips, and real-world scenario-based learning
- **Korean/English Support**: Full bilingual support
- **Work Automation**: Document, email, data analysis, and workflow automation scenarios
- **Community**: Experience sharing and Q&A among learners

### Learning Categories

| Category | Key Content |
|----------|-------------|
| **GitHub Copilot** | VS Code completion, Chat, CLI, Workspace, Extensions, Enterprise |
| **M365 Copilot** | Word, Excel, PowerPoint, Outlook, Teams |
| **Automation Tools** | Windows Copilot, Copilot Studio, Power Platform |
| **Work Automation** | Document, email, data, and workflow automation scenarios |`}]},c=[w];function A(){const{language:m}=f(),t=m==="ko",[a,n]=g.useState(0),r=c[a],u={code({inline:e,className:i,children:s,...p}){const l=/language-(\w+)/.exec(i||"");return!e&&l?o.jsx(d,{code:String(s).replace(/\n$/,""),language:l[1]}):!e&&!l&&String(s).includes(`
`)?o.jsx(d,{code:String(s).replace(/\n$/,""),language:""}):o.jsx("code",{className:"inline-code",...p,children:s})},table({children:e}){return o.jsx("div",{className:"table-responsive",children:o.jsx("table",{children:e})})},blockquote({children:e}){return o.jsx(j,{type:"tip",children:e})},a({href:e,children:i,...s}){return e&&e.startsWith("/")?o.jsx("a",{href:e,...s,children:i}):o.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",...s,children:i})}};return o.jsxs("div",{className:"guide-page",children:[o.jsx(h,{title:"About",description:t?"Copilot Master 플랫폼 소개":"About Copilot Master platform",path:"/about"}),o.jsxs("div",{className:"guide-layout",children:[o.jsxs("aside",{className:"guide-sidebar",children:[o.jsx("div",{className:"guide-sidebar-title",children:t?"목차":"Contents"}),o.jsx("ul",{className:"guide-nav",children:c.map((e,i)=>o.jsx("li",{className:"guide-nav-item",children:o.jsxs("button",{className:`guide-nav-link ${i===a?"active":""}`,onClick:()=>n(i),children:[o.jsx("i",{className:`fa-solid ${e.icon} nav-icon`}),t?e.title:e.titleEn]})},e.id))})]}),o.jsxs("div",{className:"guide-content",children:[o.jsx("div",{className:"guide-content-header",children:o.jsx("h1",{children:t?r.title:r.titleEn})}),r.sections.map((e,i)=>o.jsxs("div",{className:"guide-section",children:[o.jsx("h2",{children:t?e.title:e.titleEn}),o.jsx("div",{className:"markdown-body",children:o.jsx(C,{remarkPlugins:[x],components:u,children:t?e.content:e.contentEn})})]},i)),o.jsxs("div",{className:"guide-section-nav",children:[o.jsxs("button",{disabled:a===0,onClick:()=>n(a-1),children:[o.jsx("i",{className:"fa-solid fa-chevron-left"})," ",t?"이전":"Previous"]}),o.jsxs("button",{disabled:a===c.length-1,onClick:()=>n(a+1),children:[t?"다음":"Next"," ",o.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{A as default};
