import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", {
        email: email,
        password: password,
      });

      alert(response.data.message);
      navigate("/dashboard");
    } catch (error) {
  console.log("Error:", error);
  console.log("Response:", error.response);

  alert(error.response?.data?.message || error.message);
}
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>AI Interview Portal</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;