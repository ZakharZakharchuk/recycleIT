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

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [active, setActive] = React.useState(false)

  const handleOpenNavMenu = (event:any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event:any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
        </Toolbar>
      </Container>
  );
}
export default Header;