import { useState } from "react";
import api from "../services/api";
import "./Resume.css";

function Resume() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const uploadResume = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/resume-analysis", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(response.data.analysis);
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }
  };

  return (
    <div className="resume-container">

      <h1>📄 Resume Analysis</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button
        className="upload-btn"
        onClick={uploadResume}
      >
        Upload Resume
      </button>

      <h2>Analysis Result</h2>

      <div className="result-box">
        <pre>{result}</pre>
      </div>

    </div>
  );
}

export default Resume;