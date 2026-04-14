import{j as e,M as p,r as h}from"./markdown-CFpoqxyr.js";import{b as x}from"./vendor-D7XqJCDT.js";import{u as C}from"./index-ZkR4MYEP.js";import{S as b}from"./SEOHead-CWVpO3MN.js";import{T as j,C as d}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const v={id:"cli-overview",icon:"fa-terminal",title:"CLI 개요",titleEn:"CLI Overview",sections:[{title:"Copilot CLI란?",titleEn:"What is Copilot CLI?",content:`### GitHub Copilot in the CLI

Copilot CLI는 터미널에서 자연어로 명령어를 생성하고 설명을 받을 수 있는 도구입니다.

### 설치

\`\`\`bash
# GitHub CLI 설치 (필수)
# Windows
winget install GitHub.cli

# macOS
brew install gh

# Copilot CLI 확장 설치
gh extension install github/gh-copilot
\`\`\`

### 주요 명령어

\`\`\`bash
# 명령어 제안 받기
gh copilot suggest "현재 디렉토리의 파일 크기순으로 정렬"

# 명령어 설명 받기
gh copilot explain "find . -name '*.log' -mtime +30 -delete"
\`\`\`

### 사용 예시

\`\`\`bash
# Git 관련 명령어
gh copilot suggest "최근 커밋 3개를 하나로 합치기"
# → git rebase -i HEAD~3

# Docker 관련
gh copilot suggest "실행 중인 모든 컨테이너 중지하고 삭제"
# → docker stop $(docker ps -q) && docker rm $(docker ps -a -q)

# 파일 작업
gh copilot suggest "src 디렉토리에서 TODO 주석 찾기"
# → grep -rn "TODO" src/
\`\`\`

> Copilot CLI는 복잡한 명령어를 자연어로 쉽게 생성할 수 있게 해줍니다.`,contentEn:`### GitHub Copilot in the CLI

Copilot CLI is a tool that lets you generate commands and get explanations using natural language in the terminal.

### Installation

\`\`\`bash
# Install GitHub CLI (required)
# Windows
winget install GitHub.cli

# macOS
brew install gh

# Install Copilot CLI extension
gh extension install github/gh-copilot
\`\`\`

### Key Commands

\`\`\`bash
# Get command suggestions
gh copilot suggest "sort files in current directory by size"

# Get command explanations
gh copilot explain "find . -name '*.log' -mtime +30 -delete"
\`\`\`

### Usage Examples

\`\`\`bash
# Git-related commands
gh copilot suggest "squash last 3 commits into one"
# → git rebase -i HEAD~3

# Docker-related
gh copilot suggest "stop and remove all running containers"
# → docker stop $(docker ps -q) && docker rm $(docker ps -a -q)

# File operations
gh copilot suggest "find TODO comments in src directory"
# → grep -rn "TODO" src/
\`\`\`

> Copilot CLI makes it easy to generate complex commands using natural language.`}]},r=[v];function w(){const{language:g}=C(),s=g==="ko",[n,a]=x.useState(0),l=r[n],m={code({inline:t,className:i,children:o,...u}){const c=/language-(\w+)/.exec(i||"");return!t&&c?e.jsx(d,{code:String(o).replace(/\n$/,""),language:c[1]}):!t&&!c&&String(o).includes(`
`)?e.jsx(d,{code:String(o).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...u,children:o})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(j,{type:"tip",children:t})},a({href:t,children:i,...o}){return t!=null&&t.startsWith("/")?e.jsx("a",{href:t,...o,children:i}):e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",...o,children:i})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(b,{title:"Copilot CLI",path:"/copilot-cli"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:s?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:r.map((t,i)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${i===n?"active":""}`,onClick:()=>a(i),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`})," ",s?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:s?l.title:l.titleEn})}),l.sections.map((t,i)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:s?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(p,{remarkPlugins:[h],components:m,children:s?t.content:t.contentEn})})]},i)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:n===0,onClick:()=>a(n-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",s?"이전":"Previous"]}),e.jsxs("button",{disabled:n===r.length-1,onClick:()=>a(n+1),children:[s?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{w as default};
