import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DashboardPage from "./features/dashboard/DashboardPage";
import SettingsPage from "./features/settings/SettingsPage";
import { Toaster } from "sonner";
import Analytics from "./features/Analytics/Analytics";
import Team from "./features/Team/Team";
import ChatPage from "./features/Chat/ChatPage";



export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/team" element={<Team />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <Toaster
        position="top-center"
        richColors
        closeButton
        expand={false}
        duration={3000}
        visibleToasts={4}
      />
    </Layout>
  );
}
