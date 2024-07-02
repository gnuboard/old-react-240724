"use client"

import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#e6e6e6', pt: 1, borderTop: '1px solid #dddddd', borderBottom: '1px solid #dddddd'}}>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="space-between" sx={{ pb: 1}}>
          <Grid item>
            <Link href="#" underline="none" color="inherit" sx={{ mx: 1, fontSize: '12px' }}>
              사이트 소개
            </Link>
            <Link href="#" underline="none" color="inherit" sx={{ mx: 1, fontSize: '12px' }}>
              개인정보처리방침
            </Link>
            <Link href="#" underline="none" color="inherit" sx={{ mx: 1, fontSize: '12px' }}>
              이메일 무단수집거부
            </Link>
            <Link href="#" underline="none" color="inherit" sx={{ mx: 1, fontSize: '12px' }}>
              책임의 한계와 법적고지
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none" color="inherit" sx={{ mx: 1, fontSize: '12px' }}>
              이용안내
            </Link>
            <Link href="#" underline="none" color="inherit" sx={{ mx: 1, fontSize: '12px' }}>
              문의하기
            </Link>
            <Link href="#" underline="none" color="inherit" sx={{ mx: 1, fontSize: '12px' }}>
              모바일버전
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ bgcolor: '#ebebeb', pb: 3}}>
        <Container maxWidth="xl">
          <Typography variant="body2" color="textSecondary" align="left" sx={{ p: 1, fontSize: '12px', fontWeight: 'bold' }}>
            AI 정보 커뮤니티 All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
