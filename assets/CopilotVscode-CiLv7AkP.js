import{j as e,M as m,r as x}from"./markdown-CFpoqxyr.js";import{b as j}from"./vendor-D7XqJCDT.js";import{u as f}from"./index-B57uzUC2.js";import{S as b}from"./SEOHead-CWVpO3MN.js";import{T as h,C as u}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const C={id:"basics",icon:"fa-play",title:"기본 사용법",titleEn:"Basic Usage",sections:[{title:"코드 완성 기초",titleEn:"Code Completion Basics",content:`### 인라인 코드 제안

GitHub Copilot은 커서 위치에서 실시간으로 코드를 제안합니다.

\`\`\`python
# 함수 이름만 입력하면 Copilot이 본문을 제안합니다
def calculate_fibonacci(n):
    # Copilot 제안: ← 자동으로 구현 제안
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)
\`\`\`

### 제안 수락/거부

| 단축키 | 동작 |
|--------|------|
| **Tab** | 제안 수락 |
| **Esc** | 제안 거부 |
| **Alt+]** | 다음 제안 보기 |
| **Alt+[** | 이전 제안 보기 |
| **Ctrl+Enter** | 10개 제안 패널 열기 |

### 주석으로 코드 생성

\`\`\`javascript
// 배열에서 중복 제거하고 정렬하는 함수
function uniqueSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);  // ← Copilot 제안
}

// API에서 사용자 데이터 가져오기
async function fetchUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);  // ← Copilot 제안
  return response.json();
}
\`\`\`

> 주석을 더 구체적으로 작성할수록 Copilot의 제안 품질이 높아집니다.`,contentEn:`### Inline Code Suggestions

GitHub Copilot suggests code in real-time at your cursor position.

\`\`\`python
# Just type the function name and Copilot suggests the body
def calculate_fibonacci(n):
    # Copilot suggestion: ← auto-suggests implementation
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)
\`\`\`

### Accept/Reject Suggestions

| Shortcut | Action |
|----------|--------|
| **Tab** | Accept suggestion |
| **Esc** | Reject suggestion |
| **Alt+]** | Next suggestion |
| **Alt+[** | Previous suggestion |
| **Ctrl+Enter** | Open 10 suggestions panel |

### Generate Code from Comments

\`\`\`javascript
// Function to remove duplicates and sort array
function uniqueSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);  // ← Copilot suggestion
}

// Fetch user data from API
async function fetchUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);  // ← Copilot suggestion
  return response.json();
}
\`\`\`

> The more specific your comments, the better Copilot's suggestions will be.`}]},l=[C];function I(){const{language:d}=f(),n=d==="ko",[o,a]=j.useState(0),c=l[o],g={code({inline:t,className:s,children:i,...p}){const r=/language-(\w+)/.exec(s||"");return!t&&r?e.jsx(u,{code:String(i).replace(/\n$/,""),language:r[1]}):!t&&!r&&String(i).includes(`
`)?e.jsx(u,{code:String(i).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...p,children:i})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(h,{type:"tip",children:t})},a({href:t,children:s,...i}){return t!=null&&t.startsWith("/")?e.jsx("a",{href:t,...i,children:s}):e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",...i,children:s})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(b,{title:"VS Code",path:"/copilot-vscode"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:n?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:l.map((t,s)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${s===o?"active":""}`,onClick:()=>a(s),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`})," ",n?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:n?c.title:c.titleEn})}),c.sections.map((t,s)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:n?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(m,{remarkPlugins:[x],components:g,children:n?t.content:t.contentEn})})]},s)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:o===0,onClick:()=>a(o-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",n?"이전":"Previous"]}),e.jsxs("button",{disabled:o===l.length-1,onClick:()=>a(o+1),children:[n?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{I as default};
