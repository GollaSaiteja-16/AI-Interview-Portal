import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Resume from "./pages/Resume";
import VoiceInterview from "./pages/VoiceInterview";
import Coding from "./pages/Coding";
import HRInterview from "./pages/HRInterview";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import ResumeBuilder from "./pages/ResumeBuilder";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume" element={<Resume />} />

        

        <Route path="/voice" element={<VoiceInterview />} />

        <Route path="/coding" element={<Coding />} />

        <Route path="/hr" element={<HRInterview />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/settings" element={<Settings />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;