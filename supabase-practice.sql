-- ============================================
-- Copilot Prompt Practice - 점수 테이블 & RLS
-- ============================================

-- 1. 테이블 생성
CREATE TABLE IF NOT EXISTS copilot_prompt_scores (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id),
  user_name text,
  quiz_score int DEFAULT 0,        -- 선택형 (0~100)
  eval_score int DEFAULT 0,        -- 평가형 (0~50)
  write_score int DEFAULT 0,       -- 작성형 (0~100)
  total_score int DEFAULT 0,       -- 총점 (0~250)
  grade text,                      -- S/A/B/C/D
  detail jsonb,                    -- 문항별 상세 결과
  created_at timestamptz DEFAULT now()
);

-- 2. RLS 활성화
ALTER TABLE copilot_prompt_scores ENABLE ROW LEVEL SECURITY;

-- 3. 정책: 로그인 사용자 본인 데이터 INSERT
CREATE POLICY "Users can insert own scores"
  ON copilot_prompt_scores
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 4. 정책: 로그인 사용자 본인 데이터 SELECT
CREATE POLICY "Users can view own scores"
  ON copilot_prompt_scores
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- 5. 인덱스
CREATE INDEX IF NOT EXISTS idx_copilot_prompt_scores_user
  ON copilot_prompt_scores(user_id, created_at DESC);
