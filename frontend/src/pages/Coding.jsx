import { useState } from "react";
import api from "../services/api";
import "./Coding.css";

function Coding() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const submitCode = async () => {
   
    if (!code) {
      alert("Please write your code.");
      return;
    }

    try {
      const response = await api.post("/evaluate-code", {
        question: "Write a Python function to reverse a string.",
        code: code,
      });


     setResult(response.data.feedback);
    } catch (error) {
      console.log(error);
      alert("Code Evaluation Failed");
    }
  };

  return (
    <div className="coding-container">

      <h1>💻 Coding Interview</h1>

      <h3>Question</h3>

      <p>Write a Python function to reverse a string.</p>

      <textarea
        rows="15"
        cols="80"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
      />

      <br /><br />

      <button
        className="submit-btn"
        onClick={submitCode}
      >
        Submit Code
      </button>

      <br /><br />

      <div className="result-box">
        <pre>{result}</pre>
      </div>

    </div>
  );
}

export default Coding;