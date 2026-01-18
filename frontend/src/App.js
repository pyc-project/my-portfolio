import React, { useState } from 'react';
import './App.css';
import MatrixRain from './js/Matrix'; 

function App() {
  const [isPending, setIsPending] = useState(false); 
  const [id, setId] = useState('');      
  const [password, setPassword] = useState('');      
  const [authCode, setAuthCode] = useState('');      

  // 1. 로그인 요청 (ID/PW 확인 및 난수 생성 요청)
  const handleLogin = async () => {
    if(!id || !password) {
      alert("Please enter your IDENTITY.");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: id,
          password: password
        }),
      });

      if (response.ok) {
        alert("CREDENTIALS ACCEPTED. ADMIN NOTIFICATION SENT.");
        setIsPending(true);
      } else {
        alert("ACCESS DENIED: INVALID CREDENTIALS");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("SYSTEM ERROR: UNABLE TO REACH SERVER");
    }
  };

  // 2. 인증번호 확인 요청
  const handleVerify = async () => {
    try {
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: id,
          authCode: authCode
        }),
      });

      if (response.ok) {
        alert("ACCESS GRANTED. WELCOME ADMIN.");
        // 여기서 메인 포트폴리오 화면으로 이동하는 로직을 넣으시면 됩니다.
      } else {
        alert("CRITICAL ERROR: INVALID AUTH_CODE");
      }
    } catch (error) {
      alert("SERVER ERROR: VERIFICATION FAILED");
    }
  };

  return (
    <div className="hacking-container">
      <MatrixRain /> 

      <div className="login-box">
        <h1 className="glitch">{isPending ? "VERIFICATION REQUIRED" : "SYSTEM ACCESS"}</h1>
        <p className="status">STATUS: {isPending ? "WAITING_FOR_CODE" : "ENABLE"}</p>

        {!isPending ? (
          <>
            <input 
              type="text" 
              placeholder="ID" 
              className="hacking-input" 
              onChange={(e) => setId(e.target.value)} // setId로 수정
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="hacking-input" 
              onChange={(e) => setPassword(e.target.value)} // 추가
            />
            <button className="hacking-button" onClick={handleLogin}>
              ACCESS
            </button>
          </>
        ) : (
          <>
            <p style={{fontSize: '14px', marginBottom: '10px'}}>ADMIN AUTHENTICATION REQUIRED</p>
            <input 
              type="text" 
              placeholder="ENTER 6-DIGIT CODE" 
              className="hacking-input"
              style={{borderColor: '#ff0000', color: '#ff0000'}}
              onChange={(e) => setAuthCode(e.target.value)}
            />
            <button className="hacking-button" onClick={handleVerify} style={{backgroundColor: '#440000'}}>
              VERIFY ACCESS
            </button>
            <button 
              onClick={() => setIsPending(false)} 
              style={{background: 'none', border: 'none', color: '#666', cursor: 'pointer', marginTop: '10px'}}
            >
              Back to Login
            </button>
          </>
        )}

        <div className="terminal-footer" style={{marginTop: '20px', fontSize: '12px'}}>
          <p>{'>'}_ {isPending ? "SECURE_CHANNEL_ESTABLISHED..." : "WAITING FOR CREDENTIALS..."}</p>
        </div>
      </div>
    </div>
  );
}

export default App;