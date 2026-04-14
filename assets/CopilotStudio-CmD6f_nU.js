import{j as e,M as g,r as h}from"./markdown-CFpoqxyr.js";import{b as f}from"./vendor-D7XqJCDT.js";import{u as C}from"./index-DJAI8N3Z.js";import{S as v}from"./SEOHead-CWVpO3MN.js";import{T as S,C as d}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const P={id:"studio-overview",icon:"fa-wand-magic-sparkles",title:"Copilot Studio",titleEn:"Copilot Studio",sections:[{title:"Copilot Studio란?",titleEn:"What is Copilot Studio?",content:`**Microsoft Copilot Studio**는 Power Virtual Agents의 진화형으로, 조직 맞춤형 AI Copilot을 **로우코드(Low-Code)** 방식으로 빌드할 수 있는 플랫폼입니다. 코딩 경험이 없어도 자연어 기반의 대화형 AI 에이전트를 만들고 배포할 수 있습니다.

### 핵심 특징

- **로우코드 빌더**: 드래그 앤 드롭 방식의 직관적인 대화 흐름 설계
- **생성형 AI 통합**: GPT 모델 기반의 자연어 이해 및 생성
- **다채널 배포**: Teams, 웹사이트, Slack, Facebook 등 다양한 채널에 배포
- **지식 소스 연결**: SharePoint, 웹사이트, 파일 업로드 등 다양한 데이터 연동
- **Power Platform 통합**: Power Automate, Dataverse 등과 원활한 연동

### 기능 개요

| 기능 | 설명 | 활용 사례 |
|---|---|---|
| **주제(Topics)** | 대화 트리거 및 흐름 정의 | FAQ 자동 응답, 주문 조회 |
| **생성형 응답** | AI 기반 자연어 응답 생성 | 복잡한 질문 대응 |
| **지식 소스** | 외부 데이터 연결 및 검색 | 사내 문서 검색, 정책 안내 |
| **플러그인** | 외부 서비스 API 연동 | CRM 조회, 주문 처리 |
| **분석 대시보드** | 사용 현황 및 성과 모니터링 | 성과 측정, 개선 포인트 파악 |

### 요금제

| 플랜 | 가격 | 포함 내용 |
|---|---|---|
| **Copilot Studio** | 메시지당 과금 (per message) | 커스텀 Copilot 빌드, 다채널 배포 |
| **Microsoft 365 포함** | M365 라이선스에 포함 | Teams 내 기본 Copilot 기능 |
| **Power Virtual Agents 레거시** | 세션당 과금 | 기존 PVA 사용자용 (마이그레이션 권장) |

### 주요 사용 시나리오

1. **고객 지원 봇**: 24/7 자동 고객 응대, FAQ 처리, 티켓 생성
2. **HR 어시스턴트**: 휴가 신청, 급여 문의, 사내 정책 안내
3. **IT 헬프데스크**: 비밀번호 초기화, 소프트웨어 설치 가이드, 장애 접수
4. **영업 지원**: 제품 정보 제공, 견적 생성, CRM 데이터 조회
5. **교육 도우미**: 학습 콘텐츠 안내, 퀴즈 출제, 학습 진도 추적

> Copilot Studio는 copilotstudio.microsoft.com에서 무료 체험이 가능합니다. Microsoft 365 계정이 있다면 바로 시작할 수 있으며, 별도의 개발 환경 설정이 필요하지 않습니다.`,contentEn:`**Microsoft Copilot Studio** is the evolution of Power Virtual Agents, a platform that lets you build organization-specific AI Copilots using a **Low-Code** approach. You can create and deploy conversational AI agents based on natural language without any coding experience.

### Key Features

- **Low-Code Builder**: Intuitive drag-and-drop conversation flow design
- **Generative AI Integration**: Natural language understanding and generation based on GPT models
- **Multi-Channel Deployment**: Deploy to Teams, websites, Slack, Facebook, and more
- **Knowledge Source Connection**: Connect various data sources including SharePoint, websites, file uploads
- **Power Platform Integration**: Seamless integration with Power Automate, Dataverse, and more

### Feature Overview

| Feature | Description | Use Cases |
|---|---|---|
| **Topics** | Define conversation triggers and flows | FAQ auto-response, order lookup |
| **Generative Answers** | AI-based natural language response generation | Complex question handling |
| **Knowledge Sources** | External data connection and search | Internal document search, policy guidance |
| **Plugins** | External service API integration | CRM lookup, order processing |
| **Analytics Dashboard** | Usage and performance monitoring | Performance measurement, improvement points |

### Pricing

| Plan | Price | Includes |
|---|---|---|
| **Copilot Studio** | Per message pricing | Custom Copilot building, multi-channel deployment |
| **Microsoft 365 Included** | Included in M365 license | Basic Copilot features within Teams |
| **Power Virtual Agents Legacy** | Per session pricing | For existing PVA users (migration recommended) |

### Key Use Scenarios

1. **Customer Support Bot**: 24/7 automated customer service, FAQ handling, ticket creation
2. **HR Assistant**: Leave requests, payroll inquiries, internal policy guidance
3. **IT Helpdesk**: Password resets, software installation guides, incident reporting
4. **Sales Support**: Product information, quote generation, CRM data lookup
5. **Education Helper**: Learning content guidance, quizzes, learning progress tracking

> Copilot Studio offers a free trial at copilotstudio.microsoft.com. If you have a Microsoft 365 account, you can start immediately with no additional development environment setup required.`},{title:"커스텀 Copilot 만들기",titleEn:"Building Custom Copilots",content:`Copilot Studio에서 커스텀 Copilot을 만드는 과정은 **직관적이고 체계적**입니다. 주제(Topics) 설정부터 대화 흐름 디자인, 지식 소스 연결까지 단계별로 살펴봅니다.

### 1단계: 주제(Topics) 설정

주제는 Copilot이 반응할 **대화 트리거와 응답 흐름**을 정의합니다.

- **트리거 문구**: 사용자가 입력할 수 있는 다양한 표현 등록
- **시스템 주제**: 인사, 에러 처리, 폴백 등 기본 주제 자동 제공
- **커스텀 주제**: 비즈니스 요구에 맞는 맞춤 주제 생성

\`\`\`
# 주제 설정 예시: 주문 조회

트리거 문구:
- "주문 상태 확인"
- "내 주문은 어디에 있나요?"
- "배송 현황 알려줘"
- "주문번호 조회"

→ 주문번호 입력 요청
→ API로 주문 상태 조회
→ 결과 안내
\`\`\`

### 2단계: 대화 흐름 디자인

| 노드 유형 | 용도 | 예시 |
|---|---|---|
| **메시지** | 텍스트/이미지/카드 응답 | "안녕하세요! 무엇을 도와드릴까요?" |
| **질문** | 사용자 입력 수집 | "주문번호를 입력해주세요" |
| **조건** | 분기 처리 | 주문 상태에 따라 다른 응답 |
| **액션** | Power Automate 플로우 실행 | 주문 데이터 API 호출 |
| **주제 전환** | 다른 주제로 리다이렉트 | 환불 요청 → 환불 주제로 이동 |
| **종료** | 대화 종료 | "도움이 되셨다면 평가 부탁드립니다" |

### 3단계: 지식 소스 연결

지식 소스를 연결하면 Copilot이 **조직의 데이터를 기반으로 응답**합니다.

- **SharePoint 사이트**: 사내 문서, 위키, 정책 자료 연결
- **웹사이트 URL**: 공개 웹페이지 크롤링 및 인덱싱
- **파일 업로드**: PDF, Word, Excel, PowerPoint 파일 직접 업로드
- **Dataverse 테이블**: Power Platform 데이터베이스 연동
- **커스텀 데이터**: API를 통한 외부 데이터 소스 연결

### 4단계: 테스트 및 게시

1. **대화 테스트 패널**: 실시간으로 대화 흐름 시뮬레이션
2. **주제별 테스트**: 각 주제가 올바르게 트리거되는지 확인
3. **변수 추적**: 대화 중 변수 값이 올바르게 설정되는지 모니터링
4. **에러 시나리오**: 예외 상황에서의 폴백 응답 확인
5. **게시**: 검증 완료 후 원하는 채널에 배포

> 처음 Copilot을 만들 때는 3-5개의 핵심 주제부터 시작하세요. 사용자 피드백을 수집하며 점차 주제를 확장하는 것이 가장 효과적인 접근 방법입니다.`,contentEn:`Building a custom Copilot in Copilot Studio is an **intuitive and systematic** process. Let's walk through each step from setting up Topics to designing conversation flows and connecting knowledge sources.

### Step 1: Setting Up Topics

Topics define the **conversation triggers and response flows** that your Copilot will react to.

- **Trigger Phrases**: Register various expressions that users might input
- **System Topics**: Automatically provided defaults for greetings, error handling, fallback
- **Custom Topics**: Create custom topics tailored to business needs

\`\`\`
# Topic Setup Example: Order Lookup

Trigger Phrases:
- "Check order status"
- "Where is my order?"
- "Tell me the shipping status"
- "Order number lookup"

→ Request order number input
→ Query order status via API
→ Present results
\`\`\`

### Step 2: Designing Conversation Flows

| Node Type | Purpose | Example |
|---|---|---|
| **Message** | Text/image/card responses | "Hello! How can I help you?" |
| **Question** | Collect user input | "Please enter your order number" |
| **Condition** | Branch logic | Different responses based on order status |
| **Action** | Execute Power Automate flows | Call order data API |
| **Topic Redirect** | Redirect to another topic | Refund request → redirect to refund topic |
| **End** | End conversation | "If this was helpful, please rate us" |

### Step 3: Connecting Knowledge Sources

Connecting knowledge sources enables your Copilot to **respond based on organizational data**.

- **SharePoint Sites**: Connect internal documents, wikis, policy materials
- **Website URLs**: Crawl and index public web pages
- **File Uploads**: Upload PDF, Word, Excel, PowerPoint files directly
- **Dataverse Tables**: Integrate with Power Platform databases
- **Custom Data**: Connect external data sources via APIs

### Step 4: Testing & Publishing

1. **Conversation Test Panel**: Simulate conversation flows in real-time
2. **Per-Topic Testing**: Verify each topic triggers correctly
3. **Variable Tracking**: Monitor that variable values are set correctly during conversations
4. **Error Scenarios**: Verify fallback responses for edge cases
5. **Publishing**: Deploy to desired channels after verification

> When building your first Copilot, start with 3-5 core topics. The most effective approach is to collect user feedback and gradually expand topics over time.`},{title:"플러그인과 커넥터",titleEn:"Plugins & Connectors",content:`Copilot Studio의 **플러그인과 커넥터**를 활용하면 외부 시스템과 서비스를 연동하여 Copilot의 기능을 확장할 수 있습니다. Power Platform 생태계와의 통합이 핵심 강점입니다.

### Power Automate 연동

Power Automate 플로우를 Copilot에 연결하여 **복잡한 비즈니스 로직을 자동화**할 수 있습니다.

- **데이터 조회**: CRM, ERP 등 백엔드 시스템에서 데이터 가져오기
- **데이터 생성**: 새 레코드 생성, 주문 접수, 티켓 생성
- **알림 발송**: 이메일, Teams 메시지, SMS 알림 자동 발송
- **승인 워크플로우**: 휴가 신청, 구매 승인 등 결재 프로세스
- **파일 처리**: 문서 생성, 변환, 저장소 관리

### API 커넥터

| 커넥터 유형 | 설명 | 예시 |
|---|---|---|
| **표준 커넥터** | Microsoft 제공 기본 커넥터 (900+) | SharePoint, Outlook, SQL Server |
| **프리미엄 커넥터** | 고급 서비스 연동 | Salesforce, SAP, ServiceNow |
| **커스텀 커넥터** | OpenAPI 기반 직접 구축 | 사내 REST API, 서드파티 API |
| **온프레미스 게이트웨이** | 온프레미스 데이터 연결 | 사내 DB, 파일 서버 |

### Dataverse 통합

\`\`\`
# Dataverse 연동 시나리오

1. 고객 정보 조회
   - Copilot에서 고객명/번호 입력 받기
   - Dataverse 테이블에서 고객 레코드 검색
   - 고객 정보(연락처, 계약 상태, 이력) 표시

2. 서비스 요청 생성
   - 대화를 통해 요청 유형, 설명, 우선순위 수집
   - Dataverse에 새 서비스 요청 레코드 생성
   - 담당자에게 자동 알림 발송

3. 재고 확인
   - 제품명/코드로 재고 현황 조회
   - 실시간 재고 수량 및 위치 정보 표시
   - 재고 부족 시 발주 요청 트리거
\`\`\`

### SharePoint 연동

- **문서 라이브러리**: 파일 검색, 다운로드 링크 제공
- **리스트 데이터**: SharePoint 리스트 항목 조회 및 생성
- **사이트 페이지**: 사내 공지, 정책 문서 검색
- **권한 관리**: 사용자 권한에 따른 데이터 접근 제어
- **버전 관리**: 문서 버전 이력 조회

### Azure OpenAI 통합

1. **커스텀 프롬프트**: 비즈니스 맞춤형 AI 응답 생성
2. **RAG 패턴**: 자체 데이터 기반 검색 증강 생성
3. **멀티모달**: 이미지 분석, 문서 OCR 등 확장 기능
4. **파인 튜닝**: 도메인 특화 모델 연결
5. **컨텐츠 필터링**: 부적절한 콘텐츠 자동 필터링

### 커스텀 커넥터 구축

| 단계 | 작업 | 상세 |
|---|---|---|
| 1 | OpenAPI 정의 작성 | Swagger/OpenAPI 3.0 형식의 API 명세 |
| 2 | 인증 설정 | OAuth 2.0, API Key, Basic Auth 등 |
| 3 | 액션 정의 | 각 API 엔드포인트별 입출력 매핑 |
| 4 | 테스트 | 커넥터 연결 및 데이터 흐름 검증 |
| 5 | 배포 | 조직 내 공유 또는 공개 |

> 플러그인 개발 시 Microsoft의 AI Plugin 표준을 따르면 Copilot Studio뿐만 아니라 Microsoft 365 Copilot, ChatGPT 등 여러 플랫폼에서 재사용할 수 있습니다.`,contentEn:`By leveraging **plugins and connectors** in Copilot Studio, you can extend your Copilot's capabilities by integrating with external systems and services. Integration with the Power Platform ecosystem is a core strength.

### Power Automate Integration

Connect Power Automate flows to your Copilot to **automate complex business logic**.

- **Data Retrieval**: Fetch data from backend systems like CRM, ERP
- **Data Creation**: Create new records, process orders, generate tickets
- **Notification Sending**: Automatically send emails, Teams messages, SMS alerts
- **Approval Workflows**: Manage leave requests, purchase approvals, and other processes
- **File Processing**: Document generation, conversion, and storage management

### API Connectors

| Connector Type | Description | Examples |
|---|---|---|
| **Standard Connectors** | Microsoft-provided default connectors (900+) | SharePoint, Outlook, SQL Server |
| **Premium Connectors** | Advanced service integrations | Salesforce, SAP, ServiceNow |
| **Custom Connectors** | Build your own based on OpenAPI | Internal REST APIs, third-party APIs |
| **On-Premises Gateway** | Connect to on-premises data | Internal databases, file servers |

### Dataverse Integration

\`\`\`
# Dataverse Integration Scenarios

1. Customer Information Lookup
   - Receive customer name/number from Copilot
   - Search customer records in Dataverse table
   - Display customer info (contacts, contract status, history)

2. Service Request Creation
   - Collect request type, description, priority through conversation
   - Create new service request record in Dataverse
   - Send automatic notification to assigned staff

3. Inventory Check
   - Query inventory status by product name/code
   - Display real-time stock quantity and location
   - Trigger purchase order when stock is low
\`\`\`

### SharePoint Integration

- **Document Libraries**: File search, download link provisioning
- **List Data**: Query and create SharePoint list items
- **Site Pages**: Search internal announcements, policy documents
- **Permission Management**: Data access control based on user permissions
- **Version Control**: Document version history lookup

### Azure OpenAI Integration

1. **Custom Prompts**: Generate business-tailored AI responses
2. **RAG Pattern**: Retrieval Augmented Generation with proprietary data
3. **Multimodal**: Extended capabilities like image analysis, document OCR
4. **Fine-Tuning**: Connect domain-specific models
5. **Content Filtering**: Automatic inappropriate content filtering

### Building Custom Connectors

| Step | Task | Details |
|---|---|---|
| 1 | Write OpenAPI Definition | API spec in Swagger/OpenAPI 3.0 format |
| 2 | Configure Authentication | OAuth 2.0, API Key, Basic Auth, etc. |
| 3 | Define Actions | Input/output mapping for each API endpoint |
| 4 | Test | Verify connector connection and data flow |
| 5 | Deploy | Share within organization or publish publicly |

> When developing plugins, following Microsoft's AI Plugin standard allows reuse not only in Copilot Studio but also across platforms like Microsoft 365 Copilot and ChatGPT.`},{title:"배포 및 분석",titleEn:"Deployment & Analytics",content:`커스텀 Copilot을 완성한 후에는 **다양한 채널에 배포**하고, 분석 대시보드를 통해 성과를 모니터링하며 지속적으로 개선해야 합니다.

### Teams 배포

Microsoft Teams는 Copilot Studio의 **가장 자연스러운 배포 채널**입니다.

1. **앱으로 등록**: Teams 관리 센터에서 Copilot을 앱으로 등록
2. **채널 추가**: 특정 팀 채널에 봇으로 추가
3. **개인 채팅**: 1:1 대화로 사용 가능
4. **그룹 채팅**: @멘션으로 그룹 대화에서 호출
5. **탭 통합**: Teams 탭에 Copilot 인터페이스 임베드

### 웹사이트 임베드

\`\`\`html
<!-- Copilot Studio 웹 채팅 임베드 코드 -->
<iframe
  src="https://copilotstudio.microsoft.com/environments/[ENV_ID]/bots/[BOT_ID]/webchat"
  style="width: 400px; height: 600px; border: none;"
  allow="microphone"
></iframe>

<!-- 또는 JavaScript SDK 방식 -->
<script src="https://cdn.botframework.com/botframework-webchat/latest/webchat.js"><\/script>
<script>
  window.WebChat.renderWebChat({
    directLine: window.WebChat.createDirectLine({
      token: 'YOUR_TOKEN'
    })
  }, document.getElementById('webchat'));
<\/script>
\`\`\`

### 다채널 배포

| 채널 | 설정 방법 | 특징 |
|---|---|---|
| **Microsoft Teams** | 기본 통합, 원클릭 배포 | 가장 풍부한 기능 |
| **웹사이트** | iframe 또는 SDK 임베드 | 커스텀 스타일링 가능 |
| **Facebook Messenger** | Facebook 페이지 연결 | 소셜 미디어 고객 응대 |
| **Slack** | Slack 앱 등록 | 개발팀 내부 지원 |
| **모바일 앱** | Direct Line API 활용 | 네이티브 앱 통합 |
| **SMS/전화** | Azure Communication Services | 음성/문자 기반 지원 |

### 성능 대시보드

Copilot Studio의 내장 분석 도구로 **핵심 성과 지표(KPI)**를 추적합니다.

- **세션 수**: 일별/주별/월별 총 대화 세션 수
- **해결률**: Copilot이 성공적으로 해결한 대화 비율
- **에스컬레이션률**: 사람 에이전트에게 전달된 비율
- **만족도 점수(CSAT)**: 사용자 만족도 평가 결과
- **평균 대화 시간**: 세션당 평균 소요 시간
- **인기 주제**: 가장 많이 트리거된 주제 순위

### 사용자 만족도 추적

| 지표 | 측정 방법 | 목표값 |
|---|---|---|
| **CSAT 점수** | 대화 종료 후 별점 평가 | 4.0/5.0 이상 |
| **해결률** | 에스컬레이션 없이 완료된 비율 | 80% 이상 |
| **재방문율** | 동일 사용자 재이용 비율 | 60% 이상 |
| **첫 응답 시간** | 첫 메시지 응답까지 소요 시간 | 3초 이내 |
| **대화 완료율** | 중도 이탈 없이 완료된 비율 | 70% 이상 |

### 최적화 팁

1. **낮은 해결률 주제 분석**: 자주 에스컬레이션되는 주제의 대화 흐름 개선
2. **트리거 문구 확장**: 사용자가 실제 입력하는 표현을 분석하여 트리거 추가
3. **지식 소스 업데이트**: 최신 정보 반영을 위한 정기적인 지식 소스 갱신
4. **A/B 테스트**: 응답 메시지 변형을 테스트하여 최적의 표현 찾기
5. **사용자 피드백 반영**: 부정 평가가 많은 응답을 우선적으로 개선
6. **시즌별 최적화**: 시기에 따라 자주 묻는 질문이 변하므로 주제 우선순위 조정

> 배포 후 최소 2주간의 데이터를 수집한 뒤 본격적인 최적화를 시작하세요. 초기 데이터는 패턴을 파악하기에 부족할 수 있으므로, 충분한 데이터가 쌓인 후 의미 있는 개선을 진행하는 것이 효과적입니다.`,contentEn:`After completing your custom Copilot, you need to **deploy it across various channels**, monitor performance through analytics dashboards, and continuously improve.

### Teams Deployment

Microsoft Teams is the **most natural deployment channel** for Copilot Studio.

1. **Register as App**: Register Copilot as an app in Teams Admin Center
2. **Add to Channel**: Add as a bot to specific team channels
3. **Personal Chat**: Available for 1:1 conversations
4. **Group Chat**: Invoke via @mention in group conversations
5. **Tab Integration**: Embed Copilot interface as a Teams tab

### Website Embedding

\`\`\`html
<!-- Copilot Studio Web Chat Embed Code -->
<iframe
  src="https://copilotstudio.microsoft.com/environments/[ENV_ID]/bots/[BOT_ID]/webchat"
  style="width: 400px; height: 600px; border: none;"
  allow="microphone"
></iframe>

<!-- Or JavaScript SDK Approach -->
<script src="https://cdn.botframework.com/botframework-webchat/latest/webchat.js"><\/script>
<script>
  window.WebChat.renderWebChat({
    directLine: window.WebChat.createDirectLine({
      token: 'YOUR_TOKEN'
    })
  }, document.getElementById('webchat'));
<\/script>
\`\`\`

### Multi-Channel Deployment

| Channel | Setup Method | Features |
|---|---|---|
| **Microsoft Teams** | Built-in integration, one-click deploy | Richest feature set |
| **Website** | iframe or SDK embed | Custom styling possible |
| **Facebook Messenger** | Facebook page connection | Social media customer support |
| **Slack** | Slack app registration | Internal developer team support |
| **Mobile App** | Direct Line API | Native app integration |
| **SMS/Phone** | Azure Communication Services | Voice/text-based support |

### Performance Dashboard

Track **Key Performance Indicators (KPIs)** with Copilot Studio's built-in analytics tools.

- **Session Count**: Total conversation sessions by day/week/month
- **Resolution Rate**: Percentage of conversations successfully resolved by Copilot
- **Escalation Rate**: Percentage transferred to human agents
- **CSAT Score**: Customer satisfaction rating results
- **Average Conversation Time**: Average time spent per session
- **Popular Topics**: Ranking of most frequently triggered topics

### User Satisfaction Tracking

| Metric | Measurement Method | Target Value |
|---|---|---|
| **CSAT Score** | Star rating after conversation end | 4.0/5.0 or higher |
| **Resolution Rate** | Completed without escalation | 80% or higher |
| **Return Rate** | Same user re-engagement rate | 60% or higher |
| **First Response Time** | Time to first message response | Under 3 seconds |
| **Conversation Completion** | Completed without mid-conversation drop-off | 70% or higher |

### Optimization Tips

1. **Analyze Low-Resolution Topics**: Improve conversation flows for frequently escalated topics
2. **Expand Trigger Phrases**: Analyze actual user inputs and add new triggers
3. **Update Knowledge Sources**: Regular knowledge source refresh to reflect latest information
4. **A/B Testing**: Test response message variations to find optimal phrasing
5. **Act on User Feedback**: Prioritize improving responses with high negative ratings
6. **Seasonal Optimization**: Adjust topic priorities as frequently asked questions change by season

> Start serious optimization after collecting at least 2 weeks of post-deployment data. Initial data may be insufficient for pattern recognition, so meaningful improvements should begin after sufficient data has accumulated.`}]},l=[P];function x(){const{language:u}=C(),i=u==="ko",[a,s]=f.useState(0),r=l[a],p={code({inline:t,className:o,children:n,...m}){const c=/language-(\w+)/.exec(o||"");return!t&&c?e.jsx(d,{code:String(n).replace(/\n$/,""),language:c[1]}):!t&&!c&&String(n).includes(`
`)?e.jsx(d,{code:String(n).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...m,children:n})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(S,{type:"tip",children:t})},a({href:t,children:o,...n}){return t&&t.startsWith("/")?e.jsx("a",{href:t,...n,children:o}):e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",...n,children:o})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(v,{title:"Copilot Studio",path:"/copilot-studio"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:i?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:l.map((t,o)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${o===a?"active":""}`,onClick:()=>s(o),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`})," ",i?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:i?r.title:r.titleEn})}),r.sections.map((t,o)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:i?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(g,{remarkPlugins:[h],components:p,children:i?t.content:t.contentEn})})]},o)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:a===0,onClick:()=>s(a-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",i?"이전":"Previous"]}),e.jsxs("button",{disabled:a===l.length-1,onClick:()=>s(a+1),children:[i?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{x as default};
