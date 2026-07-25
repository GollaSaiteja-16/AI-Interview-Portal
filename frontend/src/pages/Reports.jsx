import { useEffect, useState } from "react";
import api from "../services/api";

function Reports() {

  const [reports, setReports] = useState([]);

  useEffect(() => {

    loadReports();

  }, []);

  const loadReports = async () => {

    try {

      const response = await api.get("/reports");

      setReports(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={{ padding: "30px" }}>

      <h1>📊 Interview Reports</h1>

      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%" }}
      >

        <thead>

          <tr>

            <th>Question</th>

            <th>Technical</th>

            <th>Communication</th>

            <th>Overall</th>

          </tr>

        </thead>

        <tbody>

          {reports.map((item) => (

            <tr key={item.id}>

              <td>{item.question}</td>

              <td>{item.technical_score}</td>

              <td>{item.communication_score}</td>

              <td>{item.overall_score}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Reports;