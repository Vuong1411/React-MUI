import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Tab,
  Tabs,
  Avatar,
  Typography,
  IconButton,
} from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Search as SearchIcon,
  Email as EmailIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event, newValue) => {
    const routes = {
      0: '/',
      1: '/profile',
      2: '/search',
      3: '/messages',
      4: '/notifications'
    };
    navigate(routes[newValue]);
    setActiveTab(newValue);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: '#16181c',
        minHeight: 60,
        borderRadius: 0 
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        {/* Logo Section */}
        <Link to="/" style={{ textDecoration: 'none', color: '#inherit' }}>
          <Box component="img" src='src/assets/Logo.svg'/>
        </Link>

        {/* Navigation Tabs Section */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#6ec207',
              height: 3,
              borderRadius: '4px'
            },
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '100px'
          }}
        >
          <Tab
            icon={<HomeIcon />}
            sx={{
              color: activeTab === 0 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#6ec207' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<PersonIcon />}
            sx={{
              color: activeTab === 1 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#6ec207' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<SearchIcon />}
            sx={{
              color: activeTab === 2 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#6ec207' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<EmailIcon />}
            sx={{
              color: activeTab === 3 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#6ec207' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<NotificationsIcon />}
            sx={{
              color: activeTab === 4 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#6ec207' },
              minWidth: 100
            }}
          />
        </Tabs>

        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Typography variant="body1" sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}>
              Trần Duy Vương
            </Typography>
            <Avatar alt="Trần Duy Vương" src="/avatar.jpg" />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
