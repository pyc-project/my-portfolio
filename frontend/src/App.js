import React, { useState } from 'react';
import './App.css';
import MatrixRain from './js/Matrix'; 
import axios from 'axios';

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
        // 2. 백엔드(VMware 리눅스) 공인 IP로 요청 전송
        const response = await axios.post('http://125.176.211.131:8080/api/login', 
            {
                username: id,
                password: password
            }, 
            {
                headers: { 'Content-Type': 'application/json' }
            }
        );

        // 3. 서버 응답 결과 확인
        if (response.data.result === 'SUCCESS') {
            alert("Handshake Successful. Verification Required.");
            setIsPending(true); // 성공 시 2단계 인증창으로 전환
        }
    } catch (error) {
        console.error("Connection Failed:", error);
        alert("ACCESS DENIED: Check your connection or credentials.");
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
            <button className="hacking-button"  style={{backgroundColor: '#440000'}}>
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