import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Home from './components/Home';
import Login01 from './login01/Login01';
import Board01 from './board01/Board01';
import WriteView from './board01/components/WriteView';

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
            <Route path="/board/:bo_table" element={<Board01 />} />
            <Route path="/board/:bo_table/:wr_id" element={<WriteView />} />
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
      <li>
        <Link to="/board/free">Board01</Link>
      </li>
    </ul>
  </nav>
);

export default App;
