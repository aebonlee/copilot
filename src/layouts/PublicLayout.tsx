import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthGuard from '../components/AuthGuard';
import { LicenseProvider } from '../components/LicenseGuard';
import LockOverlay from '../components/LockOverlay';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const AboutPage = lazy(() => import('../pages/about/AboutPage'));
const GitHubCopilotHub = lazy(() => import('../pages/GitHubCopilotHub'));
const M365Hub = lazy(() => import('../pages/M365Hub'));
const AutomationHub = lazy(() => import('../pages/AutomationHub'));
const CommunityHub = lazy(() => import('../pages/community/CommunityHub'));
const Board = lazy(() => import('../pages/community/Board'));
const BoardDetail = lazy(() => import('../pages/community/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/community/BoardWrite'));
const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback() {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout() {
  return (
    <LicenseProvider>
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Hub Pages */}
            <Route path="/github-copilot" element={<GitHubCopilotHub />} />
            <Route path="/m365-copilot" element={<M365Hub />} />
            <Route path="/automation" element={<AutomationHub />} />
            {/* Old routes → redirect to hubs */}
            <Route path="/copilot-overview" element={<Navigate to="/github-copilot" replace />} />
            <Route path="/copilot-vscode" element={<Navigate to="/github-copilot" replace />} />
            <Route path="/copilot-chat" element={<Navigate to="/github-copilot" replace />} />
            <Route path="/copilot-cli" element={<Navigate to="/github-copilot" replace />} />
            <Route path="/copilot-workspace" element={<Navigate to="/github-copilot" replace />} />
            <Route path="/copilot-extensions" element={<Navigate to="/github-copilot" replace />} />
            <Route path="/copilot-enterprise" element={<Navigate to="/github-copilot" replace />} />
            <Route path="/teams-copilot" element={<Navigate to="/m365-copilot" replace />} />
            <Route path="/windows-copilot" element={<Navigate to="/automation" replace />} />
            <Route path="/copilot-studio" element={<Navigate to="/automation" replace />} />
            <Route path="/power-platform" element={<Navigate to="/automation" replace />} />
            <Route path="/copilot-automation" element={<Navigate to="/automation" replace />} />
            {/* Community */}
            <Route path="/community" element={<CommunityHub />} />
            <Route path="/community/:board" element={<Board />} />
            <Route path="/community/:board/write" element={<AuthGuard><BoardWrite /></AuthGuard>} />
            <Route path="/community/:board/:id" element={<BoardDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <LockOverlay />
    </div>
    </LicenseProvider>
  );
}
