import{j as t,M as C,r as g}from"./markdown-CFpoqxyr.js";import{b}from"./vendor-D7XqJCDT.js";import{u as x}from"./index-CQw3mLRZ.js";import{S as h}from"./SEOHead-BorQ4Gq5.js";import{T as v,C as d}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const S={id:"overview",icon:"fa-rocket",title:"GitHub Copilot 소개",titleEn:"Introduction to GitHub Copilot",sections:[{title:"GitHub Copilot이란?",titleEn:"What is GitHub Copilot?",content:`**GitHub Copilot**은 GitHub와 OpenAI가 공동 개발한 AI 기반 코딩 어시스턴트입니다.

코드 에디터(VS Code, JetBrains 등)에 통합되어 실시간으로 코드를 제안하고, 자연어 설명을 코드로 변환하며, 개발 생산성을 획기적으로 향상시킵니다.

### 핵심 기능

| 기능 | 설명 |
|------|------|
| **코드 자동 완성** | 컨텍스트 기반 인라인 코드 제안 |
| **Copilot Chat** | 대화형 AI 코딩 어시스턴트 |
| **Copilot CLI** | 터미널 명령어 생성 도우미 |
| **Copilot Workspace** | AI 기반 개발 환경 |
| **Extensions** | 확장 기능 개발 플랫폼 |

### 지원 언어

Python, JavaScript, TypeScript, Java, C#, C++, Go, Ruby, Rust, PHP, Swift, Kotlin 등 **거의 모든 프로그래밍 언어**를 지원합니다.

> GitHub Copilot은 단순한 자동완성 도구가 아닌, AI 페어 프로그래머입니다.`,contentEn:`**GitHub Copilot** is an AI-powered coding assistant co-developed by GitHub and OpenAI.

Integrated into code editors (VS Code, JetBrains, etc.), it provides real-time code suggestions, converts natural language descriptions into code, and dramatically improves development productivity.

### Core Features

| Feature | Description |
|---------|-------------|
| **Code Completion** | Context-based inline code suggestions |
| **Copilot Chat** | Conversational AI coding assistant |
| **Copilot CLI** | Terminal command generation helper |
| **Copilot Workspace** | AI-powered development environment |
| **Extensions** | Extension development platform |

### Supported Languages

Supports **virtually all programming languages** including Python, JavaScript, TypeScript, Java, C#, C++, Go, Ruby, Rust, PHP, Swift, Kotlin, and more.

> GitHub Copilot is not just an autocomplete tool — it's an AI pair programmer.`},{title:"요금제 비교",titleEn:"Pricing Plans",content:`### GitHub Copilot 요금제

| 플랜 | 가격 | 대상 |
|------|------|------|
| **Free** | 무료 | 월 2,000회 코드 완성 + 50회 Chat |
| **Pro** | $10/월 | 무제한 완성 + Chat + CLI |
| **Business** | $19/사용자/월 | 조직 관리 + 정책 제어 |
| **Enterprise** | $39/사용자/월 | 맞춤형 모델 + 보안 강화 |

> 학생과 오픈소스 기여자는 **무료**로 Pro 플랜을 이용할 수 있습니다.`,contentEn:`### GitHub Copilot Pricing Plans

| Plan | Price | Target |
|------|-------|--------|
| **Free** | Free | 2,000 completions + 50 Chats/month |
| **Pro** | $10/mo | Unlimited completions + Chat + CLI |
| **Business** | $19/user/mo | Org management + policy control |
| **Enterprise** | $39/user/mo | Custom models + enhanced security |

> Students and open-source contributors can use the **Pro plan for free**.`}]},j={id:"setup",icon:"fa-gear",title:"설치 & 설정",titleEn:"Installation & Setup",sections:[{title:"VS Code에서 설치하기",titleEn:"Install in VS Code",content:`### 1단계: Extension 설치

VS Code에서 GitHub Copilot을 설치하는 방법:

\`\`\`bash
# VS Code Extensions 마켓플레이스에서 설치
1. VS Code 실행
2. Extensions (Ctrl+Shift+X) 열기
3. "GitHub Copilot" 검색
4. "Install" 클릭
5. "GitHub Copilot Chat"도 함께 설치
\`\`\`

### 2단계: GitHub 계정 연동

1. VS Code 하단의 **Copilot 아이콘** 클릭
2. **"Sign in to GitHub"** 선택
3. 브라우저에서 GitHub 인증 완료
4. VS Code로 돌아와 활성화 확인

### 3단계: 설정 확인

\`\`\`json
{
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "scminput": false
  },
  "github.copilot.editor.enableAutoCompletions": true
}
\`\`\`

> 설치 후 에디터에서 코드를 입력하면 회색 텍스트로 제안이 표시됩니다. **Tab**키로 수락하세요.`,contentEn:`### Step 1: Install Extension

How to install GitHub Copilot in VS Code:

\`\`\`bash
# Install from VS Code Extensions Marketplace
1. Open VS Code
2. Open Extensions (Ctrl+Shift+X)
3. Search "GitHub Copilot"
4. Click "Install"
5. Also install "GitHub Copilot Chat"
\`\`\`

### Step 2: Connect GitHub Account

1. Click the **Copilot icon** at the bottom of VS Code
2. Select **"Sign in to GitHub"**
3. Complete GitHub authentication in browser
4. Return to VS Code and verify activation

### Step 3: Verify Settings

\`\`\`json
{
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "scminput": false
  },
  "github.copilot.editor.enableAutoCompletions": true
}
\`\`\`

> After installation, suggestions appear as gray text when you type code. Press **Tab** to accept.`}]},c=[S,j];function N(){const{language:u}=x(),i=u==="ko",[s,a]=b.useState(0),l=c[s],p={code({inline:e,className:o,children:n,...m}){const r=/language-(\w+)/.exec(o||"");return!e&&r?t.jsx(d,{code:String(n).replace(/\n$/,""),language:r[1]}):!e&&!r&&String(n).includes(`
`)?t.jsx(d,{code:String(n).replace(/\n$/,""),language:""}):t.jsx("code",{className:"inline-code",...m,children:n})},table({children:e}){return t.jsx("div",{className:"table-responsive",children:t.jsx("table",{children:e})})},blockquote({children:e}){return t.jsx(v,{type:"tip",children:e})},a({href:e,children:o,...n}){return e&&e.startsWith("/")?t.jsx("a",{href:e,...n,children:o}):t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",...n,children:o})}};return t.jsxs("div",{className:"guide-page",children:[t.jsx(h,{title:i?"Copilot 개요":"Copilot Overview",path:"/copilot-overview"}),t.jsxs("div",{className:"guide-layout",children:[t.jsxs("aside",{className:"guide-sidebar",children:[t.jsx("div",{className:"guide-sidebar-title",children:i?"목차":"Contents"}),t.jsx("ul",{className:"guide-nav",children:c.map((e,o)=>t.jsx("li",{className:"guide-nav-item",children:t.jsxs("button",{className:`guide-nav-link ${o===s?"active":""}`,onClick:()=>a(o),children:[t.jsx("i",{className:`fa-solid ${e.icon} nav-icon`})," ",i?e.title:e.titleEn]})},e.id))})]}),t.jsxs("div",{className:"guide-content",children:[t.jsx("div",{className:"guide-content-header",children:t.jsx("h1",{children:i?l.title:l.titleEn})}),l.sections.map((e,o)=>t.jsxs("div",{className:"guide-section",children:[t.jsx("h2",{children:i?e.title:e.titleEn}),t.jsx("div",{className:"markdown-body",children:t.jsx(C,{remarkPlugins:[g],components:p,children:i?e.content:e.contentEn})})]},o)),t.jsxs("div",{className:"guide-section-nav",children:[t.jsxs("button",{disabled:s===0,onClick:()=>a(s-1),children:[t.jsx("i",{className:"fa-solid fa-chevron-left"})," ",i?"이전":"Previous"]}),t.jsxs("button",{disabled:s===c.length-1,onClick:()=>a(s+1),children:[i?"다음":"Next"," ",t.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{N as default};
