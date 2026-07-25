import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar />

      <div className="dashboard">

        {/* Top Navbar */}
        <Navbar />

        {/* Statistics Cards */}
        <Stats />

        <h1 className="title">
          🤖 AI Interview Portal
        </h1>

        <p className="welcome">
          Welcome 👋
        </p>

        <div className="card-container">
          <div className="card">
            <h2>📄 AI Resume Builder</h2>
            <p>Create a professional ATS-friendly resume.</p>
            <button onClick={() => navigate("/resume-builder")}>
              Open
            </button>
        </div>

          <div className="card">
            <h2>📄 Resume Analysis</h2>
            <p>Upload your resume and get AI analysis.</p>
            <button onClick={() => navigate("/resume")}>
              Open
            </button>
          </div>

          <div className="card">
            <h2>🎤 Voice Interview</h2>
            <p>Practice speaking interviews.</p>

            <button onClick={() => navigate("/voice")}>
              Start
            </button>
          </div>

          <div className="card">
            <h2>💻 Coding Round</h2>
            <p>Solve coding questions.</p>

            <button onClick={() => navigate("/coding")}>
              Start
            </button>
          </div>

          <div className="card">
            <h2>👨‍💼 HR Interview</h2>
            <p>Practice HR interview questions.</p>
            <button onClick={() => navigate("/hr")}>
              Start
            </button>
          </div>

        </div>

      </div>
    </>
  );
}
export default Dashboard;
