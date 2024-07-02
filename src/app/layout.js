'use client';

import * as React from 'react';
import './globals.css';
import theme from './theme';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { Box, Typography, Grid, Card, CardContent, Container, TextField, Button, List, ListItem, ListItemText, Link, Avatar } from '@mui/material';
import { Add, YouTube, Chat } from '@mui/icons-material';

import Header from './components/header';
import Footer from './components/footer';
import MobileMenu from './components/mobileMenu';

import { categories, items, itemData } from './data/dummyData';

export default function RootLayout({ children }) {

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLogin = () => {
    // 로그인 처리 로직
    console.log('로그인 버튼 클릭');
  };

  return (
    <html lang="en">
      <head />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
        <Box sx={{ backgroundColor: '#eeeeee' }}>
          <Header />
          <Box component="main" sx={{ pt: 12 }}>
            <Container maxWidth="xl" sx={{ px: 1 }} >
              <Grid container spacing={3}>
                <Grid item md={2.5} sx={{ display: { xs: 'none', md: 'block' } }}>
                  <Card>
                  <CardContent style={{ padding: 0 }}>
                    <Typography variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>
                      Category
                    </Typography>
                    <Box p={2}>
                      {Object.keys(categories).map((mainCategory) => (
                        <Box key={mainCategory} mb={1}>
                          <Typography variant="p" sx={{ display: 'block', fontSize: '14px', backgroundColor: '#eee', color: '#555', width: '100%', fontWeight: 'bold',borderRadius: '4px', mb: 1, px: 1, py: 0.4 }}>
                            {mainCategory}
                          </Typography>
                          {categories[mainCategory].map((subCategory, index) => (
                            <ListItem button component="a" key={index} href={`/category/${index}`} sx={{ color: '#777', mb: 1, px: 1, py:0.1 }} >
                              <ListItemText
                                primary={subCategory}
                                primaryTypographyProps={{
                                  style: {
                                    fontSize: '12px',      // 폰트 크기 설정
                                    color: '#000',          // 폰트 색상 설정
                                    whiteSpace: 'nowrap',   // 한 줄로만 표시되도록 설정
                                    overflow: 'hidden',     // 넘치는 텍스트 숨기기
                                    textOverflow: 'ellipsis', // 말줄임 표시
                                  }
                                }}
                              />
                            </ListItem>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                  </Card>
                  <Card sx={{ marginTop: 3 }}>
                  <CardContent style={{ padding: 0 }}>
                    <Typography variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>
                      Quick menu
                    </Typography>
                    <Box p={2}>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={4}>
            <Link href="/your-new-page-url" underline="none">
              <Avatar sx={{ border: '2px solid #007BFF', background: 'transparent', width: 70, height: 70 }}>
                <Add sx={{ fontSize: 32, color: '#007BFF' }} />
              </Avatar>
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                새글
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/your-youtube-page-url" underline="none">
              <Avatar sx={{ bgcolor: '#007BFF', width: 70, height: 70 }}>
                <YouTube sx={{ fontSize: 32 }} />
              </Avatar>
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                유튜브
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/your-kakaotalk-page-url" underline="none">
              <Avatar sx={{ bgcolor: '#007BFF', width: 70, height: 70 }}>
                <Chat sx={{ fontSize: 32 }} />
              </Avatar>
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                카카오톡
              </Typography>
            </Link>
          </Grid>
                    </Grid>
                  </Box>
                  </CardContent>
                  </Card>
                  <Card sx={{ marginTop: 3 }}>
                  <CardContent style={{ padding: 0 }}>
                    <Typography variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>
                      Statistics
                    </Typography>
                    <Box p={2}>
                    <Grid container spacing={0} justifyContent="center" alignItems="center">
                      <Grid item xs={6}>
                        <Typography variant="body2" align="left">
                          현재 접속자
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 1 }}>
                          오늘 방문자
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 1 }}>
                          어제 방문자
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 1 }}>
                          최대 방문자
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 1 }}>
                          전체 방문자
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 1 }}>
                          전체 게시물
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 1 }}>
                          전체 댓글수
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" align="right">
                          <span>9</span> 명
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 1 }}>
                          <span>200</span> 명
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 1 }}>
                          <span>615</span> 명
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 1 }}>
                          <span>1,290</span> 명
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 1 }}>
                          <span>83,918</span> 명
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 1 }}>
                          <span>1,046</span> 명
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 1 }}>
                          <span>29</span> 명
                        </Typography>

                      </Grid>
                    </Grid>
                  </Box>
                  </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={7} >
                  {children}
                </Grid>
                <Grid item md={2.5} sx={{ display: { xs: 'none', md: 'block' } }}>
                  <Card>
                    <CardContent>
                      <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <TextField label="아이디" variant="outlined" size="small" sx={{ mb: 1, '& input': { fontSize: '12px' } }} />
                        <TextField label="비밀번호" type="password" variant="outlined" size="small" sx={{ mb: 1, '& input': { fontSize: '12px' } }} />
                        <Button variant="contained" onClick={handleLogin} sx={{ backgroundColor: '#007BFF', color: 'white' }}>
                          로그인
                        </Button>
                        <Link href="/signup" passHref>
                          <Typography variant="body2" align="center" sx={{ marginTop: '20px' }}>
                            회원가입
                          </Typography>
                        </Link>
                      </Box>
                    </CardContent>
                  </Card>
                  <Card sx={{ marginTop: 3 }}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>New Post</Typography>
                    <Box>
                  <List style={{ padding: 4 }}>
                        {items.map((item) => (
                          <ListItem button component="a" key={item.id} href={`/detail/${item.id}`} sx={{ px: 0.5, py:0.2 }}>
                            <ListItemText
                              primary={item.title}
                              primaryTypographyProps={{
                                style: {
                                  fontSize: '12px',      // 폰트 크기 설정
                                  color: '#000',          // 폰트 색상 설정
                                  whiteSpace: 'nowrap',   // 한 줄로만 표시되도록 설정
                                  overflow: 'hidden',     // 넘치는 텍스트 숨기기
                                  textOverflow: 'ellipsis', // 말줄임 표시
                                }
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    </CardContent>
                  </Card>
                  <Card sx={{ marginTop: 3 }}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>New Comment</Typography>
                    <Box>
                  <List style={{ padding: 4 }}>
                        {items.map((item) => (
                          <ListItem button component="a" key={item.id} href={`/detail/${item.id}`} sx={{ px: 0.5, py:0.2 }}>
                            <ListItemText
                              primary={item.title}
                              primaryTypographyProps={{
                                style: {
                                  fontSize: '12px',      // 폰트 크기 설정
                                  color: '#000',          // 폰트 색상 설정
                                  whiteSpace: 'nowrap',   // 한 줄로만 표시되도록 설정
                                  overflow: 'hidden',     // 넘치는 텍스트 숨기기
                                  textOverflow: 'ellipsis', // 말줄임 표시
                                }
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    </CardContent>
                  </Card>
                  <Card sx={{ marginTop: 3 }}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>Notice</Typography>
                    <Box>
                  <List style={{ padding: 4 }}>
                        <ListItem button component="a" href={`/notice/1`} sx={{ px: 0.5, py:0.2 }}>
                          <ListItemText
                            primary={'AI 정보 커뮤니티 SNS 채널안내'}
                            primaryTypographyProps={{
                              style: {
                                fontSize: '12px',      // 폰트 크기 설정
                                color: '#000',          // 폰트 색상 설정
                                whiteSpace: 'nowrap',   // 한 줄로만 표시되도록 설정
                                overflow: 'hidden',     // 넘치는 텍스트 숨기기
                                textOverflow: 'ellipsis', // 말줄임 표시
                              }
                            }}
                          />
                        </ListItem>
                        <ListItem button component="a" href={`/notice/1`} sx={{ px: 0.5, py:0.2 }}>
                          <ListItemText
                            primary={'AI 정보 커뮤니티 SNS 채널안내'}
                            primaryTypographyProps={{
                              style: {
                                fontSize: '12px',      // 폰트 크기 설정
                                color: '#000',          // 폰트 색상 설정
                                whiteSpace: 'nowrap',   // 한 줄로만 표시되도록 설정
                                overflow: 'hidden',     // 넘치는 텍스트 숨기기
                                textOverflow: 'ellipsis', // 말줄임 표시
                              }
                            }}
                          />
                        </ListItem>
                      </List>
                    </Box>
                    </CardContent>
                  </Card>
                  <Card sx={{ marginTop: 3 }}>
                  <CardContent style={{ padding: 0 }}>
                    <Typography variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>
                      Statistics
                    </Typography>
                    <Box p={2}>
                    <Grid container spacing={0} justifyContent="center" alignItems="center">
                      <Grid item xs={6}>
                        <Typography variant="body2" align="left">
                          DANIELOH
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                          DANIELOH
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                          DANIELOH
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                          DANIELOH
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                          DANIELOH
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                          DANIELOH
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                          DANIELOH
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                          DANIELOH
                        </Typography>
                        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
                          DANIELOH
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" align="right">
                          <span>210</span>
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                          <span>210</span>
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                          <span>210</span>
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                          <span>210</span>
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                          <span>210</span>
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                          <span>210</span>
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                          <span>210</span>
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                          <span>210</span>
                        </Typography>
                        <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                          <span>210</span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Footer />
          <MobileMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} categories={categories} />
        </Box>
        </body>
      </ThemeProvider>
    </html>
  );
}