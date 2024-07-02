"use client"

import React from 'react';
import { IconButton, AppBar, Toolbar, Container, Typography, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
<AppBar>
<Container maxWidth="xl">
  <Toolbar>
    <Typography variant="h6" noWrap component="h1" sx={{ flexGrow: 1 }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }} passHref>
        AI 정보 커뮤니티
      </Link>
    </Typography>
    <IconButton color="inherit">
      <SearchIcon /> {/* 검색 아이콘 추가 */}
    </IconButton>
  </Toolbar>
</Container>
</AppBar>
  );
}
