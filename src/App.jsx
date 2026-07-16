import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DashboardPage from "./features/dashboard/DashboardPage";
import SettingsPage from "./features/settings/SettingsPage";
import { Toaster } from "sonner";
import Team from "./features/Team/Team";
import ChatPage from "./features/Chat/ChatPage";
import TasksPage from "./features/Tasks/TasksPage";



export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/settings" element={<SettingsPage />} />
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
