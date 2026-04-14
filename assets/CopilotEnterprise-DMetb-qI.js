import{j as e,M as m,r as x}from"./markdown-CFpoqxyr.js";import{b as j}from"./vendor-D7XqJCDT.js";import{u as v}from"./index-ZkR4MYEP.js";import{S as E}from"./SEOHead-CWVpO3MN.js";import{T as C,C as d}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const h={id:"enterprise-overview",icon:"fa-building",title:"Enterprise 개요",titleEn:"Enterprise Overview",sections:[{title:"Copilot Enterprise란?",titleEn:"What is Copilot Enterprise?",content:`### GitHub Copilot Enterprise

Copilot Enterprise는 대규모 조직을 위한 GitHub Copilot의 프리미엄 플랜입니다.

### Enterprise 주요 기능

| 기능 | 설명 |
|------|------|
| **Knowledge Bases** | 조직 내부 코드를 학습하여 맞춤 제안 |
| **Fine-tuned Models** | 조직 코딩 패턴에 최적화된 모델 |
| **정책 관리** | 코드 제안 범위, 라이선스 필터링 제어 |
| **사용량 분석** | 팀별 Copilot 사용 현황 대시보드 |
| **SSO/SAML** | 기업 인증 시스템 통합 |
| **IP 인덤니티** | 지적재산권 보호 |

### Business vs Enterprise

| 기능 | Business ($19) | Enterprise ($39) |
|------|---------------|------------------|
| 코드 완성 | O | O |
| Copilot Chat | O | O |
| 조직 정책 | O | O |
| Knowledge Bases | X | O |
| Fine-tuning | X | O |
| IP 인덤니티 | X | O |

> Enterprise 플랜은 조직의 코드베이스를 학습하여 더 정확한 제안을 제공합니다.`,contentEn:`### GitHub Copilot Enterprise

Copilot Enterprise is the premium plan of GitHub Copilot for large organizations.

### Enterprise Key Features

| Feature | Description |
|---------|-------------|
| **Knowledge Bases** | Learn from internal code for custom suggestions |
| **Fine-tuned Models** | Models optimized for org coding patterns |
| **Policy Management** | Control code suggestion scope, license filtering |
| **Usage Analytics** | Team-level Copilot usage dashboard |
| **SSO/SAML** | Enterprise authentication integration |
| **IP Indemnity** | Intellectual property protection |

### Business vs Enterprise

| Feature | Business ($19) | Enterprise ($39) |
|---------|---------------|------------------|
| Code Completion | O | O |
| Copilot Chat | O | O |
| Org Policies | O | O |
| Knowledge Bases | X | O |
| Fine-tuning | X | O |
| IP Indemnity | X | O |

> The Enterprise plan learns from your organization's codebase for more accurate suggestions.`}]},c=[h];function y(){const{language:p}=v(),s=p==="ko",[o,r]=j.useState(0),a=c[o],u={code({inline:t,className:i,children:n,...g}){const l=/language-(\w+)/.exec(i||"");return!t&&l?e.jsx(d,{code:String(n).replace(/\n$/,""),language:l[1]}):!t&&!l&&String(n).includes(`
`)?e.jsx(d,{code:String(n).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...g,children:n})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(C,{type:"tip",children:t})},a({href:t,children:i,...n}){return t!=null&&t.startsWith("/")?e.jsx("a",{href:t,...n,children:i}):e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",...n,children:i})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(E,{title:"Copilot Enterprise",path:"/copilot-enterprise"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:s?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:c.map((t,i)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${i===o?"active":""}`,onClick:()=>r(i),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`})," ",s?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:s?a.title:a.titleEn})}),a.sections.map((t,i)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:s?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(m,{remarkPlugins:[x],components:u,children:s?t.content:t.contentEn})})]},i)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:o===0,onClick:()=>r(o-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",s?"이전":"Previous"]}),e.jsxs("button",{disabled:o===c.length-1,onClick:()=>r(o+1),children:[s?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{y as default};
