
import React from 'react';
import { Box, IconButton, Drawer, Typography, List, ListItem, ListItemText } from '@mui/material';
import Menu from '@mui/icons-material/Menu';

const MobileMenu = ({ drawerOpen, toggleDrawer, categories }) => {
    return (
        <>
   <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#ffffff', boxShadow: '0 -2px 5px rgba(0,0,0,0.1)', zIndex: 1300 }}>
        <IconButton onClick={toggleDrawer(true)} sx={{ width: '100%' }}>
          <Menu sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
      <Drawer anchor="bottom" open={drawerOpen} onClose={toggleDrawer(false)}>
  <Box sx={{ width: 'auto', p: 2 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      Menu
    </Typography>
    <List>
      {Object.keys(categories).map((mainCategory) => (
        <Box key={mainCategory} mb={1}>
          <Typography variant="p" sx={{ display: 'block', fontSize: '14px', backgroundColor: '#eee', color: '#555', width: '100%', fontWeight: 'bold', borderRadius: '4px', mb: 1, px: 1, py: 0.4 }}>
            {mainCategory}
          </Typography>
          {categories[mainCategory].map((subCategory, index) => (
            <ListItem button component="a" key={index} href={`/category/${index}`} sx={{ color: '#777', mb: 1, px: 1, py: 0.3 }}>
              <ListItemText
                primary={subCategory}
                primaryTypographyProps={{
                  style: {
                    fontSize: '12px',
                    color: '#000',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }
                }}
              />
            </ListItem>
          ))}
        </Box>
      ))}
    </List>
  </Box>
</Drawer>
</>
 );
};

export default MobileMenu;