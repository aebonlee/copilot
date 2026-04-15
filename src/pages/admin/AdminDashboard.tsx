import { useState, useEffect } from 'react';
import { fetchDashboardStats, fetchRecentMembers, fetchRecentCoupons } from '../../utils/adminApi';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ totalMembers: 0, newMembers7d: 0, activeCoupons: 0, totalCouponUses: 0 });
  const [recentMembers, setRecentMembers] = useState<any[]>([]);
  const [recentCoupons, setRecentCoupons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchDashboardStats(),
      fetchRecentMembers(),
      fetchRecentCoupons(),
    ]).then(([s, m, c]) => {
      setStats(s);
      setRecentMembers(m);
      setRecentCoupons(c);
      setLoading(false);
    });
  }, []);

  const formatDate = (d: string) => d ? new Date(d).toLocaleDateString('ko-KR') : '-';
  const today = new Date().toISOString().split('T')[0];

  if (loading) {
    return <div className="admin-loading"><div className="loading-spinner"></div></div>;
  }

  return (
    <>
      <div className="admin-page-header">
        <h1>대시보드</h1>
        <p>DreamIT Copilot 관리자 현황</p>
      </div>

      {/* KPI Cards */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon blue">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="admin-stat-info">
            <h3>{stats.totalMembers}</h3>
            <p>총 회원수</p>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon green">
            <i className="fa-solid fa-user-plus"></i>
          </div>
          <div className="admin-stat-info">
            <h3>{stats.newMembers7d}</h3>
            <p>신규 가입 (7일)</p>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon purple">
            <i className="fa-solid fa-ticket"></i>
          </div>
          <div className="admin-stat-info">
            <h3>{stats.activeCoupons}</h3>
            <p>활성 쿠폰</p>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon orange">
            <i className="fa-solid fa-stamp"></i>
          </div>
          <div className="admin-stat-info">
            <h3>{stats.totalCouponUses}</h3>
            <p>총 쿠폰 사용수</p>
          </div>
        </div>
      </div>

      {/* Recent Members */}
      <div className="admin-table-card" style={{ marginBottom: '24px' }}>
        <div className="admin-table-header">
          <h2>최근 가입 회원</h2>
        </div>
        {recentMembers.length === 0 ? (
          <div className="admin-empty">
            <i className="fa-solid fa-users"></i>
            <p>가입한 회원이 없습니다.</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>가입일</th>
                  <th>가입경로</th>
                </tr>
              </thead>
              <tbody>
                {recentMembers.map((m: any) => (
                  <tr key={m.id}>
                    <td>{m.display_name || '-'}</td>
                    <td>{m.email || '-'}</td>
                    <td>{formatDate(m.created_at)}</td>
                    <td>{m.signup_domain || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Recent Coupon Activity */}
      <div className="admin-table-card">
        <div className="admin-table-header">
          <h2>최근 쿠폰 활동</h2>
        </div>
        {recentCoupons.length === 0 ? (
          <div className="admin-empty">
            <i className="fa-solid fa-ticket"></i>
            <p>발행된 쿠폰이 없습니다.</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>코드</th>
                  <th>메모</th>
                  <th>사용수</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {recentCoupons.map((c: any) => {
                  const expired = c.expires_at < today;
                  return (
                    <tr key={c.id}>
                      <td><code style={{ fontFamily: 'monospace', fontWeight: 600 }}>{c.code}</code></td>
                      <td>{c.label || '-'}</td>
                      <td style={{ fontWeight: 600 }}>{c.use_count}명</td>
                      <td>
                        {expired ? (
                          <span className="admin-badge suspended">만료</span>
                        ) : c.is_active ? (
                          <span className="admin-badge active">활성</span>
                        ) : (
                          <span className="admin-badge deleted">비활성</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
