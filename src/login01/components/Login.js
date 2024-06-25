// src/components/Login.js

import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Correct the import for jwt-decode
import LoginForm from './LoginForm';
import WelcomeMessage from './WelcomeMessage';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [sub, setSub] = useState(''); // 추가된 sub 상태 변수
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태 변수

  useEffect(() => {
    // sessionStorage에서 토큰을 확인하여 로그인 상태 설정
    const token = sessionStorage.getItem('accessToken');
    const savedUsername = sessionStorage.getItem('username');
    const savedUserInfo = sessionStorage.getItem('userInfo');
    if (token && savedUsername) {
      const decodedToken = jwtDecode(token); // jwtDecode 함수 사용
      setSub(decodedToken.sub); // sub 값을 설정
      setIsLoggedIn(true);
      setUsername(savedUsername);
      if (savedUserInfo) {
        setUserInfo(JSON.parse(savedUserInfo));
      } else {
        fetchUserInfo(token); // 사용자 정보 조회
      }
    }

    // // beforeunload 이벤트 핸들러 등록
    // const handleBeforeUnload = () => {
    //   sessionStorage.setItem('isBrowserClosing', 'true');
    // };

    // // unload 이벤트 핸들러 등록
    // const handleUnload = () => {
    //   if (sessionStorage.getItem('isBrowserClosing') === 'true') {
    //     localStorage.clear();
    //     sessionStorage.clear();
    //   }
    // };

    // window.addEventListener('beforeunload', handleBeforeUnload);
    // window.addEventListener('unload', handleUnload);

    // // cleanup 함수에서 이벤트 핸들러 제거
    // return () => {
    //   window.removeEventListener('beforeunload', handleBeforeUnload);
    //   window.removeEventListener('unload', handleUnload);
    // };
  }, []);

  const handleLogin = (username) => {
    const token = localStorage.getItem('accessToken');
    const decodedToken = jwtDecode(token); // jwtDecode 함수 사용
    setSub(decodedToken.sub); // sub 값을 설정
    sessionStorage.setItem('accessToken', token);  // 세션스토리지에 토큰 저장
    sessionStorage.setItem('username', username);  // 유저네임을 세션스토리지에 저장
    setUsername(username);
    setIsLoggedIn(true);
    fetchUserInfo(token); // 로그인 성공 후 사용자 정보 조회
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setIsLoggedIn(false);
    setUsername('');
    setSub('');
    setUserInfo(null);
  };

  const fetchUserInfo = async (token) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/members/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }

      const data = await response.json();
      console.log('User info:', data);
      setUserInfo(data); // 사용자 정보 상태 업데이트
      sessionStorage.setItem('userInfo', JSON.stringify(data)); // 사용자 정보 세션스토리지에 저장
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-left dark:text-white">Login</h2>
      {isLoggedIn ? (
        <>
          <WelcomeMessage username={username} />
          {/* <p>Sub: {sub}</p> */}
          {userInfo && (
            <div>
              <h3>회원정보</h3>
              <p>아이디: {userInfo.mb_id}</p>
              <p>이름: {userInfo.mb_name}</p>
              <p>포인트: {userInfo.mb_point.toLocaleString()}점</p>
              {/* 필요한 다른 사용자 정보 표시 */}
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Login;
