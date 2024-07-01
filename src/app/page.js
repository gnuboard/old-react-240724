"use client"

import * as React from 'react';
import { Typography, Grid, Card, CardContent, Container, TextField, Button, List, ListItem, ListItemText, ImageList, ImageListItem  } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Header from './header';
import Footer from './footer';
import { getNewWrites } from './api';
import { BoardThumb } from './Components/Board';

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
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export default async function Home() {
  const { free, gallery, qa, notice } = await getNewWrites();
  const handleLogin = () => {
    // 로그인 처리 로직
    console.log('로그인 버튼 클릭');
  };
  return (
    <Box>
      <Header />
      <Box component="main" sx={{  backgroundColor: '#eeeeee', p: 3, mt: 8 }}>
        <Container maxWidth="xl">
          {/* 컨텐츠 영역 */}
          <Grid container spacing={3}>
            {/* AI 최신정보 */}
            <Grid item xs={12} md={2.5}>
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
                        <ListItem button component="a" key={index} href={`/category/${index}`} sx={{ color: '#777', mb: 1, px: 1, py:0.3 }} >
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
            </Grid>
            {/* AI 이벤트 */}
            <Grid item xs={12} md={7}>
              <Card>
                <CardContent style={{ padding: 0 }}>
                  <div className="topImageContainer">
                    <Image
                      src="/top_test_banner.png"  // public 디렉토리 내 경로를 지정합니다.
                      alt="로고 이미지"
                      layout="fill"  // 이미지를 부모 요소와 같은 크기로 채우도록 설정합니다.
                    />
                  </div>
                </CardContent>
              </Card >
              <Card sx={{ marginTop: 3 }}>
                <CardContent style={{ padding: 0 }}>
                  <Swiper
                     modules={[Autoplay, Navigation]}
                     rewind={true}
                     navigation={true}
                     autoplay={{
                       delay: 2500,
                       disableOnInteraction: false,
                     }}
                     spaceBetween={10}
                     slidesPerView={1}
                    className="middleImageContainer"
                  >
                    <SwiperSlide>
                      <Image
                        src="/test_banner01.png"  // public 디렉토리 내 경로를 지정합니다.
                        alt="로고 이미지"
                        layout="fill"  // 이미지를 부모 요소와 같은 크기로 채우도록 설정합니다.
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/test_banner02.png"  // public 디렉토리 내 경로를 지정합니다.
                        alt="로고 이미지"
                        layout="fill"  // 이미지를 부모 요소와 같은 크기로 채우도록 설정합니다.
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/test_banner01.png"  // public 디렉토리 내 경로를 지정합니다.
                        alt="로고 이미지"
                        layout="fill"  // 이미지를 부모 요소와 같은 크기로 채우도록 설정합니다.
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/test_banner02.png"  // public 디렉토리 내 경로를 지정합니다.
                        alt="로고 이미지"
                        layout="fill"  // 이미지를 부모 요소와 같은 크기로 채우도록 설정합니다.
                      />
                    </SwiperSlide>
                  </Swiper>
                </CardContent>
              </Card>
              <Grid container spacing={3} sx={{ marginTop: 0 }}>
                <BoardThumb board={free} title="자유게시판" />
                <BoardThumb board={gallery} title="갤러리" />
              </Grid>
              <Grid container spacing={3} sx={{ marginTop: 0 }}>
                <BoardThumb board={qa} title="질문/답변" />
                <BoardThumb board={notice} title="공지사항" />
              </Grid>
              <Card sx={{ marginTop: 3 }}>
                <CardContent style={{ padding: 0 }}>
                <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>AI 갤러리</Typography>
                <Box>
                <Grid container spacing={2} sx={{ padding: '16px' }}>
      {itemData.slice(0, 6).map((item, index) => (
        <Grid item key={item.img} xs={4}>
          <ImageListItem sx={{ padding: '8px' }}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
          </ImageListItem>
        </Grid>
      ))}
    </Grid>
                </Box>
                </CardContent>
              </Card>
            </Grid>
            {/* 로그인 */}
            <Grid item xs={12} md={2.5}>
              <Card>
                <CardContent>
                  <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <TextField label="아이디" variant="outlined" size="small" sx={{ mb: 1 }} />
                    <TextField label="비밀번호" type="password" variant="outlined" size="small" sx={{ mb: 1 }} />
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
                  <List style={{ padding: 0 }}>
                    {items.map((item) => (
                      <ListItem button component="a" key={item.id} href={`/detail/${item.id}`} sx={{ px: 1, py:0.6 }}>
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
                  <List style={{ padding: 0 }}>
                    {items.map((item) => (
                      <ListItem button component="a" key={item.id} href={`/detail/${item.id}`} sx={{ px: 1, py:0.6 }}>
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
                  <List style={{ padding: 0 }}>
                    <ListItem button component="a" href={`/notice/1`} sx={{ px: 1, py:0.6 }}>
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
                    <ListItem button component="a" href={`/notice/1`} sx={{ px: 1, py:0.6 }}>
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
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
