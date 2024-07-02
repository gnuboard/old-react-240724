"use client"

import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Grid, Card, CardContent, Container, TextField, Button, List, ListItem, ListItemText, Drawer, IconButton, Link, Avatar } from '@mui/material';
import { Add, AccessTime, Visibility, Menu, YouTube, Chat } from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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

const items = [
  { id: 1, title: 'Meta, 최신단 멀티모달 모델인 Chameleon 출시' },
  { id: 2, title: 'Google I/O 2024: 구글이 발표한 100가지' },
  { id: 3, title: 'Apple, 새로운 AI 기능이 포함된 Mac 및 iPad용 Logic Pro 앱...' },
  { id: 4, title: 'OpenAI, ChatGPT 무료 사용자에게 유료 기능 개방' },
  { id: 5, title: 'OpenAI, GPT-4 언어 모델 업그레이드 버전 ‘GPT-4o’ 발표' },
];

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    time: '24.01.26',
    views: '158',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    time: '24.01.26',
    views: '158',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    time: '24.01.26',
    views: '158',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    time: '24.01.26',
    views: '158',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    time: '24.01.26',
    views: '158',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    time: '24.01.26',
    views: '158',
  }
];

export default function Home() {

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
    <Box sx={{ backgroundColor: '#eeeeee', pt: 12 }}>
      <Header />
      <Box component="main">
        <Container maxWidth="xl" sx={{ px: 1 }} >
          {/* 컨텐츠 영역 */}
          <Grid container spacing={3}>
            {/* AI 최신정보 */}
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
            {/* AI 이벤트 */}
            <Grid item xs={12} md={7} >
              <Card>
                <CardContent style={{ padding: 0 }}>
                  <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '11.2%' }}>
                    <Image
                      src="/top_test_banner.png"
                      alt="로고 이미지"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </CardContent>
              </Card >
              <Card sx={{ marginTop: 3 }}>
                <CardContent style={{ padding: 0 }}>
                  <Swiper
                     modules={[Autoplay, Navigation]}
                     loop={true}
                     rewind={true}
                     navigation={true}
                     autoplay={{
                       delay: 2500,
                       disableOnInteraction: false,
                     }}
                     spaceBetween={10}
                     slidesPerView={1}
                  >
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '28.24%' }}>
                        <Image
                          src="/test_banner01.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '28.24%' }}>
                        <Image
                          src="/test_banner02.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '28.24%' }}>
                        <Image
                          src="/test_banner03.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </CardContent>
              </Card>
              <Grid container spacing={3} sx={{ marginTop: 0 }}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>AI 최신정보</Typography>
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
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>AI 이벤트</Typography>
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
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: 0 }}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>AI 최신정보</Typography>
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
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>AI 이벤트</Typography>
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
                </Grid>
              </Grid>
              <Card sx={{ marginTop: 3 }}>
                <CardContent style={{ padding: 0 }}>
                  <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>AI 갤러리</Typography>
                  <Grid container spacing={1.5} sx={{ padding: '16px' }}>
                    {itemData.slice(0, 6).map((item, index) => (
                      <Grid item key={item.img} xs={12} md={4}>
                            <Box
                              sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                width: '100%',
                                paddingTop: '64%',
                                '&:hover img': {
                                  transform: 'scale(1.1)',
                                },
                                '&:hover .title-overlay': {
                                  opacity: 1,
                                  transform: 'translateY(0)',
                                },
                              }}
                            >
                                <Image
                                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                  alt={item.title}
                                  layout="fill"
                                  objectFit="cover"
                                  style={{
                                    transition: 'transform 0.3s ease',
                                  }}
                                />
                              <Box
                                className="title-overlay"
                                sx={{
                                  position: 'absolute',
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))', // 그라디언트 배경
                                  color: 'white',
                                  padding: '8px',
                                  opacity: 0,
                                  transform: 'translateY(100%)',
                                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                                }}
                              >
                                <Box>{item.title}</Box>
                                <Box sx={{ display: 'flex', gap: '16px', fontSize: '0.875em', color: 'rgba(255, 255, 255, 0.7)' }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <AccessTime sx={{ fontSize: '1em' }} />
                                    <span>{item.time}</span>
                                  </Box>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Visibility sx={{ fontSize: '1em' }} />
                                    <span>{item.views}</span>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                </CardContent>
              </Card>
              <Card sx={{ marginTop: 3 }}>
               <Grid container sx={{ padding: '8px' }}>
                <Grid item xs={12} md={4}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>AI TOP 100</Typography>
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
                </Grid>
                <Grid item xs={12} md={4} sx={{ borderLeft: '1px solid #eeeeee' }}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>디자인/이미지</Typography>
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
                </Grid>
                <Grid item xs={12} md={4} sx={{ borderLeft: '1px solid #eeeeee' }}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>영상/제작/편집</Typography>
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
                </Grid>
              </Grid>
              </Card>
              <Card sx={{ marginTop: 3 }}>
               <Grid container sx={{ padding: '8px' }}>
                <Grid item xs={12} md={4}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>음악/음성/자막</Typography>
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
                </Grid>
                <Grid item xs={12} md={4} sx={{ borderLeft: '1px solid #eeeeee' }}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>컨텐츠/생산성</Typography>
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
                </Grid>
                <Grid item xs={12} md={4} sx={{ borderLeft: '1px solid #eeeeee' }}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>WEB/APP/개발</Typography>
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
                </Grid>
              </Grid>
              </Card>
              <Card sx={{ marginTop: 3 }}>
               <Grid container sx={{ padding: '8px' }}>
                <Grid item xs={12} md={4}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>업무용/효율성</Typography>
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
                </Grid>
                <Grid item xs={12} md={4} sx={{ borderLeft: '1px solid #eeeeee' }}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>교육용/스터디</Typography>
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
                </Grid>
                <Grid item xs={12} md={4} sx={{ borderLeft: '1px solid #eeeeee' }}>
                    <CardContent style={{ padding: 0 }}>
                    <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>기타 AI Tool</Typography>
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
                </Grid>
              </Grid>
              </Card>
              <Card sx={{ marginY: 3 }}>
                <CardContent style={{ padding: 0 }}>
                <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>OpenAI</Typography>
                <Box sx={{ p:3 }}>
                <Swiper
                     modules={[Autoplay]}
                     loop={true}
                     rewind={true}
                     autoplay={{
                       delay: 2500,
                       disableOnInteraction: false,
                     }}
                     spaceBetween={10}
                     slidesPerView={4}
                  >
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '50%' }}>
                        <Image
                          src="/open_ai01.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '50%' }}>
                        <Image
                          src="/open_ai02.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '50%' }}>
                        <Image
                          src="/open_ai03.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '50%' }}>
                        <Image
                          src="/open_ai04.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '50%' }}>
                        <Image
                          src="/open_ai01.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '50%' }}>
                        <Image
                          src="/open_ai02.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '50%' }}>
                        <Image
                          src="/open_ai03.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '50%' }}>
                        <Image
                          src="/open_ai04.png"
                          alt="로고 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Box>
                </CardContent>
              </Card>
            </Grid>
            {/* 로그인 */}
            <Grid item md={2.5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Card>
                <CardContent>
                  <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <TextField label="아이디" variant="outlined" size="small" sx={{ mb: 1, '& input': { fontSize: '12px' } }} />
                    <TextField label="비밀번호" type="password" variant="outlined" size="small" sx={{ mb: 1, '& input': { fontSize: '12px' } }} />
                    <Button variant="contained" onClick={handleLogin} sx={{ backgroundColor: '#007BFF', color: 'white' }}>
                      로그인
                    </Button>
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
  );
}
