/**
 * 게시판 정의 및 카테고리 헬퍼
 * Board ID에 'copilot-' 접두어를 붙여 다른 사이트와 충돌 방지
 */

export const BOARDS = [
  {
    id: 'copilot-vscode',
    icon: 'fa-code',
    nameKo: 'VS Code & Copilot',
    nameEn: 'VS Code & Copilot',
    descKo: 'VS Code에서의 Copilot 활용법, 팁, 문제 해결을 공유합니다.',
    descEn: 'Share VS Code Copilot usage tips, tricks, and troubleshooting.',
    color: '#007ACC',
  },
  {
    id: 'copilot-chat-board',
    icon: 'fa-comments',
    nameKo: 'Copilot Chat',
    nameEn: 'Copilot Chat',
    descKo: 'Copilot Chat 활용법과 프롬프트 테크닉을 나눕니다.',
    descEn: 'Discuss Copilot Chat usage and prompt techniques.',
    color: '#8B5CF6',
  },
  {
    id: 'copilot-tips',
    icon: 'fa-lightbulb',
    nameKo: '활용 팁',
    nameEn: 'Tips & Tricks',
    descKo: 'Copilot 생산성 팁과 활용 사례를 공유합니다.',
    descEn: 'Share Copilot productivity tips and use cases.',
    color: '#10B981',
  },
  {
    id: 'copilot-extensions-board',
    icon: 'fa-puzzle-piece',
    nameKo: 'Extensions',
    nameEn: 'Extensions',
    descKo: 'Copilot Extensions 개발 경험을 공유합니다.',
    descEn: 'Share Copilot Extensions development experiences.',
    color: '#F59E0B',
  },
  {
    id: 'copilot-general',
    icon: 'fa-comments',
    nameKo: '자유 게시판',
    nameEn: 'General',
    descKo: '자유롭게 이야기를 나누는 공간입니다.',
    descEn: 'A space for free discussion on any topic.',
    color: '#6B7280',
  },
];

export const BOARD_CATEGORIES = [
  { key: 'all', labelKo: '전체', labelEn: 'All' },
  { key: 'question', labelKo: 'Q&A', labelEn: 'Q&A' },
  { key: 'resource', labelKo: '자료공유', labelEn: 'Resources' },
  { key: 'free', labelKo: '자유', labelEn: 'Free' },
];

export const GENERAL_BOARD_CATEGORIES = [
  { key: 'all', labelKo: '전체', labelEn: 'All' },
  { key: 'notice', labelKo: '공지', labelEn: 'Notice' },
  { key: 'question', labelKo: 'Q&A', labelEn: 'Q&A' },
  { key: 'resource', labelKo: '자료공유', labelEn: 'Resources' },
  { key: 'free', labelKo: '자유', labelEn: 'Free' },
];

export function getBoardById(id) {
  return BOARDS.find((b) => b.id === id) || null;
}

export function getCategoriesForBoard(boardId) {
  return boardId === 'copilot-general' ? GENERAL_BOARD_CATEGORIES : BOARD_CATEGORIES;
}
