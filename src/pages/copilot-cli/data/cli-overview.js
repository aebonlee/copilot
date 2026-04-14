export default {
  id: 'cli-overview',
  icon: 'fa-terminal',
  title: 'CLI 개요',
  titleEn: 'CLI Overview',
  sections: [
    {
      title: 'Copilot CLI란?',
      titleEn: 'What is Copilot CLI?',
      content: `### GitHub Copilot in the CLI

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

> Copilot CLI는 복잡한 명령어를 자연어로 쉽게 생성할 수 있게 해줍니다.`,
      contentEn: `### GitHub Copilot in the CLI

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

> Copilot CLI makes it easy to generate complex commands using natural language.`,
    },
  ],
};
