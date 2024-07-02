'use client';

import * as React from 'react';
import './globals.css';
import theme from './theme';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Header from './header';
import Footer from './footer';
import MobileMenu from './mobileMenu';

const categories = {
  "AIIZ Member": [
    "AI최신정보",
    "AI영상뉴스",
    "AI이벤트",
    "AI 갤러리",
  ],
  "Community": [
    "자유게시판",
    "OPENAI GPT",
    "AI 질문/답변",
  ],
  "Tool Ai Service": [
    "베스트 TOP100",
    "디자인/이미지",
    "영상/제작/편집",
    "음악/음성/자막",
    "컨텐츠/생산성",
    "WEB/APP/개발",
    "업무용/효율성",
    "교육용/스터디",
    "기타 AI 서비스"
  ]
};

export default function RootLayout({ children }) {

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <html lang="en">
      <head />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <Header />
            {children}
          <Footer />
          <MobileMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} categories={categories} />
        </body>
      </ThemeProvider>
    </html>
  );
}