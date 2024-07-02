import { Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

export function BoardThumb({board, title}) {
    const boardPartial = board?.slice(-5);
    return (
      <Grid item xs={6}>
        <Card>
          <CardContent style={{ padding: 0 }}>
          <Typography  variant="p" sx={{ color: '#007BFF', borderBottom: '1px dashed #dddddd', width: '100%', display: 'inline-block', fontWeight: 'bold', p: 1 }}>{title}</Typography>
          <Box>
          <List style={{ padding: 0 }}>
              {boardPartial?.map((item) => (
                <ListItem button component="a" key={item.wr_id} href={`/detail/${item.wr_id}`} sx={{ px: 1, py:0.6 }}>
                <ListItemText
                  primary={item.wr_subject}
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
    )
  }