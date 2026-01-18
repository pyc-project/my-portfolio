import React from 'react'; // useRef 필요 없음 (Matrix.js가 관리)
import './App.css';
import MatrixRain from './js/Matrix'; // 경로 확인 필수!

function App() {
  return (
    <div className="hacking-container">
      {/* 1. 배경 컴포넌트를 여기에 배치 */}
      <MatrixRain /> 

      {/* 2. 로그인 박스 */}
      <div className="login-box">
        <h1 className="glitch">SYSTEM ACCESS</h1>
        <p className="status">STATUS: ENABLE</p>
        <input type="text" placeholder="IDENTITY" className="hacking-input" />
        <input type="password" placeholder="ACCESS_CODE" className="hacking-input" />
        <button className="hacking-button" onClick={() => alert('Access Denied: Intrusion Detected!')}>
          LOGIN
        </button>
        <div className="terminal-footer" style={{marginTop: '20px', fontSize: '12px'}}>
          <p>'{'>'}'_ WAITING FOR CREDENTIALS...</p>
        </div>
      </div>
    </div>
  );
}

export default App;