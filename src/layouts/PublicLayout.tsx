import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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
const CopilotOverview = lazy(() => import('../pages/copilot-overview/CopilotOverview'));
const CopilotVscode = lazy(() => import('../pages/copilot-vscode/CopilotVscode'));
const CopilotChat = lazy(() => import('../pages/copilot-chat/CopilotChat'));
const CopilotCli = lazy(() => import('../pages/copilot-cli/CopilotCli'));
const CopilotWorkspace = lazy(() => import('../pages/copilot-workspace/CopilotWorkspace'));
const CopilotExtensions = lazy(() => import('../pages/copilot-extensions/CopilotExtensions'));
const CopilotEnterprise = lazy(() => import('../pages/copilot-enterprise/CopilotEnterprise'));
const M365Copilot = lazy(() => import('../pages/m365-copilot/M365Copilot'));
const TeamsCopilot = lazy(() => import('../pages/teams-copilot/TeamsCopilot'));
const WindowsCopilot = lazy(() => import('../pages/windows-copilot/WindowsCopilot'));
const CopilotStudio = lazy(() => import('../pages/copilot-studio/CopilotStudio'));
const PowerPlatform = lazy(() => import('../pages/power-platform/PowerPlatform'));
const CopilotAutomation = lazy(() => import('../pages/copilot-automation/CopilotAutomation'));
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
            {/* GitHub Copilot */}
            <Route path="/copilot-overview" element={<CopilotOverview />} />
            <Route path="/copilot-vscode" element={<CopilotVscode />} />
            <Route path="/copilot-chat" element={<CopilotChat />} />
            <Route path="/copilot-cli" element={<CopilotCli />} />
            <Route path="/copilot-workspace" element={<CopilotWorkspace />} />
            <Route path="/copilot-extensions" element={<CopilotExtensions />} />
            <Route path="/copilot-enterprise" element={<CopilotEnterprise />} />
            {/* M365 Copilot */}
            <Route path="/m365-copilot" element={<M365Copilot />} />
            <Route path="/teams-copilot" element={<TeamsCopilot />} />
            {/* Automation */}
            <Route path="/windows-copilot" element={<WindowsCopilot />} />
            <Route path="/copilot-studio" element={<CopilotStudio />} />
            <Route path="/power-platform" element={<PowerPlatform />} />
            <Route path="/copilot-automation" element={<CopilotAutomation />} />
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
