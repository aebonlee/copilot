import { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import AdminGuard from '../components/AdminGuard';
import '../styles/admin.css';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminGuard>
      <div className="admin-layout">
        {/* Mobile toggle */}
        <button
          className="admin-mobile-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Sidebar */}
        <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="admin-sidebar-header">
            <h2>Admin</h2>
            <p>DreamIT Copilot</p>
          </div>

          <nav className="admin-sidebar-nav">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <i className="fa-solid fa-chart-pie"></i>
              대시보드
            </NavLink>
            <NavLink
              to="/admin/users"
              className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <i className="fa-solid fa-users"></i>
              회원 관리
            </NavLink>
            <NavLink
              to="/admin/coupons"
              className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <i className="fa-solid fa-ticket"></i>
              쿠폰 관리
            </NavLink>
          </nav>

          <div className="admin-sidebar-footer">
            <Link to="/" className="admin-back-link">
              <i className="fa-solid fa-arrow-left"></i>
              사이트로 돌아가기
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </AdminGuard>
  );
};

export default AdminLayout;
