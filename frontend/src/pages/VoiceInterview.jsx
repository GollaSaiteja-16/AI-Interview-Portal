import { useState } from "react";
import api from "../services/api";
import "./VoiceInterview.css";

function VoiceInterview() {

  const questions = [
    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Explain your final year project.",
    "Where do you see yourself in five years?",
    "Why do you want to join our company?",
    "Describe a challenging situation you handled.",
    "What is your favorite programming language and why?",
    "Explain a project you are proud of."
  ];

  const [question, setQuestion] = useState(questions[0]);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);

  // -------------------------------
  // AI Speaks the Question
  // -------------------------------
  const speakQuestion = () => {

    if (!window.speechSynthesis) {
      alert("Text-to-Speech is not supported.");
      return;
    }

    const speech = new SpeechSynthesisUtterance(question);

    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  };

  // -------------------------------
  // Speech to Text
  // -------------------------------
  const startListening = () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      alert("🎤 Listening... Please speak.");
    };

    recognition.onresult = (event) => {
      setAnswer(event.results[0][0].transcript);
    };

    recognition.onerror = () => {
      alert("Microphone Error.");
    };

    recognition.start();
  };

  // -------------------------------
  // Evaluate Answer
  // -------------------------------
  const evaluateAnswer = async () => {

    if (!answer) {
      alert("Please enter or speak your answer.");
      return;
    }

    try {

      const response = await api.post("/evaluate-answer", {
        question: question,
        answer: answer,
      });

      setResult(response.data);

    } catch (error) {
      console.log(error);
      alert("Evaluation Failed");
    }
  };

  // -------------------------------
  // Next Random Question
  // -------------------------------
  const nextQuestion = () => {

    const random =
      questions[Math.floor(Math.random() * questions.length)];

    setQuestion(random);
    setAnswer("");
    setResult(null);
  };

  return (

    <div className="voice-container">

      <h1>🎤 AI Voice Interview</h1>

      <h3>Question</h3>

      <p><strong>{question}</strong></p>

      <button
        className="voice-btn"
        onClick={speakQuestion}
      >
        🔊 Listen Question
      </button>

      <br /><br />

      <button
        className="voice-btn"
        onClick={nextQuestion}
      >
        ➡ Next Question
      </button>

      <br /><br />

      <button
        className="voice-btn"
        onClick={startListening}
      >
        🎤 Start Speaking
      </button>

      <br /><br />

      <textarea
        rows="8"
        cols="80"
        placeholder="Speak or type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br /><br />

      <button
        className="voice-btn"
        onClick={evaluateAnswer}
      >
        Evaluate Answer
      </button>

      <br /><br />

      {result && (

        <div className="result-box">

          <h2>🎯 Interview Result</h2>

          <p>
            <strong>Technical Score:</strong>{" "}
            {result.technical_score}/10
          </p>

          <p>
            <strong>Communication Score:</strong>{" "}
            {result.communication_score}/10
          </p>

          <p>
            <strong>Overall Score:</strong>{" "}
            {result.overall_score}/10
          </p>

          <hr />

          <h3>💡 AI Feedback</h3>

          <p>{result.feedback}</p>

        </div>

      )}

    </div>
  );
}

export default VoiceInterview;