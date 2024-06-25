import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Home from './components/Home';
import Login01 from './login01/Login01';
import Board01 from './board01/Board01';
import WriteView from './board01/components/WriteView';

const Header = () => {


  const localStorageCheker = () => {
    if (!localStorage.theme) return false;
    return localStorage.theme === 'dark' ? true : false;
  };
  
  const [dark, setDark] = useState(localStorageCheker());
  const darkSetButton = () => {
    setDark((state) => {
      const update = !state;
      if (update) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
      return update;
    });
  };
  
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);


  return (
    <div className="header dark:bg-slate-800">
      <h1 className="w-64 text-center text-lg font-semibold text-gray-900 dark:text-gray-100">Header</h1>
      <div className="flex items-center">
        <button
          className={`relative w-12 h-6 flex items-center rounded-full p-1 ${
            dark ? 'bg-gray-600' : 'bg-gray-300'
          }`}
          onClick={darkSetButton}
        >
        <div
          className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            dark ? 'translate-x-6' : 'translate-x-0'
          }`}
        >
        <span className="absolute inset-0 flex items-center justify-center text-gray-600 dark:text-gray-300">
          {dark ? '🌙' : '☀️'}
        </span>
        </div>
      </button>
    </div>
  </div>
  );
};

const Footer = () => (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </footer>
);

const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <div className={`App ${isDark ? 'dark-mode' : ''} dark:bg-slate-900`}>
      <Header />
      <div className="main">
        <Sidebar />
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
  <div className="fixed min-h-screen flex flex-col w-64 text-center font-medium shadow-lg bg-slate-800 text-zinc text-white">
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login01" className="block px-4 py-2 rounded hover:bg-gray-700 transition duration-200">
              Login01
            </Link>
          </li>
          <li>
            <Link to="/board/free" className="block px-4 py-2 rounded hover:bg-gray-700 transition duration-200">
              Board01
            </Link>
          </li>
        </ul>
      </nav>
    </div>
);

export default App;
