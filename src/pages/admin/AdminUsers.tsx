import { useState, useEffect, useCallback } from 'react';
import { fetchUsers } from '../../utils/adminApi';

const LIMIT = 20;

const AdminUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetchUsers({ page, limit: LIMIT, search });
    setUsers(res.data);
    setTotal(res.total);
    setLoading(false);
  }, [page, search]);

  useEffect(() => { load(); }, [load]);

  const totalPages = Math.ceil(total / LIMIT);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const formatDate = (d: string) => d ? new Date(d).toLocaleDateString('ko-KR') : '-';

  const getLicenseStatus = (user: any) => {
    if (!user.visited_sites || !Array.isArray(user.visited_sites)) {
      return { label: '미보유', className: 'none' };
    }
    return { label: '활성', className: 'active' };
  };

  return (
    <>
      <div className="admin-page-header">
        <h1>회원 관리</h1>
        <p>copilot.dreamitbiz.com 방문 회원을 조회합니다</p>
      </div>

      <div className="admin-table-card">
        <div className="admin-table-header">
          <h2>회원 목록 ({total}명)</h2>
          <div className="admin-table-actions">
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                className="admin-search-input"
                placeholder="이름 또는 이메일 검색..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit" className="admin-btn admin-btn-sm admin-btn-primary">검색</button>
            </form>
          </div>
        </div>

        {loading ? (
          <div className="admin-loading"><div className="loading-spinner"></div></div>
        ) : users.length === 0 ? (
          <div className="admin-empty">
            <i className="fa-solid fa-users"></i>
            <p>회원이 없습니다.</p>
          </div>
        ) : (
          <>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>가입일</th>
                    <th>방문 사이트</th>
                    <th>라이선스</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((m: any) => {
                    const license = getLicenseStatus(m);
                    return (
                      <tr key={m.id}>
                        <td>{m.display_name || '-'}</td>
                        <td>{m.email || '-'}</td>
                        <td>{formatDate(m.created_at)}</td>
                        <td>
                          {Array.isArray(m.visited_sites)
                            ? m.visited_sites.slice(0, 3).join(', ') + (m.visited_sites.length > 3 ? ` 외 ${m.visited_sites.length - 3}` : '')
                            : '-'}
                        </td>
                        <td>
                          <span className={`admin-badge ${license.className}`}>
                            {license.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="admin-pagination">
                <button disabled={page <= 1} onClick={() => setPage(page - 1)}>&#8249;</button>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => Math.abs(p - page) <= 2 || p === 1 || p === totalPages)
                  .map((p, i, arr) => (
                    <span key={p}>
                      {i > 0 && arr[i - 1] !== p - 1 && <span style={{ padding: '0 4px' }}>...</span>}
                      <button
                        className={page === p ? 'active' : ''}
                        onClick={() => setPage(p)}
                      >
                        {p}
                      </button>
                    </span>
                  ))}
                <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>&#8250;</button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default AdminUsers;
