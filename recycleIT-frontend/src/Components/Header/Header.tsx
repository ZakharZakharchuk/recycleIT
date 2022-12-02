import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from './Header.module.css'
import leaf from '../assets/leaf.png'
import AccountCircleFilled from '../assets/AccountCircleFilled.png';
import LogoutOutlined from '../assets/LogoutOutlined.png'
import burger from '../assets/burger.png'

const pages = ['HOME', 'SERVICES MAP', 'SUPPORT'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header:React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event:any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const renderMobileMenu = (
    <Menu
    anchorEl={mobileMoreAnchorEl}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="small"  color="inherit">        
          <p>HOME</p>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="small"
          color="inherit"
        >
        <p>SERVICES MAP</p>
        </IconButton>
      </MenuItem>
      <MenuItem >
        <IconButton
          size="small"
          color="inherit"
        >
        <p>SUPPORT</p>
        </IconButton>
      </MenuItem>
    </Menu>
  );
  return (
      <Container maxWidth="xl" className={styles.Header_container}>
        <Toolbar disableGutters className={styles.Header_box_wrapper}>
            <Box className={styles.Header_logo_wrapper}>
                <Avatar src={leaf} alt='leaf' className={styles.Header_logo}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    className={styles.Header_logo_description}
                >
                    RecycleIT
                </Typography>
            </Box>
            <Box className={styles.Header_navbar_wrapper}>
              <Box  className={styles.navbar_comtainer}>
                  {pages.map((page) => (
                  <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      className={styles.Header_navBar}
                  >
                      {page}
                  </Button>
                  ))}
              </Box>
              <Box className={styles.Header_avatar_wrapper}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={AccountCircleFilled} className={styles.Header_account_avatar} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                  </Menu>
                  <Avatar src={LogoutOutlined} alt='garbageRecycle'className={styles.Header_logoOut}/>
              </Box>
            </Box>
            <IconButton
              size="large"
              aria-label="show more"
              className={styles.Header_burger}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <img src={burger} alt="burger" />
   
            </IconButton>
            {renderMobileMenu}
        </Toolbar>
      </Container>
  );
}
export default Header;