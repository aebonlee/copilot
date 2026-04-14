import{j as e,M as h,r as g}from"./markdown-CFpoqxyr.js";import{b as f}from"./vendor-D7XqJCDT.js";import{u as C}from"./index-ZkR4MYEP.js";import{S as y}from"./SEOHead-CWVpO3MN.js";import{T as S,C as m}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const T={id:"teams-overview",icon:"fa-users-rectangle",title:"Teams Copilot",titleEn:"Teams Copilot",sections:[{title:"Teams Copilot이란?",titleEn:"What is Teams Copilot?",content:`Teams Copilot은 Microsoft Teams에 통합된 AI 비서로, 회의, 채팅, 채널 활동을 지능적으로 지원합니다. 회의 내용을 실시간으로 요약하고, 놓친 채팅을 정리하며, 팀 협업을 한 단계 끌어올립니다.

### 핵심 기능 개요

| 기능 영역 | 주요 기능 | 설명 |
|-----------|----------|------|
| 회의 | 실시간 요약 | 회의 중 실시간으로 핵심 내용 요약 |
| 회의 | 회의록 생성 | 회의 종료 후 자동 회의록 생성 |
| 회의 | 액션 아이템 추출 | 후속 조치 항목 자동 식별 및 할당 |
| 채팅 | 채팅 요약 | 긴 채팅 대화를 핵심 내용으로 요약 |
| 채팅 | 답변 초안 | 채팅 맥락을 파악하여 답변 초안 작성 |
| 채널 | 하이라이트 | 채널의 주요 토론 내용 요약 |
| 채널 | 파일 검색 | 공유된 파일 빠르게 검색 및 요약 |
| 전체 | Copilot 채팅 | 자연어로 Teams 내 정보 검색 및 질문 |

### 사용 요구사항

Teams Copilot을 사용하기 위해서는 다음 조건이 필요합니다:

- **라이선스**: Microsoft 365 Copilot 라이선스 ($30/사용자/월)
- **Microsoft 365 기본 라이선스**: E3, E5, Business Standard, Business Premium 중 하나
- **Teams 라이선스**: Microsoft Teams 포함된 구독
- **녹음/전사**: 회의 Copilot 사용 시 Teams 회의 녹음 및 전사(transcription) 기능이 활성화되어야 합니다
- **관리자 설정**: IT 관리자가 조직 수준에서 Copilot을 활성화해야 합니다
- **지원 플랫폼**: Windows, macOS, Web, iOS, Android

### 지원 언어

Teams Copilot은 회의 전사 및 요약에서 다국어를 지원합니다:

| 언어 | 전사(Transcription) | Copilot 요약 | 실시간 번역 |
|------|---------------------|-------------|------------|
| 영어 | 지원 | 지원 | 지원 |
| 한국어 | 지원 | 지원 | 지원 |
| 일본어 | 지원 | 지원 | 지원 |
| 중국어 | 지원 | 지원 | 지원 |
| 스페인어 | 지원 | 지원 | 지원 |
| 프랑스어 | 지원 | 지원 | 지원 |
| 독일어 | 지원 | 지원 | 지원 |

> Teams Copilot의 회의 기능을 사용하려면 반드시 회의 녹음(Recording)과 전사(Transcription)가 활성화되어 있어야 합니다. IT 관리자에게 이 설정이 켜져 있는지 확인하세요.`,contentEn:`Teams Copilot is an AI assistant integrated into Microsoft Teams that intelligently supports meetings, chats, and channel activities. It summarizes meeting content in real-time, organizes missed chats, and elevates team collaboration to the next level.

### Feature Overview

| Feature Area | Key Function | Description |
|-------------|-------------|-------------|
| Meetings | Real-time Summary | Summarize key content during meetings in real-time |
| Meetings | Meeting Notes | Auto-generate meeting notes after meeting ends |
| Meetings | Action Items | Auto-identify and assign follow-up action items |
| Chat | Chat Summary | Summarize long chat conversations to key points |
| Chat | Draft Replies | Create reply drafts understanding chat context |
| Channels | Highlights | Summarize key channel discussions |
| Channels | File Search | Quickly search and summarize shared files |
| All | Copilot Chat | Search and query Teams information in natural language |

### Requirements

To use Teams Copilot, the following conditions must be met:

- **License**: Microsoft 365 Copilot license ($30/user/month)
- **Base Microsoft 365 License**: One of E3, E5, Business Standard, or Business Premium
- **Teams License**: Subscription that includes Microsoft Teams
- **Recording/Transcription**: Meeting recording and transcription must be enabled for meeting Copilot
- **Admin Settings**: IT admin must enable Copilot at the organization level
- **Supported Platforms**: Windows, macOS, Web, iOS, Android

### Language Support

Teams Copilot supports multiple languages for meeting transcription and summarization:

| Language | Transcription | Copilot Summary | Real-time Translation |
|----------|--------------|-----------------|----------------------|
| English | Supported | Supported | Supported |
| Korean | Supported | Supported | Supported |
| Japanese | Supported | Supported | Supported |
| Chinese | Supported | Supported | Supported |
| Spanish | Supported | Supported | Supported |
| French | Supported | Supported | Supported |
| German | Supported | Supported | Supported |

> To use Teams Copilot's meeting features, meeting Recording and Transcription must be enabled. Check with your IT admin to confirm these settings are turned on.`},{title:"회의에서의 Copilot",titleEn:"Copilot in Meetings",content:`Teams 회의에서의 Copilot은 회의 생산성을 극대화하는 핵심 도구입니다. 회의 중 실시간으로 내용을 요약하고, 종료 후에는 회의록과 액션 아이템을 자동으로 생성합니다.

### 회의 중 사용 가능한 기능

| 기능 | 프롬프트 예시 | 결과 |
|------|-------------|------|
| 실시간 요약 | "지금까지 논의된 내용을 요약해줘" | 현재까지의 핵심 논의 사항 정리 |
| 특정 주제 추적 | "예산에 대해 어떤 이야기가 나왔어?" | 특정 주제 관련 발언 추출 |
| 의견 차이 파악 | "합의되지 않은 사항이 있어?" | 참석자 간 의견 불일치 식별 |
| 질문 정리 | "아직 답변되지 않은 질문을 정리해줘" | 미해결 질문 목록 생성 |
| 감정 분석 | "이 주제에 대한 참석자들의 반응은?" | 참석자 반응 및 감정 분석 |

### 회의 후 사용 가능한 기능

**회의록 자동 생성:**
- 회의 전체 내용을 구조화된 회의록으로 정리
- 주제별로 그룹화하여 읽기 쉽게 구성
- 각 발언자의 주요 발언 포함

**액션 아이템 추출:**
- 회의에서 언급된 후속 조치 자동 식별
- 담당자와 마감일을 가능한 범위에서 매핑
- Teams 작업(Tasks)으로 직접 변환 가능

**후속 이메일 생성:**
- 회의 요약을 기반으로 후속 이메일 초안 자동 작성
- 참석자/미참석자에게 각각 다른 형식으로 제공

### 실전 활용 시나리오

**시나리오 1: 늦게 참석한 경우**
- "내가 참석하기 전에 어떤 이야기가 나왔어?" 라고 질문하면 놓친 내용을 즉시 파악

**시나리오 2: 의사결정 추적**
- "오늘 회의에서 결정된 사항을 정리해줘" 라고 요청하면 모든 결정 사항을 목록화

**시나리오 3: 후속 조치 관리**
- "각 팀원에게 할당된 작업을 정리해줘" 라고 요청하면 담당자별 액션 아이템 정리

**시나리오 4: 회의 효율성 분석**
- "이 회의에서 가장 많이 논의된 주제는?" 라고 질문하면 시간 배분 분석

### 회의 Copilot 설정 체크리스트

- [ ] Teams 회의 녹음 기능 활성화
- [ ] 전사(Transcription) 기능 활성화
- [ ] Copilot 라이선스 할당 확인
- [ ] 회의 시작 시 녹음 버튼 클릭
- [ ] Copilot 패널 열기 (회의 도구모음에서 Copilot 아이콘 클릭)

> 회의 Copilot은 녹음이 시작된 이후의 내용만 분석할 수 있습니다. 회의 시작과 동시에 녹음을 시작하는 것이 중요합니다. 또한, 회의 녹음에 대한 참석자 동의를 반드시 구하세요.`,contentEn:`Copilot in Teams meetings is the essential tool for maximizing meeting productivity. It summarizes content in real-time during meetings, and automatically generates meeting notes and action items after the meeting ends.

### Features Available During Meetings

| Feature | Prompt Example | Result |
|---------|---------------|--------|
| Real-time Summary | "Summarize what's been discussed so far" | Organized key discussion points to date |
| Topic Tracking | "What was said about the budget?" | Extract statements about a specific topic |
| Disagreement Detection | "Are there any unresolved disagreements?" | Identify opinion differences among attendees |
| Question Tracking | "List questions that haven't been answered yet" | Generate a list of unresolved questions |
| Sentiment Analysis | "How are attendees reacting to this topic?" | Analyze attendee reactions and sentiment |

### Features Available After Meetings

**Auto-Generated Meeting Notes:**
- Organize entire meeting content into structured notes
- Group by topic for easy reading
- Include key statements from each speaker

**Action Item Extraction:**
- Auto-identify follow-up actions mentioned during the meeting
- Map responsible parties and deadlines where possible
- Can be directly converted to Teams Tasks

**Follow-up Email Generation:**
- Auto-draft follow-up emails based on meeting summary
- Provide different formats for attendees vs. non-attendees

### Practical Use Scenarios

**Scenario 1: Joining Late**
- Ask "What was discussed before I joined?" to immediately catch up on missed content

**Scenario 2: Decision Tracking**
- Request "List all decisions made in today's meeting" to get all decisions organized

**Scenario 3: Follow-up Management**
- Request "Organize tasks assigned to each team member" for action items by person

**Scenario 4: Meeting Efficiency Analysis**
- Ask "What was the most discussed topic in this meeting?" for time allocation analysis

### Meeting Copilot Setup Checklist

- [ ] Enable Teams meeting recording
- [ ] Enable Transcription
- [ ] Confirm Copilot license assignment
- [ ] Click the record button when meeting starts
- [ ] Open Copilot panel (click Copilot icon in meeting toolbar)

> Meeting Copilot can only analyze content after recording has started. It's critical to start recording at the beginning of the meeting. Also, always obtain attendee consent for meeting recording.`},{title:"채팅에서의 Copilot",titleEn:"Copilot in Chat",content:`Teams 채팅에서의 Copilot은 대화의 흐름을 놓치지 않도록 도와줍니다. 긴 채팅 스레드를 빠르게 요약하고, 핵심 포인트를 추출하며, 적절한 답변을 작성하는 데 도움을 줍니다.

### 주요 기능

| 기능 | 설명 | 시간 절감 |
|------|------|----------|
| 채팅 요약 | 특정 기간의 채팅 내용을 요약 | 수십 개 메시지 → 핵심 요약 |
| 핵심 포인트 | 중요한 결정사항 및 합의 내용 추출 | 빠른 의사결정 파악 |
| 미확인 메시지 | 읽지 않은 메시지 정리 및 요약 | 복귀 후 빠른 업무 파악 |
| 답변 초안 | 채팅 맥락에 맞는 답변 초안 작성 | 답변 작성 시간 단축 |
| 정보 검색 | 과거 채팅에서 특정 정보 검색 | 스크롤 없이 빠른 검색 |
| 감정 분석 | 대화 톤 및 분위기 파악 | 팀 상태 모니터링 |

### 실전 프롬프트 예시

**채팅 요약:**
- "오늘 이 채팅에서 논의된 내용을 요약해줘"
- "지난 7일간의 대화를 핵심 포인트로 정리해줘"
- "이 채팅에서 결정된 사항들을 정리해줘"
- "내가 마지막으로 확인한 이후의 대화를 요약해줘"

**정보 검색:**
- "지난 주에 공유된 링크를 모아줘"
- "프로젝트 마감일에 대해 언급된 내용이 있어?"
- "김팀장님이 말씀하신 예산 관련 내용을 찾아줘"
- "이 채팅에서 공유된 파일 목록을 보여줘"

**답변 작성:**
- "이 질문에 긍정적인 톤으로 답변을 작성해줘"
- "정중하게 거절하는 답변을 작성해줘"
- "추가 정보를 요청하는 답변을 작성해줘"

### 채팅 유형별 Copilot 활용

| 채팅 유형 | 추천 활용법 | 프롬프트 예시 |
|-----------|-----------|-------------|
| 1:1 채팅 | 대화 요약, 답변 초안 | "이 대화의 핵심 요청사항을 정리해줘" |
| 그룹 채팅 | 핵심 결정 추출, 미확인 메시지 요약 | "그룹에서 합의된 내용을 정리해줘" |
| 회의 채팅 | 회의 중 공유된 정보 정리 | "회의 중 공유된 링크와 파일을 정리해줘" |

### 채팅 Copilot 팁

1. **기간 지정**: "지난 3일간" 또는 "이번 주" 같은 기간을 지정하면 더 정확한 요약을 받을 수 있습니다
2. **발언자 지정**: "홍길동님이 말한 내용" 처럼 특정 발언자를 지정할 수 있습니다
3. **주제 필터링**: "예산에 관한 대화만 요약해줘" 처럼 특정 주제로 필터링할 수 있습니다
4. **연속 질문**: 첫 요약 후 "더 자세히 설명해줘" 같은 후속 질문이 가능합니다

> 채팅 Copilot은 최근 30일 이내의 채팅 내용만 분석할 수 있습니다. 더 오래된 내용을 찾으려면 Teams 검색 기능을 활용하세요.`,contentEn:`Copilot in Teams chat helps you stay on top of conversations. It quickly summarizes long chat threads, extracts key points, and helps compose appropriate replies.

### Key Features

| Feature | Description | Time Savings |
|---------|-------------|-------------|
| Chat Summary | Summarize chat content for a specific period | Dozens of messages → Key summary |
| Key Points | Extract important decisions and agreements | Quick decision identification |
| Unread Messages | Organize and summarize unread messages | Quick catch-up after being away |
| Draft Replies | Create reply drafts matching chat context | Reduces reply composition time |
| Information Search | Search for specific information in past chats | Quick search without scrolling |
| Sentiment Analysis | Understand conversation tone and mood | Team status monitoring |

### Practical Prompt Examples

**Chat Summarization:**
- "Summarize what was discussed in this chat today"
- "Organize the key points from the last 7 days of conversation"
- "List all decisions made in this chat"
- "Summarize the conversation since I last checked"

**Information Search:**
- "Collect all links shared last week"
- "Was there any mention of the project deadline?"
- "Find what the team lead said about the budget"
- "Show me the list of files shared in this chat"

**Reply Composition:**
- "Draft a positive-toned reply to this question"
- "Write a polite decline response"
- "Draft a reply requesting additional information"

### Copilot Usage by Chat Type

| Chat Type | Recommended Usage | Prompt Example |
|-----------|------------------|----------------|
| 1:1 Chat | Conversation summary, reply drafts | "Organize the key requests from this conversation" |
| Group Chat | Key decision extraction, unread summary | "List what the group has agreed upon" |
| Meeting Chat | Organize info shared during meeting | "Organize links and files shared during the meeting" |

### Chat Copilot Tips

1. **Specify Time Range**: Adding "last 3 days" or "this week" provides more accurate summaries
2. **Specify Speaker**: You can target specific speakers like "what John said"
3. **Topic Filtering**: Filter by topic such as "summarize only budget-related conversations"
4. **Follow-up Questions**: After initial summary, ask follow-ups like "explain in more detail"

> Chat Copilot can only analyze chat content from the last 30 days. Use the Teams search function for older content.`},{title:"채널과 협업",titleEn:"Channels & Collaboration",content:`Teams 채널에서의 Copilot은 팀 전체의 협업을 강화합니다. 채널의 주요 활동을 요약하고, 문서 협업을 지원하며, 작업을 효율적으로 관리할 수 있게 돕습니다.

### 채널 하이라이트

채널에 쌓인 대화를 빠르게 파악할 수 있습니다:

| 기능 | 설명 | 프롬프트 예시 |
|------|------|-------------|
| 채널 요약 | 특정 기간의 채널 활동 요약 | "이번 주 채널의 주요 논의를 요약해줘" |
| 핫토픽 | 가장 활발한 토론 주제 식별 | "가장 많은 반응을 받은 게시물은?" |
| 결정 추적 | 채널에서 합의된 사항 추출 | "이 채널에서 결정된 사항을 정리해줘" |
| 공지 정리 | 중요 공지사항만 필터링 | "최근 공지사항을 정리해줘" |
| 멘션 추적 | 나를 멘션한 메시지 정리 | "나를 태그한 메시지를 보여줘" |

### 문서 협업

Teams 채널 내에서 문서 공동 작업 시 Copilot을 활용할 수 있습니다:

- **실시간 공동 편집**: Word, Excel, PowerPoint 문서를 Teams 내에서 공동 편집하면서 Copilot 지원을 받을 수 있습니다
- **파일 요약**: 채널에 공유된 파일의 내용을 빠르게 파악할 수 있습니다
- **버전 비교**: 문서의 변경 사항을 요약하여 어떤 내용이 수정되었는지 파악할 수 있습니다
- **댓글 정리**: 문서에 달린 댓글과 제안 사항을 정리해줍니다

### 작업 할당 및 관리

Copilot은 채널 대화에서 작업 관련 내용을 추출하고 관리하는 데 도움을 줍니다:

- **작업 식별**: "이 채널 대화에서 할당된 작업을 정리해줘"
- **마감일 추적**: "다음 주까지 완료해야 할 작업이 있어?"
- **진행 상태 확인**: "프로젝트 진행 상태에 대해 공유된 내용을 정리해줘"
- **Planner 연동**: 식별된 작업을 Microsoft Planner에 직접 추가 가능

### 파일 검색 및 활용

채널에서 공유된 파일을 효율적으로 찾고 활용할 수 있습니다:

| 검색 유형 | 프롬프트 예시 | 결과 |
|-----------|-------------|------|
| 파일명 검색 | "프로젝트 계획서 파일을 찾아줘" | 관련 파일 목록 |
| 내용 기반 검색 | "예산 관련 엑셀 파일이 있어?" | 내용으로 파일 검색 |
| 최근 파일 | "이번 주에 공유된 파일을 보여줘" | 최근 공유 파일 목록 |
| 파일 요약 | "이 보고서의 핵심 내용을 알려줘" | 파일 내용 요약 |

### 채널 Copilot 활용 베스트 프랙티스

1. **구조화된 채널 운영**: 채널을 주제별로 구분하면 Copilot이 더 정확한 요약을 제공합니다
2. **정기적 요약 확인**: 매일 또는 매주 채널 요약을 확인하여 중요한 정보를 놓치지 마세요
3. **태그 활용**: @멘션과 태그를 적극 활용하면 Copilot이 관련 내용을 더 잘 추적합니다
4. **파일 공유 규칙**: 파일에 명확한 이름을 붙이면 검색 정확도가 높아집니다
5. **후속 조치 명시**: "홍길동 님이 다음 주까지 보고서 작성" 처럼 담당자와 기한을 명시하면 액션 아이템 추출이 정확해집니다

> 채널 Copilot은 공개 채널과 비공개 채널 모두에서 동작합니다. 단, 사용자는 해당 채널에 접근 권한이 있어야 Copilot을 통해 내용을 확인할 수 있습니다. 보안 정책에 따라 권한이 없는 채널의 정보는 제공되지 않습니다.`,contentEn:`Copilot in Teams channels strengthens collaboration across the entire team. It summarizes key channel activity, supports document collaboration, and helps manage tasks efficiently.

### Channel Highlights

Quickly catch up on conversations accumulated in channels:

| Feature | Description | Prompt Example |
|---------|-------------|----------------|
| Channel Summary | Summarize channel activity for a specific period | "Summarize the key discussions in this channel this week" |
| Hot Topics | Identify most active discussion topics | "Which post got the most reactions?" |
| Decision Tracking | Extract agreements made in the channel | "List decisions made in this channel" |
| Announcements | Filter important announcements only | "Organize recent announcements" |
| Mention Tracking | Organize messages that mention you | "Show messages where I was tagged" |

### Document Collaboration

Leverage Copilot when co-authoring documents within Teams channels:

- **Real-time Co-editing**: Get Copilot assistance while co-editing Word, Excel, and PowerPoint documents within Teams
- **File Summarization**: Quickly understand the content of files shared in the channel
- **Version Comparison**: Summarize document changes to understand what was modified
- **Comment Organization**: Organize comments and suggestions on documents

### Task Assignment & Management

Copilot helps extract and manage task-related content from channel conversations:

- **Task Identification**: "Organize assigned tasks from this channel conversation"
- **Deadline Tracking**: "Are there tasks due by next week?"
- **Progress Check**: "Organize shared updates about project progress"
- **Planner Integration**: Identified tasks can be directly added to Microsoft Planner

### File Search & Utilization

Efficiently find and use files shared in channels:

| Search Type | Prompt Example | Result |
|------------|----------------|--------|
| File Name Search | "Find the project plan file" | Related file list |
| Content-based Search | "Is there an Excel file about budgets?" | Search files by content |
| Recent Files | "Show files shared this week" | Recent shared file list |
| File Summary | "Tell me the key points of this report" | File content summary |

### Channel Copilot Best Practices

1. **Structured Channel Organization**: Organizing channels by topic helps Copilot provide more accurate summaries
2. **Regular Summary Check**: Check channel summaries daily or weekly to avoid missing important information
3. **Use Tags**: Actively using @mentions and tags helps Copilot better track relevant content
4. **File Naming Conventions**: Clear file names improve search accuracy
5. **Explicit Follow-ups**: Stating "John to complete report by next week" with assignees and deadlines improves action item extraction accuracy

> Channel Copilot works in both public and private channels. However, users must have access to the channel to view content through Copilot. Information from channels you don't have permission to access will not be provided, in accordance with security policies.`}]},c=[T];function j(){const{language:d}=C(),n=d==="ko",[o,s]=f.useState(0),r=c[o],p={code({inline:t,className:i,children:a,...u}){const l=/language-(\w+)/.exec(i||"");return!t&&l?e.jsx(m,{code:String(a).replace(/\n$/,""),language:l[1]}):!t&&!l&&String(a).includes(`
`)?e.jsx(m,{code:String(a).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...u,children:a})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(S,{type:"tip",children:t})},a({href:t,children:i,...a}){return t&&t.startsWith("/")?e.jsx("a",{href:t,...a,children:i}):e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",...a,children:i})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(y,{title:"Teams Copilot",path:"/teams-copilot"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:n?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:c.map((t,i)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${i===o?"active":""}`,onClick:()=>s(i),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`})," ",n?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:n?r.title:r.titleEn})}),r.sections.map((t,i)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:n?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(h,{remarkPlugins:[g],components:p,children:n?t.content:t.contentEn})})]},i)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:o===0,onClick:()=>s(o-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",n?"이전":"Previous"]}),e.jsxs("button",{disabled:o===c.length-1,onClick:()=>s(o+1),children:[n?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{j as default};
