"use client"

import * as React from 'react';
import Image from 'next/image';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { AccessTime, Visibility } from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { items, itemData } from './data/dummyData';

export default function Home() {

  return (
    <>
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
      <Grid item xs={12} md={4} sx={{ borderLeft: {xs: 'none', md: '1px solid #eeeeee'} }}>
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
      <Grid item xs={12} md={4} sx={{ borderLeft: {xs: 'none', md: '1px solid #eeeeee'} }}>
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
      <Grid item xs={12} md={4} sx={{ borderLeft: {xs: 'none', md: '1px solid #eeeeee'} }}>
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
      <Grid item xs={12} md={4} sx={{ borderLeft: {xs: 'none', md: '1px solid #eeeeee'} }}>
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
      <Grid item xs={12} md={4} sx={{ borderLeft: {xs: 'none', md: '1px solid #eeeeee'} }}>
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
      <Grid item xs={12} md={4} sx={{ borderLeft: {xs: 'none', md: '1px solid #eeeeee'} }}>
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
    </>
  );
}
