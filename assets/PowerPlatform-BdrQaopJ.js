import{j as e,M as g,r as h}from"./markdown-CFpoqxyr.js";import{b as A}from"./vendor-D7XqJCDT.js";import{u as v}from"./index-ZkR4MYEP.js";import{S as P}from"./SEOHead-CWVpO3MN.js";import{T as w,C as c}from"./TipBox-CN9Miv2V.js";import"./supabase-k82gbVKr.js";import"./pdf-ckwbz45p.js";const f={id:"power-overview",icon:"fa-bolt",title:"Power Platform Copilot",titleEn:"Power Platform Copilot",sections:[{title:"Power Platform Copilot이란?",titleEn:"What is Power Platform Copilot?",content:`Microsoft Power Platform은 **로우코드/노코드** 기반의 비즈니스 애플리케이션 플랫폼으로, Copilot AI가 통합되어 자연어만으로 업무 자동화, 앱 개발, 데이터 분석, 웹 사이트 구축이 가능합니다.

### Power Platform 4대 구성요소

| 구성요소 | 역할 | Copilot 기능 |
|---------|------|-------------|
| **Power Automate** | 워크플로우 자동화 | 자연어로 흐름 생성, 트리거/작업 자동 구성 |
| **Power Apps** | 비즈니스 앱 개발 | 자연어로 앱 생성, 테이블/UI 자동 구성 |
| **Power BI** | 데이터 분석/시각화 | 자연어 질의, DAX 생성, 인사이트 추출 |
| **Power Pages** | 외부용 웹사이트 구축 | 자연어로 페이지 디자인, 콘텐츠 생성 |

### Copilot 통합 방식

Power Platform의 Copilot은 **각 제품 내부에 임베디드**되어 동작합니다:

- **인라인 Copilot**: 각 도구의 편집 화면에서 직접 AI 지원
- **Copilot Studio**: 커스텀 AI 에이전트를 빌드하여 Power Platform 전체에 배포
- **AI Builder**: 사전 훈련된 AI 모델(문서 처리, 텍스트 인식 등)을 Power Platform에 통합
- **Dataverse**: 모든 데이터를 중앙에서 관리하며 Copilot이 접근하여 분석

### 요금제 및 라이선스

| 플랜 | 월 요금(사용자당) | 주요 포함 기능 |
|------|-----------------|---------------|
| **Power Apps Premium** | $20 | 앱 무제한 생성, Dataverse, AI Builder 크레딧 |
| **Power Automate Premium** | $15 | 클라우드 흐름 무제한, RPA, AI Builder 크레딧 |
| **Power BI Pro** | $10 | 보고서 공유, 데이터셋 공유, Copilot 기본 |
| **Power BI Premium(용량)** | $4,995/월 | 대규모 데이터, 무제한 공유, Copilot 전체 |
| **Copilot Studio** | $200 | 커스텀 에이전트, 25,000 메시지/월 |

> Power Platform Copilot을 최대한 활용하려면 **Microsoft 365 E3/E5 + Power Platform Premium 조합**이 가장 효율적입니다. 단독 구매도 가능하지만 M365 라이선스가 있으면 Teams, Outlook 등과의 연계가 훨씬 매끄럽습니다.

### 도입 시 고려사항

- **데이터 거버넌스**: Dataverse 환경 설정, DLP(데이터 손실 방지) 정책 수립 필수
- **환경 관리**: 개발(Dev) → 테스트(Test) → 운영(Prod) 환경 분리 권장
- **교육 계획**: 시민 개발자(Citizen Developer) 양성 프로그램 병행
- **보안**: Azure AD 기반 인증, 역할 기반 접근 제어(RBAC) 적용
- **모니터링**: Power Platform 관리 센터에서 사용량, 성능, 오류 추적`,contentEn:`Microsoft Power Platform is a **low-code/no-code** business application platform with integrated Copilot AI, enabling workflow automation, app development, data analysis, and website building using just natural language.

### Power Platform 4 Core Components

| Component | Role | Copilot Feature |
|-----------|------|-----------------|
| **Power Automate** | Workflow automation | Create flows with natural language, auto-configure triggers/actions |
| **Power Apps** | Business app development | Create apps with natural language, auto-generate tables/UI |
| **Power BI** | Data analysis/visualization | Natural language queries, DAX generation, insight extraction |
| **Power Pages** | External website building | Design pages with natural language, content generation |

### Copilot Integration Architecture

Power Platform's Copilot works **embedded within each product**:

- **Inline Copilot**: Direct AI assistance within each tool's editing interface
- **Copilot Studio**: Build custom AI agents and deploy across the entire Power Platform
- **AI Builder**: Integrate pre-trained AI models (document processing, text recognition, etc.) into Power Platform
- **Dataverse**: Centralized data management that Copilot accesses for analysis

### Pricing and Licensing

| Plan | Monthly Price (per user) | Key Inclusions |
|------|--------------------------|----------------|
| **Power Apps Premium** | $20 | Unlimited app creation, Dataverse, AI Builder credits |
| **Power Automate Premium** | $15 | Unlimited cloud flows, RPA, AI Builder credits |
| **Power BI Pro** | $10 | Report sharing, dataset sharing, basic Copilot |
| **Power BI Premium (capacity)** | $4,995/mo | Large-scale data, unlimited sharing, full Copilot |
| **Copilot Studio** | $200 | Custom agents, 25,000 messages/month |

> To maximize Power Platform Copilot, the **Microsoft 365 E3/E5 + Power Platform Premium combination** is most cost-effective. Standalone purchases are possible, but having an M365 license makes integration with Teams, Outlook, and other services much smoother.

### Adoption Considerations

- **Data Governance**: Set up Dataverse environments and establish DLP (Data Loss Prevention) policies
- **Environment Management**: Separate Development → Test → Production environments recommended
- **Training Plan**: Run parallel Citizen Developer training programs
- **Security**: Apply Azure AD-based authentication and Role-Based Access Control (RBAC)
- **Monitoring**: Track usage, performance, and errors through the Power Platform Admin Center`},{title:"Power Automate + Copilot",titleEn:"Power Automate + Copilot",content:`Power Automate의 Copilot을 사용하면 **자연어 한 줄**로 복잡한 업무 워크플로우를 자동 생성할 수 있습니다. 프로그래밍 지식 없이도 기업의 반복 업무를 혁신적으로 자동화합니다.

### 자연어 흐름 생성 프로세스

1. **프롬프트 입력**: "새 이메일이 오면 첨부파일을 OneDrive에 저장하고 Teams로 알림 보내줘"
2. **Copilot 분석**: 트리거, 작업, 조건을 자동으로 파악
3. **흐름 초안 생성**: 연결할 서비스와 단계를 자동 구성
4. **사용자 검토/수정**: 생성된 흐름을 확인하고 세부 조정
5. **테스트 및 배포**: 실제 환경에서 테스트 후 활성화

### 핵심 기능 상세

| 기능 | 설명 | 활용 예시 |
|------|------|----------|
| **클라우드 흐름** | 클라우드 기반 자동화 | 이메일 → SharePoint → Teams 연계 |
| **데스크톱 흐름(RPA)** | PC 화면 조작 자동화 | 레거시 시스템 데이터 입력 자동화 |
| **트리거 설정** | 흐름 시작 조건 | 새 메일, 파일 업로드, 일정 시간, 양식 제출 |
| **조건 분기** | IF/ELSE 논리 | 금액 기준 승인 경로 분기 |
| **승인 흐름** | 결재/승인 프로세스 | 경비 청구, 휴가 신청, 구매 요청 |
| **반복(Loop)** | 배열 항목 반복 처리 | 여러 파일 일괄 처리 |

### Copilot 프롬프트 예시

- "매주 월요일 9시에 팀원들에게 주간 보고 요청 이메일을 보내줘"
- "SharePoint 리스트에 새 항목이 추가되면 관리자에게 Teams 메시지를 보내줘"
- "고객 문의 이메일이 오면 내용을 분류하고 담당자에게 자동 배정해줘"
- "Excel 파일이 업로드되면 데이터를 Dataverse 테이블에 저장해줘"

> Copilot으로 흐름을 생성한 후에는 반드시 **테스트 실행**을 해보세요. 특히 조건 분기가 있는 경우, 각 경로별로 테스트 데이터를 준비하여 모든 시나리오를 검증하는 것이 중요합니다.

### 실전 예시: 휴가 신청 → 승인 → 알림 자동화

**시나리오**: 직원이 Microsoft Forms로 휴가를 신청하면, 매니저에게 승인 요청이 가고, 결과에 따라 알림이 전송됩니다.

**Copilot 프롬프트**: "Microsoft Forms에서 휴가 신청이 제출되면 매니저에게 승인 요청을 보내고, 승인되면 신청자에게 확인 이메일을, 거절되면 사유와 함께 안내 이메일을 보내줘"

**자동 생성되는 흐름 단계**:

| 단계 | 작업 | 세부 내용 |
|------|------|----------|
| 1 | **트리거**: Forms 응답 제출 | 휴가 신청 양식 제출 감지 |
| 2 | **작업**: 응답 세부정보 가져오기 | 신청자, 날짜, 사유 추출 |
| 3 | **작업**: 승인 시작 | 매니저에게 승인/거절 요청 전송 |
| 4 | **조건**: 승인 여부 확인 | 승인 결과에 따라 분기 |
| 5a | **승인 시**: 확인 이메일 발송 | 승인 완료 안내 + 캘린더 등록 |
| 5b | **거절 시**: 안내 이메일 발송 | 거절 사유 포함 안내 |
| 6 | **작업**: SharePoint 기록 | 휴가 내역 리스트에 상태 업데이트 |

\`\`\`
// 승인 흐름 JSON 구조 (참고용)
{
  "trigger": "When a new response is submitted",
  "actions": [
    "Get response details",
    "Start and wait for an approval",
    "Condition: Outcome equals Approve",
    "Send email (approved/rejected)",
    "Update SharePoint list"
  ]
}
\`\`\`

> 승인 흐름에서 **타임아웃 설정**을 반드시 추가하세요. 매니저가 응답하지 않을 경우를 대비해 3일 후 자동 리마인더, 5일 후 상위 매니저로 에스컬레이션하는 로직을 넣으면 프로세스가 멈추지 않습니다.`,contentEn:`With Power Automate's Copilot, you can automatically generate complex business workflows with **just one line of natural language**. Innovatively automate repetitive enterprise tasks without any programming knowledge.

### Natural Language Flow Creation Process

1. **Enter Prompt**: "When a new email arrives, save attachments to OneDrive and send a Teams notification"
2. **Copilot Analysis**: Automatically identifies triggers, actions, and conditions
3. **Draft Flow Generation**: Auto-configures services and steps to connect
4. **User Review/Edit**: Review the generated flow and make adjustments
5. **Test and Deploy**: Test in actual environment, then activate

### Core Features Detail

| Feature | Description | Usage Example |
|---------|-------------|---------------|
| **Cloud Flows** | Cloud-based automation | Email → SharePoint → Teams integration |
| **Desktop Flows (RPA)** | PC screen automation | Legacy system data entry automation |
| **Trigger Setup** | Flow start conditions | New mail, file upload, scheduled time, form submission |
| **Conditional Branching** | IF/ELSE logic | Approval routing based on amount thresholds |
| **Approval Flows** | Approval processes | Expense claims, leave requests, purchase orders |
| **Loops** | Iterate over array items | Batch processing multiple files |

### Copilot Prompt Examples

- "Every Monday at 9 AM, send weekly report request emails to team members"
- "When a new item is added to a SharePoint list, send a Teams message to the admin"
- "When a customer inquiry email arrives, classify the content and auto-assign to the responsible person"
- "When an Excel file is uploaded, save the data to a Dataverse table"

> After generating a flow with Copilot, always **run a test**. Especially when conditional branches exist, prepare test data for each path and verify all scenarios.

### Practical Example: Leave Request → Approval → Notification Automation

**Scenario**: When an employee submits a leave request via Microsoft Forms, an approval request goes to the manager, and notifications are sent based on the result.

**Copilot Prompt**: "When a leave request is submitted in Microsoft Forms, send an approval request to the manager. If approved, send a confirmation email to the applicant. If rejected, send a notification email with the reason."

**Auto-generated Flow Steps**:

| Step | Action | Details |
|------|--------|---------|
| 1 | **Trigger**: Forms response submitted | Detect leave request form submission |
| 2 | **Action**: Get response details | Extract applicant, dates, reason |
| 3 | **Action**: Start approval | Send approve/reject request to manager |
| 4 | **Condition**: Check approval status | Branch based on approval result |
| 5a | **If approved**: Send confirmation email | Approval notice + calendar registration |
| 5b | **If rejected**: Send notification email | Include rejection reason |
| 6 | **Action**: SharePoint record | Update status in leave records list |

\`\`\`
// Approval Flow JSON Structure (reference)
{
  "trigger": "When a new response is submitted",
  "actions": [
    "Get response details",
    "Start and wait for an approval",
    "Condition: Outcome equals Approve",
    "Send email (approved/rejected)",
    "Update SharePoint list"
  ]
}
\`\`\`

> Always add a **timeout setting** to approval flows. To handle cases where the manager doesn't respond, add auto-reminder after 3 days and escalation to upper management after 5 days to prevent the process from stalling.`},{title:"Power Apps + Copilot",titleEn:"Power Apps + Copilot",content:`Power Apps의 Copilot을 사용하면 **자연어 설명만으로** 완전한 비즈니스 애플리케이션을 생성할 수 있습니다. 데이터 테이블, UI 화면, 비즈니스 로직까지 AI가 자동으로 구성합니다.

### 앱 생성 프로세스

1. **자연어로 앱 설명**: "재고를 관리하는 앱을 만들어줘. 상품명, 수량, 가격, 카테고리가 필요해"
2. **테이블 자동 생성**: Copilot이 Dataverse에 적절한 테이블과 컬럼을 자동 생성
3. **UI 자동 구성**: 목록/상세/편집 화면을 자동으로 레이아웃
4. **비즈니스 로직 추가**: 유효성 검사, 계산 필드, 조건부 표시 등을 자연어로 요청
5. **배포**: 웹, 모바일(iOS/Android), Teams 앱으로 배포

### Copilot으로 할 수 있는 작업

| 작업 유형 | 설명 | 프롬프트 예시 |
|----------|------|-------------|
| **앱 생성** | 처음부터 앱 만들기 | "직원 출퇴근 관리 앱을 만들어줘" |
| **테이블 수정** | 컬럼 추가/변경 | "테이블에 '승인상태' 컬럼을 추가해줘" |
| **화면 추가** | 새로운 페이지 | "대시보드 화면을 추가해줘" |
| **수식 생성** | Power Fx 수식 | "총 금액을 자동 계산하는 수식을 만들어줘" |
| **필터/정렬** | 데이터 조회 조건 | "카테고리별로 필터링할 수 있게 해줘" |
| **외부 연동** | 커넥터 설정 | "SharePoint 리스트의 데이터를 가져와줘" |

### Dataverse 연동의 장점

- **관계형 데이터**: 테이블 간 1:N, N:N 관계 설정 가능
- **보안**: 행 수준 보안(RLS), 필드 수준 보안 지원
- **감사 로그**: 데이터 변경 이력 자동 기록
- **비즈니스 규칙**: 코드 없이 유효성 검사, 기본값, 자동 계산 설정
- **API 제공**: REST API로 외부 시스템과 연동

> Power Apps에서 Copilot을 사용할 때는 **구체적인 필드명과 데이터 타입을 명시**하면 더 정확한 결과를 얻을 수 있습니다. 예를 들어 "이름(텍스트), 수량(정수), 가격(통화), 등록일(날짜)" 처럼 지정하세요.

### 실전 예시: 재고 관리 앱 만들기

**Copilot 프롬프트**: "상품 재고를 관리하는 앱을 만들어줘. 상품명(텍스트), SKU(텍스트), 카테고리(선택: 전자제품/의류/식품/기타), 현재수량(정수), 최소수량(정수), 단가(통화), 공급업체(텍스트) 필드가 필요해. 현재수량이 최소수량보다 적으면 빨간색으로 표시해줘."

**Copilot이 자동 생성하는 항목**:

| 항목 | 내용 |
|------|------|
| **Dataverse 테이블** | 위 필드 + 자동 ID, 생성일, 수정일 컬럼 |
| **메인 화면** | 상품 목록(Gallery) + 검색/필터 기능 |
| **상세 화면** | 상품 정보 표시(Display Form) |
| **편집 화면** | 상품 추가/수정(Edit Form) |
| **조건부 서식** | 재고 부족 시 빨간색 배경 표시 |
| **내비게이션** | 화면 간 이동 버튼 자동 구성 |

### 모바일 배포 방법

- **Power Apps 모바일 앱**: iOS/Android에서 Power Apps 앱 설치 후 접근
- **Teams 앱으로 배포**: Teams 탭에 추가하여 팀원 전체가 바로 사용
- **QR 코드 공유**: 앱 링크를 QR 코드로 생성하여 현장 작업자에게 배포
- **반응형 디자인**: 화면 크기에 맞춰 자동 조정(Copilot이 반응형으로 생성)

\`\`\`
// Power Fx 수식 예시: 재고 부족 조건부 서식
If(
  ThisItem.CurrentQuantity < ThisItem.MinQuantity,
  Color.Red,
  Color.Green
)
\`\`\`

> 앱을 배포하기 전에 반드시 **다양한 디바이스에서 테스트**하세요. 특히 모바일에서 입력 폼의 사용성을 확인하고, 네트워크가 불안정한 환경(현장/창고)에서도 오프라인 기능이 동작하는지 점검해야 합니다.`,contentEn:`With Power Apps Copilot, you can create complete business applications **using only natural language descriptions**. AI automatically configures data tables, UI screens, and business logic.

### App Creation Process

1. **Describe App in Natural Language**: "Create an app to manage inventory. I need product name, quantity, price, and category"
2. **Auto Table Generation**: Copilot automatically creates appropriate tables and columns in Dataverse
3. **Auto UI Configuration**: Automatically layouts list/detail/edit screens
4. **Add Business Logic**: Request validations, calculated fields, conditional display in natural language
5. **Deploy**: Deploy as web, mobile (iOS/Android), or Teams app

### What You Can Do with Copilot

| Task Type | Description | Prompt Example |
|-----------|-------------|----------------|
| **Create App** | Build app from scratch | "Create an employee attendance management app" |
| **Modify Table** | Add/change columns | "Add an 'Approval Status' column to the table" |
| **Add Screen** | New pages | "Add a dashboard screen" |
| **Create Formula** | Power Fx formulas | "Create a formula to auto-calculate total amount" |
| **Filter/Sort** | Data query conditions | "Enable filtering by category" |
| **External Integration** | Connector setup | "Fetch data from a SharePoint list" |

### Benefits of Dataverse Integration

- **Relational Data**: Set up 1:N and N:N relationships between tables
- **Security**: Row-level security (RLS) and field-level security support
- **Audit Logs**: Automatic recording of data change history
- **Business Rules**: Set validations, defaults, and auto-calculations without code
- **API Access**: Integrate with external systems via REST API

> When using Copilot in Power Apps, **specifying exact field names and data types** yields more accurate results. For example, specify like "Name (text), Quantity (integer), Price (currency), Registration Date (date)".

### Practical Example: Building an Inventory Management App

**Copilot Prompt**: "Create an app to manage product inventory. I need fields for Product Name (text), SKU (text), Category (choice: Electronics/Clothing/Food/Other), Current Quantity (integer), Minimum Quantity (integer), Unit Price (currency), and Supplier (text). Highlight in red when current quantity is below minimum quantity."

**Items Copilot Auto-generates**:

| Item | Content |
|------|---------|
| **Dataverse Table** | Above fields + auto ID, created date, modified date columns |
| **Main Screen** | Product list (Gallery) + search/filter functionality |
| **Detail Screen** | Product information display (Display Form) |
| **Edit Screen** | Product add/edit (Edit Form) |
| **Conditional Formatting** | Red background when stock is low |
| **Navigation** | Auto-configured screen transition buttons |

### Mobile Deployment Methods

- **Power Apps Mobile App**: Install Power Apps on iOS/Android for access
- **Deploy as Teams App**: Add as a Teams tab for instant team-wide access
- **QR Code Sharing**: Generate QR codes for app links to distribute to field workers
- **Responsive Design**: Auto-adjusts to screen size (Copilot generates responsive layouts)

\`\`\`
// Power Fx Formula Example: Conditional formatting for low stock
If(
  ThisItem.CurrentQuantity < ThisItem.MinQuantity,
  Color.Red,
  Color.Green
)
\`\`\`

> Before deploying your app, always **test on various devices**. Especially verify input form usability on mobile, and check that offline functionality works in environments with unstable networks (field/warehouse).`},{title:"Power BI + Copilot",titleEn:"Power BI + Copilot",content:`Power BI의 Copilot은 **자연어로 데이터를 질문**하면 즉시 시각화와 인사이트를 생성합니다. 복잡한 DAX 수식도 대화형으로 작성하고, 보고서를 자동으로 요약할 수 있습니다.

### Copilot 핵심 기능

| 기능 | 설명 | 사용 위치 |
|------|------|----------|
| **자연어 보고서 생성** | 데이터셋 설명만으로 보고서 자동 생성 | Power BI Service |
| **DAX 수식 생성** | 자연어로 계산 측정값 작성 | Power BI Desktop |
| **시각화 추천** | 데이터에 최적화된 차트 유형 제안 | 보고서 편집 모드 |
| **인사이트 자동 추출** | 이상치, 추세, 패턴 자동 발견 | 보고서 보기 모드 |
| **내러티브 생성** | 차트/테이블을 텍스트로 설명 | 보고서 내 텍스트 상자 |
| **Q&A 기능** | 데이터에 대한 질문-답변 | Q&A 비주얼 |
| **대시보드 요약** | 전체 대시보드 핵심 인사이트 요약 | 대시보드 보기 |

### 자연어 질의 예시

- "이번 분기 매출 상위 10개 제품을 막대 차트로 보여줘"
- "지역별 매출 추이를 지난 12개월간 선 그래프로 표시해줘"
- "고객 이탈률이 가장 높은 세그먼트는?"
- "전년 동기 대비 성장률을 계산해줘"
- "비용 대비 수익률이 가장 높은 부서를 찾아줘"

### DAX 수식 생성 활용

Copilot에게 자연어로 요청하면 복잡한 DAX 수식을 자동으로 작성해줍니다:

| 요청 | 생성되는 DAX |
|------|-------------|
| "전년 동기 대비 매출 성장률" | \`DIVIDE([매출] - CALCULATE([매출], SAMEPERIODLASTYEAR('날짜'[Date])), CALCULATE([매출], SAMEPERIODLASTYEAR('날짜'[Date])))\` |
| "누적 매출 합계" | \`CALCULATE(SUM('매출'[금액]), DATESYTD('날짜'[Date]))\` |
| "이동 평균 (3개월)" | \`AVERAGEX(DATESINPERIOD('날짜'[Date], LASTDATE('날짜'[Date]), -3, MONTH), [매출])\` |
| "상위 N개 제품 매출 합" | \`SUMX(TOPN(N, '제품', [매출], DESC), [매출])\` |

> DAX 수식을 Copilot으로 생성한 후에는 반드시 **결과를 수동으로 검증**하세요. 특히 시간 인텔리전스 함수(YTD, QTD, SAMEPERIODLASTYEAR 등)는 날짜 테이블 구성에 따라 결과가 달라질 수 있습니다.

### 시각화 추천 시스템

Copilot은 데이터의 특성을 분석하여 최적의 시각화를 추천합니다:

- **범주 비교**: 막대 차트, 트리맵
- **시간 추세**: 선 그래프, 영역 차트
- **비율/구성**: 원형 차트, 도넛 차트, 100% 누적 막대
- **분포**: 히스토그램, 상자 수염 그래프
- **관계**: 산점도, 버블 차트
- **지리**: 지도 비주얼, Filled Map
- **KPI**: 카드, 게이지, KPI 비주얼

### 인사이트 자동 추출 기능

Power BI Copilot은 다음과 같은 인사이트를 자동으로 발견합니다:

| 인사이트 유형 | 설명 | 예시 |
|-------------|------|------|
| **이상치 탐지** | 비정상적 데이터 포인트 식별 | "3월 서울 지역 매출이 평균보다 47% 높음" |
| **추세 분석** | 상승/하락 추세 감지 | "온라인 채널 매출이 6개월 연속 증가 중" |
| **세그먼트 분석** | 그룹 간 차이점 발견 | "20대 고객의 재구매율이 타 연령대 대비 2배" |
| **상관관계** | 변수 간 관계 탐지 | "광고비 증가와 신규 고객 수 간 강한 양의 상관관계" |
| **시즌 패턴** | 주기적 변동 발견 | "매년 11-12월에 매출이 35% 증가하는 패턴" |

### 내러티브 및 대시보드 요약

Copilot의 **스마트 내러티브** 기능은 차트와 테이블의 핵심 내용을 자연어로 요약합니다:

- 보고서에 텍스트 비주얼을 추가하면 자동으로 데이터 요약 생성
- 대시보드 전체를 한 문단으로 요약하는 기능
- 경영진 보고용 핵심 인사이트 자동 추출
- 데이터 변동 시 내러티브 자동 업데이트

> Power BI Copilot을 사용할 때 **데이터 모델의 품질이 결과의 품질을 결정**합니다. 올바른 관계 설정, 명확한 테이블/컬럼 이름, 적절한 데이터 타입 설정이 선행되어야 Copilot이 정확한 인사이트를 제공합니다.`,contentEn:`Power BI's Copilot instantly generates visualizations and insights when you **ask questions about data in natural language**. You can also write complex DAX formulas conversationally and auto-summarize reports.

### Copilot Core Features

| Feature | Description | Where Used |
|---------|-------------|------------|
| **Natural Language Report Generation** | Auto-generate reports from dataset descriptions | Power BI Service |
| **DAX Formula Generation** | Write calculated measures in natural language | Power BI Desktop |
| **Visualization Recommendations** | Suggest optimal chart types for data | Report edit mode |
| **Auto Insight Extraction** | Auto-discover anomalies, trends, patterns | Report view mode |
| **Narrative Generation** | Describe charts/tables as text | Text boxes in reports |
| **Q&A Feature** | Question-answer about data | Q&A visual |
| **Dashboard Summary** | Summarize key insights across dashboard | Dashboard view |

### Natural Language Query Examples

- "Show me the top 10 products by revenue this quarter as a bar chart"
- "Display regional revenue trends over the last 12 months as a line graph"
- "Which customer segment has the highest churn rate?"
- "Calculate the year-over-year growth rate"
- "Find the department with the highest return on investment"

### DAX Formula Generation

Ask Copilot in natural language and it automatically generates complex DAX formulas:

| Request | Generated DAX |
|---------|---------------|
| "Year-over-year revenue growth" | \`DIVIDE([Revenue] - CALCULATE([Revenue], SAMEPERIODLASTYEAR('Date'[Date])), CALCULATE([Revenue], SAMEPERIODLASTYEAR('Date'[Date])))\` |
| "Year-to-date cumulative revenue" | \`CALCULATE(SUM('Sales'[Amount]), DATESYTD('Date'[Date]))\` |
| "Moving average (3 months)" | \`AVERAGEX(DATESINPERIOD('Date'[Date], LASTDATE('Date'[Date]), -3, MONTH), [Revenue])\` |
| "Sum of top N product revenues" | \`SUMX(TOPN(N, 'Products', [Revenue], DESC), [Revenue])\` |

> After generating DAX formulas with Copilot, always **manually verify the results**. Time intelligence functions (YTD, QTD, SAMEPERIODLASTYEAR, etc.) can produce different results depending on your date table configuration.

### Visualization Recommendation System

Copilot analyzes data characteristics and recommends optimal visualizations:

- **Category Comparison**: Bar charts, treemaps
- **Time Trends**: Line graphs, area charts
- **Proportions/Composition**: Pie charts, donut charts, 100% stacked bars
- **Distribution**: Histograms, box-and-whisker plots
- **Relationships**: Scatter plots, bubble charts
- **Geographic**: Map visuals, Filled Maps
- **KPIs**: Cards, gauges, KPI visuals

### Auto Insight Extraction

Power BI Copilot automatically discovers insights like:

| Insight Type | Description | Example |
|-------------|-------------|---------|
| **Anomaly Detection** | Identify abnormal data points | "Seoul region revenue in March is 47% above average" |
| **Trend Analysis** | Detect upward/downward trends | "Online channel revenue has increased for 6 consecutive months" |
| **Segment Analysis** | Discover differences between groups | "Customers in their 20s have 2x the repurchase rate of other age groups" |
| **Correlations** | Detect relationships between variables | "Strong positive correlation between ad spend increase and new customer acquisition" |
| **Seasonal Patterns** | Discover periodic variations | "Revenue increases 35% every November-December" |

### Narrative and Dashboard Summary

Copilot's **Smart Narrative** feature summarizes chart and table key content in natural language:

- Auto-generates data summaries when adding text visuals to reports
- Summarizes entire dashboards in a single paragraph
- Auto-extracts key insights for executive reporting
- Narratives auto-update when data changes

> When using Power BI Copilot, **data model quality determines result quality**. Proper relationship setup, clear table/column naming, and appropriate data type configuration must come first for Copilot to provide accurate insights.`}]},p=[f];function x(){const{language:u}=v(),o=u==="ko",[r,n]=A.useState(0),s=p[r],d={code({inline:t,className:a,children:i,...m}){const l=/language-(\w+)/.exec(a||"");return!t&&l?e.jsx(c,{code:String(i).replace(/\n$/,""),language:l[1]}):!t&&!l&&String(i).includes(`
`)?e.jsx(c,{code:String(i).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...m,children:i})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(w,{type:"tip",children:t})},a({href:t,children:a,...i}){return t&&t.startsWith("/")?e.jsx("a",{href:t,...i,children:a}):e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",...i,children:a})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(P,{title:"Power Platform Copilot",path:"/power-platform"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:o?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:p.map((t,a)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${a===r?"active":""}`,onClick:()=>n(a),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`})," ",o?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:o?s.title:s.titleEn})}),s.sections.map((t,a)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:o?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(g,{remarkPlugins:[h],components:d,children:o?t.content:t.contentEn})})]},a)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:r===0,onClick:()=>n(r-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",o?"이전":"Previous"]}),e.jsxs("button",{disabled:r===p.length-1,onClick:()=>n(r+1),children:[o?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{x as default};
