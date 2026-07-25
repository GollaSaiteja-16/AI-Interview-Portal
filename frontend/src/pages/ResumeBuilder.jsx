import { useState } from "react";
import api from "../services/api";
import { jsPDF } from "jspdf";

function ResumeBuilder() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");
  const [resume, setResume] = useState("");

  const generateResume = async () => {

    try {

      const response = await api.post("/generate-resume", {
        name,
        email,
        skills,
        projects
      });

      setResume(response.data.resume);

    } catch (error) {

      console.log(error);
      alert("Resume Generation Failed");

    }

  };
  const downloadPDF = () => {

  if (!resume) {
    alert("Please generate a resume first.");
    return;
  }

  const doc = new jsPDF();

  doc.setFont("helvetica");
  doc.setFontSize(16);
  doc.text("AI Generated Resume", 20, 20);

  doc.setFontSize(12);

  const lines = doc.splitTextToSize(resume, 170);

  doc.text(lines, 20, 35);

  doc.save("Resume.pdf");
};

  return (

    <div style={{padding:"30px"}}>

      <h1>📄 AI Resume Builder</h1>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br /><br />

      <textarea
        rows="4"
        placeholder="Skills"
        value={skills}
        onChange={(e)=>setSkills(e.target.value)}
      />

      <br /><br />

      <textarea
        rows="5"
        placeholder="Projects"
        value={projects}
        onChange={(e)=>setProjects(e.target.value)}
      />

      <br /><br />

      <button onClick={generateResume}>
        Generate Resume
      </button>

      <br /><br />
      <br /><br />

      <button onClick={downloadPDF}>
        📄 Download PDF
      </button>

      <br /><br />

      <textarea
        rows="20"
        cols="90"
        value={resume}
        readOnly
      />

    </div>

  );

}

export default ResumeBuilder;