export default {
  id: 'overview',
  icon: 'fa-rocket',
  title: 'GitHub Copilot 소개',
  titleEn: 'Introduction to GitHub Copilot',
  sections: [
    {
      title: 'GitHub Copilot이란?',
      titleEn: 'What is GitHub Copilot?',
      content: `**GitHub Copilot**은 GitHub와 OpenAI가 공동 개발한 AI 기반 코딩 어시스턴트입니다.

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

> GitHub Copilot은 단순한 자동완성 도구가 아닌, AI 페어 프로그래머입니다.`,
      contentEn: `**GitHub Copilot** is an AI-powered coding assistant co-developed by GitHub and OpenAI.

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

> GitHub Copilot is not just an autocomplete tool — it's an AI pair programmer.`,
    },
    {
      title: '요금제 비교',
      titleEn: 'Pricing Plans',
      content: `### GitHub Copilot 요금제

| 플랜 | 가격 | 대상 |
|------|------|------|
| **Free** | 무료 | 월 2,000회 코드 완성 + 50회 Chat |
| **Pro** | $10/월 | 무제한 완성 + Chat + CLI |
| **Business** | $19/사용자/월 | 조직 관리 + 정책 제어 |
| **Enterprise** | $39/사용자/월 | 맞춤형 모델 + 보안 강화 |

> 학생과 오픈소스 기여자는 **무료**로 Pro 플랜을 이용할 수 있습니다.`,
      contentEn: `### GitHub Copilot Pricing Plans

| Plan | Price | Target |
|------|-------|--------|
| **Free** | Free | 2,000 completions + 50 Chats/month |
| **Pro** | $10/mo | Unlimited completions + Chat + CLI |
| **Business** | $19/user/mo | Org management + policy control |
| **Enterprise** | $39/user/mo | Custom models + enhanced security |

> Students and open-source contributors can use the **Pro plan for free**.`,
    },
  ],
};
