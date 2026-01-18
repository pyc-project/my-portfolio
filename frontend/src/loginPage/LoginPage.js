import React, { useState } from 'react';

const LoginPage = () => {
    const [isPending, setIsPending] = useState(false); // 인증 대기 상태
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [authCode, setAuthCode] = useState('');

    // 1. 첫 번째 로그인 시도 (ID/PW 제출)
    const handleLogin = async (e) => {
        e.preventDefault();
        
        // 여기에 Spring Boot API 호출 로직이 들어갑니다.
        console.log("로그인 시도:", credentials);
        
        // 성공했다고 가정하고 인증 번호 입력 창으로 전환
        setIsPending(true); 
        alert('관리자에게 인증 번호가 발송되었습니다.');
    };

    // 2. 관리자 인증 번호 확인
    const handleVerify = async (e) => {
        e.preventDefault();
        // 백엔드에 authCode를 보내서 검증
        if (authCode === "123456") { // 예시 번호
            alert('인증 성공! 환영합니다.');
        } else {
            alert('Access Denied: Invalid Authentication Code!');
        }
    };

    return (
        <div className="login-container" style={{ backgroundColor: '#000', color: '#0f0', padding: '20px' }}>
            <h2>{isPending ? "ADMIN VERIFICATION" : "CYBERSECURITY PORTAL"}</h2>
            
            {!isPending ? (
                /* 로그인 폼 */
                <form onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    />
                    <button type="submit" className="hacking-button">
                        LOGIN
                    </button>
                </form>
            ) : (
                /* 인증 번호 입력 폼 */
                <form onSubmit={handleVerify}>
                    <p>Enter the 6-digit code sent to Admin:</p>
                    <input 
                        type="text" 
                        value={authCode}
                        placeholder="000000"
                        onChange={(e) => setAuthCode(e.target.value)}
                    />
                    <button type="submit" className="hacking-button" style={{ color: 'red' }}>
                        VERIFY ACCESS
                    </button>
                </form>
            )}
        </div>
    );
};

export default LoginPage;