"use client"

import React from 'react';
import { IconButton, AppBar, Toolbar, Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
<AppBar>
<Container maxWidth="xl">
  <Toolbar>
    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
      AI 정보 커뮤니티
    </Typography>
    <IconButton color="inherit">
      <SearchIcon /> {/* 검색 아이콘 추가 */}
    </IconButton>
  </Toolbar>
</Container>
</AppBar>
  );
}
