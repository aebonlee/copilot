import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import SEOHead from '../../components/SEOHead';
import { quizQuestions, evalQuestions, writeQuestions, scoreCriteria } from './data/quiz-questions';
import { saveScore, getHistory, calcGrade } from '../../utils/practice';
import '../../styles/practice.css';

type Phase = 'quiz' | 'eval' | 'write' | 'result';

const GRADES = ['S', 'A', 'B', 'C', 'D'];

export default function PromptPractice() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const toast = useToast();
  const isKo = language === 'ko';

  /* ── state ── */
  const [phase, setPhase] = useState<Phase>('quiz');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [evalAnswers, setEvalAnswers] = useState<Record<string, string>>({});
  const [evalSubmitted, setEvalSubmitted] = useState(false);
  const [writeTexts, setWriteTexts] = useState<Record<string, string>>({});
  const [writeScores, setWriteScores] = useState<Record<string, Record<string, number>>>(() => {
    const init: Record<string, Record<string, number>> = {};
    writeQuestions.forEach(q => {
      init[q.id] = { S: 10, C: 10, O: 10, R: 10, E: 10 };
    });
    return init;
  });
  const [finalScores, setFinalScores] = useState({ quiz: 0, eval: 0, write: 0, total: 0, grade: 'D' });
  const [history, setHistory] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);

  /* ── 점수 계산 ── */
  const calcQuizScore = useCallback(() => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.answer) score += 10;
    });
    return score;
  }, [quizAnswers]);

  const calcEvalScore = useCallback(() => {
    let score = 0;
    evalQuestions.forEach(q => {
      if (evalAnswers[q.id] === q.correctGrade) score += 10;
    });
    return score;
  }, [evalAnswers]);

  const calcWriteScore = useCallback(() => {
    let total = 0;
    writeQuestions.forEach(q => {
      const scores = writeScores[q.id] || { S: 0, C: 0, O: 0, R: 0, E: 0 };
      const qTotal = Object.values(scores).reduce((s, v) => s + v, 0);
      total += qTotal / 5; // 각 문항 100점 / 5문항 = 평균 20점 단위 → 총합 /5 로 100점 만점
    });
    return Math.round(total);
  }, [writeScores]);

  /* ── 진행률 ── */
  const progress = phase === 'quiz' ? 0 : phase === 'eval' ? 33 : phase === 'write' ? 66 : 100;

  const steps: { key: Phase; label: string; labelEn: string; icon: string }[] = [
    { key: 'quiz', label: '선택형 퀴즈', labelEn: 'Multiple Choice', icon: 'fa-circle-question' },
    { key: 'eval', label: '프롬프트 평가', labelEn: 'Prompt Evaluation', icon: 'fa-clipboard-check' },
    { key: 'write', label: '프롬프트 작성', labelEn: 'Prompt Writing', icon: 'fa-pen-to-square' },
    { key: 'result', label: '결과 확인', labelEn: 'Results', icon: 'fa-chart-column' },
  ];

  /* ── 단계 이동 ── */
  const goNext = async () => {
    if (phase === 'quiz') {
      setQuizSubmitted(true);
      setPhase('eval');
    } else if (phase === 'eval') {
      setEvalSubmitted(true);
      setPhase('write');
    } else if (phase === 'write') {
      const quiz = calcQuizScore();
      const ev = calcEvalScore();
      const wr = calcWriteScore();
      const total = quiz + ev + wr;
      const grade = calcGrade(total);
      setFinalScores({ quiz, eval: ev, write: wr, total, grade });
      setPhase('result');

      // 저장
      if (user) {
        setSaving(true);
        try {
          await saveScore({
            userId: user.id,
            userName: user.user_metadata?.name || user.email?.split('@')[0] || '',
            quizScore: quiz,
            evalScore: ev,
            writeScore: wr,
            totalScore: total,
            grade,
            detail: { quizAnswers, evalAnswers, writeScores },
          });
          toast.success(isKo ? '점수가 저장되었습니다!' : 'Score saved!');
          const h = await getHistory(user.id);
          setHistory(h);
        } catch {
          toast.error(isKo ? '저장에 실패했습니다.' : 'Failed to save.');
        } finally {
          setSaving(false);
        }
      }
    }
    window.scrollTo(0, 0);
  };

  /* ── 이력 로드 ── */
  useEffect(() => {
    if (user && phase === 'result') {
      getHistory(user.id).then(setHistory).catch(() => {});
    }
  }, [user, phase]);

  /* ── 재시작 ── */
  const restart = () => {
    setPhase('quiz');
    setQuizAnswers({});
    setQuizSubmitted(false);
    setEvalAnswers({});
    setEvalSubmitted(false);
    setWriteTexts({});
    const init: Record<string, Record<string, number>> = {};
    writeQuestions.forEach(q => { init[q.id] = { S: 10, C: 10, O: 10, R: 10, E: 10 }; });
    setWriteScores(init);
    window.scrollTo(0, 0);
  };

  /* ─────── RENDER ─────── */
  return (
    <div className="practice-page">
      <SEOHead
        title={isKo ? '프롬프트 실습' : 'Prompt Practice'}
        description={isKo ? '프롬프트 작성 실습과 점수 평가' : 'Prompt writing practice and scoring'}
        path="/prompt-eval/practice"
      />

      <div className="practice-layout">
        {/* Sidebar */}
        <aside className="practice-sidebar">
          <h3>{isKo ? '실습 진행' : 'Progress'}</h3>
          <div className="practice-progress">
            <div className="practice-progress-bar">
              <div className="practice-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="practice-progress-text">{progress}%</div>
          </div>
          <ul className="practice-steps">
            {steps.map(s => {
              const done = steps.findIndex(x => x.key === phase) > steps.findIndex(x => x.key === s.key);
              const active = s.key === phase;
              return (
                <li key={s.key}>
                  <button
                    className={`practice-step ${active ? 'active' : ''} ${done ? 'completed' : ''}`}
                    onClick={() => { if (done || active) setPhase(s.key); }}
                    disabled={!done && !active}
                  >
                    <span className="practice-step-icon">
                      <i className={`fa-solid ${done ? 'fa-check' : s.icon}`} />
                    </span>
                    {isKo ? s.label : s.labelEn}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Content */}
        <div className="practice-content">
          {phase === 'quiz' && <QuizPhase isKo={isKo} answers={quizAnswers} setAnswers={setQuizAnswers} submitted={quizSubmitted} />}
          {phase === 'eval' && <EvalPhase isKo={isKo} answers={evalAnswers} setAnswers={setEvalAnswers} submitted={evalSubmitted} />}
          {phase === 'write' && <WritePhase isKo={isKo} texts={writeTexts} setTexts={setWriteTexts} scores={writeScores} setScores={setWriteScores} />}
          {phase === 'result' && <ResultPhase isKo={isKo} scores={finalScores} history={history} user={user} saving={saving} />}

          {/* Actions */}
          <div className="practice-actions">
            {phase !== 'quiz' && phase !== 'result' && (
              <button className="practice-btn practice-btn-secondary" onClick={() => {
                const prev = phase === 'eval' ? 'quiz' : phase === 'write' ? 'eval' : phase;
                setPhase(prev as Phase);
                window.scrollTo(0, 0);
              }}>
                <i className="fa-solid fa-chevron-left" /> {isKo ? '이전' : 'Back'}
              </button>
            )}
            {phase === 'quiz' && <div />}
            {phase !== 'result' ? (
              <button className="practice-btn practice-btn-primary" onClick={goNext}>
                {phase === 'write'
                  ? (isKo ? '결과 확인' : 'View Results')
                  : (isKo ? '다음 단계' : 'Next Step')} <i className="fa-solid fa-chevron-right" />
              </button>
            ) : (
              <button className="practice-btn practice-btn-primary" onClick={restart}>
                <i className="fa-solid fa-rotate-right" /> {isKo ? '다시 도전하기' : 'Try Again'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════════ */

/* ── Quiz Phase ── */
function QuizPhase({ isKo, answers, setAnswers, submitted }: {
  isKo: boolean; answers: Record<string, number>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, number>>>; submitted: boolean;
}) {
  return (
    <>
      <div className="practice-header">
        <h1>{isKo ? '1단계: 선택형 퀴즈' : 'Step 1: Multiple Choice'}</h1>
        <p>{isKo ? '프롬프트 개념과 SCORE 평가 기준에 관한 10문항입니다. (문항당 10점, 총 100점)' : '10 questions about prompt concepts and SCORE criteria. (10pts each, 100 total)'}</p>
      </div>
      {quizQuestions.map((q, i) => {
        const options = isKo ? q.options : q.optionsEn;
        const selected = answers[q.id];
        return (
          <div className="quiz-card" key={q.id}>
            <div className="quiz-card-number">Q{i + 1}</div>
            <h3>{isKo ? q.question : q.questionEn}</h3>
            <div className="quiz-options">
              {options.map((opt, oi) => {
                let cls = 'quiz-option';
                if (selected === oi) cls += ' selected';
                if (submitted && oi === q.answer) cls += ' correct';
                if (submitted && selected === oi && oi !== q.answer) cls += ' wrong';
                return (
                  <div key={oi} className={cls} onClick={() => { if (!submitted) setAnswers(prev => ({ ...prev, [q.id]: oi })); }}>
                    <span className="quiz-option-radio" />
                    {opt}
                  </div>
                );
              })}
            </div>
            {submitted && (
              <div className="quiz-explanation">
                {selected === q.answer ? (isKo ? '✓ 정답!' : '✓ Correct!') : (isKo ? '✗ 오답' : '✗ Wrong')}{' — '}
                {isKo ? q.explanation : q.explanationEn}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

/* ── Eval Phase ── */
function EvalPhase({ isKo, answers, setAnswers, submitted }: {
  isKo: boolean; answers: Record<string, string>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>; submitted: boolean;
}) {
  return (
    <>
      <div className="practice-header">
        <h1>{isKo ? '2단계: 프롬프트 평가' : 'Step 2: Prompt Evaluation'}</h1>
        <p>{isKo ? '아래 프롬프트의 SCORE 등급(S/A/B/C/D)을 판정하세요. (문항당 10점, 총 50점)' : 'Judge the SCORE grade (S/A/B/C/D) for each prompt. (10pts each, 50 total)'}</p>
      </div>
      {evalQuestions.map((q, i) => {
        const selected = answers[q.id];
        return (
          <div className="eval-card" key={q.id}>
            <div className="quiz-card-number">{isKo ? '프롬프트' : 'Prompt'} {i + 1}</div>
            <div className="eval-prompt-box">{isKo ? q.prompt : q.promptEn}</div>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 12 }}>
              {isKo ? '이 프롬프트의 등급은?' : 'What grade is this prompt?'}
            </p>
            <div className="eval-grade-options">
              {GRADES.map(g => {
                let cls = 'eval-grade-btn';
                if (selected === g) cls += ' selected';
                if (submitted && g === q.correctGrade) cls += ' correct';
                if (submitted && selected === g && g !== q.correctGrade) cls += ' wrong';
                return (
                  <button key={g} className={cls} onClick={() => { if (!submitted) setAnswers(prev => ({ ...prev, [q.id]: g })); }}>
                    {g}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <>
                <div className="quiz-explanation">
                  {selected === q.correctGrade ? (isKo ? '✓ 정답!' : '✓ Correct!') : (isKo ? `✗ 오답 (정답: ${q.correctGrade})` : `✗ Wrong (Answer: ${q.correctGrade})`)}{' — '}
                  {isKo ? q.explanation : q.explanationEn}
                </div>
                <div className="eval-score-breakdown">
                  {(Object.entries(q.scores) as [string, number][]).map(([k, v]) => (
                    <div className="eval-score-item" key={k}>
                      <div className="label">{k}</div>
                      <div className="value">{v}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

/* ── Write Phase ── */
function WritePhase({ isKo, texts, setTexts, scores, setScores }: {
  isKo: boolean;
  texts: Record<string, string>; setTexts: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  scores: Record<string, Record<string, number>>; setScores: React.Dispatch<React.SetStateAction<Record<string, Record<string, number>>>>;
}) {
  return (
    <>
      <div className="practice-header">
        <h1>{isKo ? '3단계: 프롬프트 작성' : 'Step 3: Prompt Writing'}</h1>
        <p>{isKo ? '시나리오에 맞는 프롬프트를 작성하고, SCORE 기준으로 자기 채점하세요. (5문항 × SCORE 100점 / 5 = 총 100점)' : 'Write prompts for each scenario and self-evaluate with SCORE criteria. (5 items, 100 total)'}</p>
      </div>
      {writeQuestions.map((q, i) => (
        <div className="write-card" key={q.id}>
          <div className="quiz-card-number">{isKo ? '시나리오' : 'Scenario'} {i + 1}</div>
          <div className="write-scenario">{isKo ? q.scenario : q.scenarioEn}</div>
          <div className="write-task">{isKo ? q.task : q.taskEn}</div>
          <div className="write-hint">
            <i className="fa-solid fa-lightbulb" style={{ marginRight: 6, color: '#d69e2e' }} />
            {isKo ? q.hint : q.hintEn}
          </div>
          <textarea
            className="write-textarea"
            placeholder={isKo ? '프롬프트를 작성하세요...' : 'Write your prompt here...'}
            value={texts[q.id] || ''}
            onChange={e => setTexts(prev => ({ ...prev, [q.id]: e.target.value }))}
          />
          {/* SCORE Self-eval */}
          <div className="score-self-eval">
            <h4>{isKo ? 'SCORE 자기 평가' : 'SCORE Self-Evaluation'}</h4>
            {scoreCriteria.map(c => (
              <div className="score-slider-row" key={c.key}>
                <span className="score-slider-label" title={isKo ? c.desc : c.descEn}>
                  {c.key} - {isKo ? c.label : c.labelEn}
                </span>
                <input
                  type="range" min={0} max={20} step={1}
                  className="score-slider-input"
                  value={scores[q.id]?.[c.key] ?? 10}
                  onChange={e => setScores(prev => ({
                    ...prev,
                    [q.id]: { ...prev[q.id], [c.key]: Number(e.target.value) },
                  }))}
                />
                <span className="score-slider-value">{scores[q.id]?.[c.key] ?? 10}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

/* ── Result Phase ── */
function ResultPhase({ isKo, scores, history, user, saving }: {
  isKo: boolean; scores: { quiz: number; eval: number; write: number; total: number; grade: string };
  history: any[]; user: any; saving: boolean;
}) {
  return (
    <>
      <div className="practice-header">
        <h1>{isKo ? '실습 결과' : 'Practice Results'}</h1>
      </div>

      {/* Summary */}
      <div className="result-summary">
        <div className={`result-grade grade-${scores.grade}`}>{scores.grade}</div>
        <div className="result-total">
          {scores.total} <span>/ 250</span>
        </div>
      </div>

      {/* Breakdown */}
      <div className="result-breakdown">
        <div className="result-card">
          <h4>{isKo ? '선택형 퀴즈' : 'Quiz'}</h4>
          <div className="score">{scores.quiz}</div>
          <div className="max">/ 100</div>
        </div>
        <div className="result-card">
          <h4>{isKo ? '프롬프트 평가' : 'Evaluation'}</h4>
          <div className="score">{scores.eval}</div>
          <div className="max">/ 50</div>
        </div>
        <div className="result-card">
          <h4>{isKo ? '프롬프트 작성' : 'Writing'}</h4>
          <div className="score">{scores.write}</div>
          <div className="max">/ 100</div>
        </div>
      </div>

      {/* Login prompt */}
      {!user && (
        <div className="quiz-explanation" style={{ marginBottom: 24 }}>
          <i className="fa-solid fa-circle-info" style={{ marginRight: 6 }} />
          {isKo ? '로그인하면 점수를 저장하고 성장 추이를 확인할 수 있습니다.' : 'Log in to save your score and track your progress.'}
        </div>
      )}

      {saving && (
        <div style={{ textAlign: 'center', padding: 16, color: 'var(--text-light)' }}>
          <i className="fa-solid fa-spinner fa-spin" /> {isKo ? '저장 중...' : 'Saving...'}
        </div>
      )}

      {/* History */}
      {user && history.length > 0 && (
        <div className="result-history">
          <h3>{isKo ? '과거 실습 이력' : 'Practice History'}</h3>
          <table className="history-table">
            <thead>
              <tr>
                <th>{isKo ? '날짜' : 'Date'}</th>
                <th>{isKo ? '퀴즈' : 'Quiz'}</th>
                <th>{isKo ? '평가' : 'Eval'}</th>
                <th>{isKo ? '작성' : 'Write'}</th>
                <th>{isKo ? '총점' : 'Total'}</th>
                <th>{isKo ? '등급' : 'Grade'}</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h: any) => (
                <tr key={h.id}>
                  <td>{new Date(h.created_at).toLocaleDateString()}</td>
                  <td>{h.quiz_score}</td>
                  <td>{h.eval_score}</td>
                  <td>{h.write_score}</td>
                  <td><strong>{h.total_score}</strong></td>
                  <td><strong>{h.grade}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
