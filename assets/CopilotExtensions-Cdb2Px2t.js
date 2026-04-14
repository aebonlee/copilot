import{j as e,M as m,r as g}from"./markdown-CFpoqxyr.js";import{b as E}from"./vendor-D7XqJCDT.js";import{u as j}from"./index-ZkR4MYEP.js";import{S as v}from"./SEOHead-CWVpO3MN.js";import{T as h,C as d}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const C={id:"ext-overview",icon:"fa-puzzle-piece",title:"Extensions 개요",titleEn:"Extensions Overview",sections:[{title:"Copilot Extensions란?",titleEn:"What are Copilot Extensions?",content:`### GitHub Copilot Extensions

Copilot Extensions는 타사 도구와 서비스를 Copilot Chat에 직접 통합할 수 있는 확장 기능 시스템입니다.

### 주요 Extensions

| Extension | 기능 |
|-----------|------|
| **@docker** | Docker 관련 도움 |
| **@azure** | Azure 클라우드 서비스 |
| **@sentry** | 오류 추적 및 디버깅 |
| **@datadog** | 모니터링 및 성능 분석 |

### Extension 사용법

\`\`\`
# Chat에서 Extension 호출
@docker 이 Dockerfile을 최적화해줘
@azure 이 앱을 Azure에 배포하는 방법 알려줘
\`\`\`

### Extension 개발

GitHub Copilot Extension을 직접 개발하여 팀이나 조직에서 사용할 수 있습니다.

> Extensions를 통해 Copilot의 기능을 무한히 확장할 수 있습니다.`,contentEn:`### GitHub Copilot Extensions

Copilot Extensions is an extension system that allows integrating third-party tools and services directly into Copilot Chat.

### Major Extensions

| Extension | Function |
|-----------|----------|
| **@docker** | Docker-related assistance |
| **@azure** | Azure cloud services |
| **@sentry** | Error tracking and debugging |
| **@datadog** | Monitoring and performance analysis |

### Using Extensions

\`\`\`
# Call Extension in Chat
@docker optimize this Dockerfile
@azure show me how to deploy this app to Azure
\`\`\`

### Extension Development

You can develop your own GitHub Copilot Extensions for use by your team or organization.

> Extensions allow you to infinitely expand Copilot's capabilities.`}]},c=[C];function S(){const{language:x}=j(),i=x==="ko",[o,a]=E.useState(0),r=c[o],u={code({inline:t,className:n,children:s,...p}){const l=/language-(\w+)/.exec(n||"");return!t&&l?e.jsx(d,{code:String(s).replace(/\n$/,""),language:l[1]}):!t&&!l&&String(s).includes(`
`)?e.jsx(d,{code:String(s).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...p,children:s})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(h,{type:"tip",children:t})},a({href:t,children:n,...s}){return t!=null&&t.startsWith("/")?e.jsx("a",{href:t,...s,children:n}):e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",...s,children:n})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(v,{title:"Copilot Extensions",path:"/copilot-extensions"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:i?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:c.map((t,n)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${n===o?"active":""}`,onClick:()=>a(n),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`})," ",i?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:i?r.title:r.titleEn})}),r.sections.map((t,n)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:i?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(m,{remarkPlugins:[g],components:u,children:i?t.content:t.contentEn})})]},n)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:o===0,onClick:()=>a(o-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",i?"이전":"Previous"]}),e.jsxs("button",{disabled:o===c.length-1,onClick:()=>a(o+1),children:[i?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{S as default};
