import{j as t,M as C,r as p}from"./markdown-CFpoqxyr.js";import{b as x}from"./vendor-D7XqJCDT.js";import{u as g}from"./index-DJAI8N3Z.js";import{S as j}from"./SEOHead-CWVpO3MN.js";import{T as v,C as d}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const f={id:"chat-basics",icon:"fa-comments",title:"Chat 기본",titleEn:"Chat Basics",sections:[{title:"Copilot Chat 시작하기",titleEn:"Getting Started with Copilot Chat",content:`### Copilot Chat이란?

Copilot Chat은 VS Code에 내장된 대화형 AI 어시스턴트입니다. 코드 작성, 디버깅, 리팩토링, 테스트 생성 등 다양한 작업을 대화를 통해 수행할 수 있습니다.

### Chat 창 열기

| 방법 | 단축키/동작 |
|------|-------------|
| **채팅 패널** | Ctrl+Shift+I (Windows) |
| **인라인 Chat** | Ctrl+I |
| **퀵 Chat** | Ctrl+Shift+Alt+L |

### Slash Commands

\`\`\`
/explain    - 선택한 코드 설명
/fix        - 코드 오류 수정
/tests      - 테스트 코드 생성
/doc        - 문서화/주석 생성
/optimize   - 코드 최적화
/clear      - 채팅 초기화
/new        - 새 채팅 시작
\`\`\`

### @Participants

\`\`\`
@workspace  - 워크스페이스 전체 컨텍스트 참조
@vscode     - VS Code 설정/기능 관련 질문
@terminal   - 터미널 관련 도움
@github     - GitHub 관련 작업
\`\`\`

> Copilot Chat은 열려 있는 파일과 프로젝트 구조를 자동으로 이해합니다.`,contentEn:`### What is Copilot Chat?

Copilot Chat is a conversational AI assistant built into VS Code. You can perform various tasks like code writing, debugging, refactoring, and test generation through conversation.

### Opening Chat

| Method | Shortcut/Action |
|--------|-----------------|
| **Chat Panel** | Ctrl+Shift+I (Windows) |
| **Inline Chat** | Ctrl+I |
| **Quick Chat** | Ctrl+Shift+Alt+L |

### Slash Commands

\`\`\`
/explain    - Explain selected code
/fix        - Fix code errors
/tests      - Generate test code
/doc        - Generate documentation/comments
/optimize   - Optimize code
/clear      - Clear chat
/new        - Start new chat
\`\`\`

### @Participants

\`\`\`
@workspace  - Reference entire workspace context
@vscode     - VS Code settings/features questions
@terminal   - Terminal-related help
@github     - GitHub-related tasks
\`\`\`

> Copilot Chat automatically understands open files and project structure.`}]},r=[f];function A(){const{language:m}=g(),i=m==="ko",[n,o]=x.useState(0),c=r[n],h={code({inline:e,className:a,children:s,...u}){const l=/language-(\w+)/.exec(a||"");return!e&&l?t.jsx(d,{code:String(s).replace(/\n$/,""),language:l[1]}):!e&&!l&&String(s).includes(`
`)?t.jsx(d,{code:String(s).replace(/\n$/,""),language:""}):t.jsx("code",{className:"inline-code",...u,children:s})},table({children:e}){return t.jsx("div",{className:"table-responsive",children:t.jsx("table",{children:e})})},blockquote({children:e}){return t.jsx(v,{type:"tip",children:e})},a({href:e,children:a,...s}){return e!=null&&e.startsWith("/")?t.jsx("a",{href:e,...s,children:a}):t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",...s,children:a})}};return t.jsxs("div",{className:"guide-page",children:[t.jsx(j,{title:"Copilot Chat",path:"/copilot-chat"}),t.jsxs("div",{className:"guide-layout",children:[t.jsxs("aside",{className:"guide-sidebar",children:[t.jsx("div",{className:"guide-sidebar-title",children:i?"목차":"Contents"}),t.jsx("ul",{className:"guide-nav",children:r.map((e,a)=>t.jsx("li",{className:"guide-nav-item",children:t.jsxs("button",{className:`guide-nav-link ${a===n?"active":""}`,onClick:()=>o(a),children:[t.jsx("i",{className:`fa-solid ${e.icon} nav-icon`})," ",i?e.title:e.titleEn]})},e.id))})]}),t.jsxs("div",{className:"guide-content",children:[t.jsx("div",{className:"guide-content-header",children:t.jsx("h1",{children:i?c.title:c.titleEn})}),c.sections.map((e,a)=>t.jsxs("div",{className:"guide-section",children:[t.jsx("h2",{children:i?e.title:e.titleEn}),t.jsx("div",{className:"markdown-body",children:t.jsx(C,{remarkPlugins:[p],components:h,children:i?e.content:e.contentEn})})]},a)),t.jsxs("div",{className:"guide-section-nav",children:[t.jsxs("button",{disabled:n===0,onClick:()=>o(n-1),children:[t.jsx("i",{className:"fa-solid fa-chevron-left"})," ",i?"이전":"Previous"]}),t.jsxs("button",{disabled:n===r.length-1,onClick:()=>o(n+1),children:[i?"다음":"Next"," ",t.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{A as default};
