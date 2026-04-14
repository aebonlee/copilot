-- ============================================
-- Copilot Master — Supabase Table Setup
-- Prefix: copilot_
-- Run each section separately in Supabase SQL Editor
-- ============================================

-- ── STEP 1: 게시글 테이블 ──
CREATE TABLE IF NOT EXISTS copilot_posts (
  id BIGSERIAL PRIMARY KEY,
  board TEXT NOT NULL DEFAULT 'copilot-general',
  category TEXT NOT NULL DEFAULT 'free',
  title TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL DEFAULT '',
  view_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── STEP 2: 댓글 테이블 ──
CREATE TABLE IF NOT EXISTS copilot_comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES copilot_posts(id) ON DELETE CASCADE,
  body TEXT NOT NULL DEFAULT '',
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── STEP 3: 인덱스 ──
CREATE INDEX IF NOT EXISTS idx_copilot_posts_board ON copilot_posts(board);
CREATE INDEX IF NOT EXISTS idx_copilot_posts_category ON copilot_posts(category);
CREATE INDEX IF NOT EXISTS idx_copilot_posts_author ON copilot_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_copilot_posts_created ON copilot_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_copilot_comments_post ON copilot_comments(post_id);

-- ── STEP 4: 조회수 증가 RPC ──
CREATE OR REPLACE FUNCTION increment_copilot_view_count(post_id BIGINT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $func$
BEGIN
  UPDATE copilot_posts
  SET view_count = view_count + 1
  WHERE id = post_id;
END;
$func$;

-- ── STEP 5: updated_at 자동 갱신 ──
CREATE OR REPLACE FUNCTION update_copilot_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $func$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$func$;

DROP TRIGGER IF EXISTS trg_copilot_posts_updated ON copilot_posts;

CREATE TRIGGER trg_copilot_posts_updated
  BEFORE UPDATE ON copilot_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_copilot_updated_at();

-- ── STEP 6: RLS 활성화 ──
ALTER TABLE copilot_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE copilot_comments ENABLE ROW LEVEL SECURITY;

-- ── STEP 7: 게시글 RLS 정책 ──
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'copilot_posts_select' AND tablename = 'copilot_posts') THEN
    CREATE POLICY copilot_posts_select ON copilot_posts FOR SELECT USING (true);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'copilot_posts_insert' AND tablename = 'copilot_posts') THEN
    CREATE POLICY copilot_posts_insert ON copilot_posts FOR INSERT WITH CHECK (auth.uid() = author_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'copilot_posts_update' AND tablename = 'copilot_posts') THEN
    CREATE POLICY copilot_posts_update ON copilot_posts FOR UPDATE USING (auth.uid() = author_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'copilot_posts_delete' AND tablename = 'copilot_posts') THEN
    CREATE POLICY copilot_posts_delete ON copilot_posts FOR DELETE USING (auth.uid() = author_id);
  END IF;
END $$;

-- ── STEP 8: 댓글 RLS 정책 ──
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'copilot_comments_select' AND tablename = 'copilot_comments') THEN
    CREATE POLICY copilot_comments_select ON copilot_comments FOR SELECT USING (true);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'copilot_comments_insert' AND tablename = 'copilot_comments') THEN
    CREATE POLICY copilot_comments_insert ON copilot_comments FOR INSERT WITH CHECK (auth.uid() = author_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'copilot_comments_delete' AND tablename = 'copilot_comments') THEN
    CREATE POLICY copilot_comments_delete ON copilot_comments FOR DELETE USING (auth.uid() = author_id);
  END IF;
END $$;
