import { useState } from "react";
import api from "../services/api";

function HRInterview() {
  const [question] = useState("Why should we hire you?");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const evaluateHR = async () => {
    if (!answer) {
      alert("Please enter your answer.");
      return;
    }

    try {
      const response = await api.post("/evaluate-hr", {
        question: question,
        answer: answer,
      });

      setFeedback(response.data.feedback);
    } catch (error) {
      console.log(error);
      alert("Evaluation Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>👨‍💼 HR Interview</h1>

      <h3>Question</h3>

      <p>{question}</p>

      <textarea
        rows="10"
        cols="80"
        placeholder="Type your answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br /><br />

      <button onClick={evaluateHR}>
        Submit Answer
      </button>

      <br /><br />

      <h3>AI Feedback</h3>

      <textarea
        rows="15"
        cols="80"
        value={feedback}
        readOnly
      />
    </div>
  );
}

export default HRInterview;