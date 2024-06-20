import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login01 from './login01/Login01';
import Home from './components/Home';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const Header = () => {
  const { isDark, setIsDark } = useTheme();

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="header">
      <h1>Header</h1>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {isDark ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

const Footer = () => (
  <div className="footer">
    <p>Footer</p>
  </div>
);

const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <div className={`App ${isDark ? 'dark-mode' : ''}`}>
      <Header />
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login01" element={<Login01 />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

const Sidebar = () => (
  <nav className="nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login01">Login01</Link>
      </li>
    </ul>
  </nav>
);

export default App;
