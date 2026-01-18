import React, { useState, useEffect } from 'react';
import '../css/ProtfolioMain.css';

const PortfolioMain = () => {
    const [logs, setLogs] = useState([]);
    const fullLogs = [
        "신원 확인 초기화 중: 박용천...",
        "보유 자격: 정보처리산업기사 취득",
        "보유 자격: 리눅스마스터 2급 취득",
        "보유 자격: 네트워크관리사 2급 취득",
        "보유 자격: 컴퓨터활용능력 1급 취득",
        "보유 자격: 전기기능사",
        "보유 자격: 오토캐드 2급",
        "시스템 상태: 최적화됨 (Online)"
    ];

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < fullLogs.length) {
                setLogs(prev => [...prev, fullLogs[currentIndex]]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dashboard-container">
            {/* 배경 효과용 스캔라인 */}
            <div className="scanline"></div>

            <header className="dashboard-header">
                <div className="status-item"><span className="blink">●</span> STATUS: ONLINE</div>
                <div className="status-item">USER: 박용천 (1995.12.26)</div>
                <div className="status-item">CLASS: 석사졸업(정보보안)</div>
            </header>

            <div className="main-grid">
                {/* 기술 스택 섹션 */}
                <section className="grid-item tech-stack">
                    <div className="corner-decoration top-left"></div>
                    <div className="corner-decoration bottom-right"></div>
                    <h3>[TECH_STACK]</h3>
                    <div className="stack-group">
                        <div className="stack-info">
                            <p>Network (ARP/NAT/DHCP)</p>
                            <div className="progress-bar"><div className="progress" style={{width: '90%'}}></div></div>
                        </div>
                        <div className="stack-info">
                            <p>Cloud (AWS SAA Ready)</p>
                            <div className="progress-bar"><div className="progress" style={{width: '75%'}}></div></div>
                        </div>
                        <div className="stack-info">
                            <p>Linux (LVM/RAID/iSCSI)</p>
                            <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
                        </div>
                        <div className="stack-info">
                            <p>Security (Metasploit/MITM)</p>
                            <div className="progress-bar"><div className="progress" style={{width: '80%'}}></div></div>
                        </div>
                    </div>
                </section>

                {/* 중앙 터미널 로그 섹션 */}
                <section className="grid-item bio-logs">
                    <h3>[SYSTEM_LOG]</h3>
                    <div className="log-window">
                        {logs.map((log, index) => (
                            <p key={index} className="log-entry">
                                <span className="prompt">{'>'}</span> {log}
                            </p>
                        ))}
                        <span className="cursor">_</span>
                    </div>
                </section>

                {/* 경력 데이터 섹션 */}
                <section className="grid-item experience">
                    <div className="corner-decoration top-right"></div>
                    <h3>[EXP_DATA]</h3>
                    <div className="exp-content">
                        <div className="exp-badge">
                            <span className="exp-num">02</span>
                            <span className="exp-unit">YEARS</span>
                        </div>
                        <p className="exp-title">SI Development Expert</p>
                        <ul className="project-list">
                            <li>• 인프라 보안 아키텍처 연구</li>
                            <li>• 시스템 취약점 점검 및 분석</li>
                            <li>• Spring Boot & React 기반 개발</li>
                        </ul>
                    </div>
                </section>
                                <section className="grid-item experience">
                    <div className="corner-decoration top-right"></div>
                    <h3>[EXP_DATA]</h3>
                    <div className="exp-content">
                        <div className="exp-badge">
                            <span className="exp-num">01</span>
                            <span className="exp-unit">YEARS</span>
                        </div>
                        <p className="exp-title">SI Development Expert</p>
                        <ul className="project-list">
                            <li>• 컴퓨터 SALSE</li>
                            <li>• 시스템 운영</li>
                            <li>• 유지보수</li>
                        </ul>
                    </div>
                </section>
            </div>

            <footer className="dashboard-footer">
                DESIGNED BY PARK YONG CHEON. (C) 2026.
            </footer>
        </div>
    );
};

export default PortfolioMain;