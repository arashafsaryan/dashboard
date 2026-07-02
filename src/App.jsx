import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DashboardPage from "./features/dashboard/DashboardPage";
import SettingsPage from "./features/settings/SettingsPage";
import { Toaster } from "sonner";

function Analytics() {
  return <h1>Analytics</h1>;
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/analytics" element={<Analytics />} />
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
