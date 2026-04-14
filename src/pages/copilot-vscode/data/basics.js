export default {
  id: 'basics',
  icon: 'fa-play',
  title: '기본 사용법',
  titleEn: 'Basic Usage',
  sections: [
    {
      title: '코드 완성 기초',
      titleEn: 'Code Completion Basics',
      content: `### 인라인 코드 제안

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

> 주석을 더 구체적으로 작성할수록 Copilot의 제안 품질이 높아집니다.`,
      contentEn: `### Inline Code Suggestions

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

> The more specific your comments, the better Copilot's suggestions will be.`,
    },
  ],
};
