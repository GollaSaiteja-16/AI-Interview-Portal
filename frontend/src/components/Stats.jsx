import { useEffect, useState } from "react";
import api from "../services/api";
import "./Stats.css";

function Stats() {

  const [stats, setStats] = useState({
    total: 0,
    average: 0,
    highest: 0,
    success: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await api.get("/dashboard-stats");
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="stats-container">

      <div className="stat-card">
        <h1>📊</h1>
        <h2>{stats.total}</h2>
        <p>Total Interviews</p>
      </div>

      <div className="stat-card">
        <h1>⭐</h1>
        <h2>{stats.average}</h2>
        <p>Average Score</p>
      </div>

      <div className="stat-card">
        <h1>🏆</h1>
        <h2>{stats.highest}</h2>
        <p>Highest Score</p>
      </div>

      <div className="stat-card">
        <h1>📈</h1>
        <h2>{stats.success}%</h2>
        <p>Success Rate</p>
      </div>

    </div>
  );
}

export default Stats;