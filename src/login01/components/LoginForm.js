// src/components/LoginForm.js

import { useState, useEffect, useRef } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const usernameRef = useRef(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      console.log(username, password);

      const response = await fetch(`${API_BASE_URL}/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: '',
          username: username,
          password: password,
          scope: '',
          client_id: '',
          client_secret: ''
        }).toString()
      });

      const data = await response.json();  // 응답 데이터를 한 번만 파싱

      if (response.ok) {
        console.log(response);
        console.log(data);

        // 토큰 저장 (로컬 스토리지나 쿠키에 저장하는 등 필요에 따라 변경)
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('refreshToken', data.refresh_token);

        // 로그인 성공 시 부모 컴포넌트에 알림
        onLogin(username);

        console.log('Login successful');
      } else {
        throw new Error(data.detail || 'Network response was not ok');
      }
    } catch (error) {
      setError(error.message || 'Login failed. Please check your username and password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <form 
        onSubmit={handleLogin} 
        className="bg-white w-full max-w-sm"
      >
        <div className="mb-4">
          <input
            type="text"
            value={username}
            placeholder="Username"
            ref={usernameRef}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {error && <p className="mb-4 text-red-600">{error}</p>}
        {isLoading ? (
          <p className="text-center text-gray-600">Logging in...</p>
        ) : (
          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Login
          </button>
        )}
      </form>
  );
};

export default LoginForm;
