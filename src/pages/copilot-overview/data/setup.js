export default {
  id: 'setup',
  icon: 'fa-gear',
  title: '설치 & 설정',
  titleEn: 'Installation & Setup',
  sections: [
    {
      title: 'VS Code에서 설치하기',
      titleEn: 'Install in VS Code',
      content: `### 1단계: Extension 설치

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

> 설치 후 에디터에서 코드를 입력하면 회색 텍스트로 제안이 표시됩니다. **Tab**키로 수락하세요.`,
      contentEn: `### Step 1: Install Extension

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

> After installation, suggestions appear as gray text when you type code. Press **Tab** to accept.`,
    },
  ],
};
