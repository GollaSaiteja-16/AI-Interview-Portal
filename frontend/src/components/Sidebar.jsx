import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">🤖 AI Portal</h2>

      <ul>

        <li><Link to="/dashboard">🏠 Dashboard</Link></li>

        <li><Link to="/resume">📄 Resume Analysis</Link></li>

        <li><Link to="/voice">🎤 Voice Interview</Link></li>

        <li><Link to="/coding">💻 Coding Round</Link></li>

        <li><Link to="/hr">👨‍💼 HR Interview</Link></li>

        <li><Link to="/reports">📊 Reports</Link></li>

        <li><Link to="/settings">⚙ Settings</Link></li>

        <li><Link to="/">🚪 Logout</Link></li>

      </ul>

    </div>
  );
}

export default Sidebar;