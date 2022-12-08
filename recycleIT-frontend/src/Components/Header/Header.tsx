import React, {useState, useEffect, useContext} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconLogo from './../assets/IconLogo.svg';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContextProvider';
import { AccountCircle, Logout } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';


const Header:React.FC = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [isUserAuthorized, setUserAuthorized] = useState(false);
  const isMobileDevice = useMediaQuery('(max-width:900px)');

  React.useEffect(() => {
    if (user?.isLoggedIn) {
      setUserAuthorized(true)
    } else if (!user?.isLoggedIn) {
      setUserAuthorized(false)
    }
  }, [user]);

  useEffect(() => {
    setMobileMoreAnchorEl(null);
  }, [location]);

  useEffect(() => {
    handleMobileMenuClose();
  }, [isMobileDevice])

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const activeNavLinkStyle = {
    borderBottom: "1.5px solid white",
  };
  const defaultNavLinkStyle = {
    borderBottom: "1.5px solid transparent",
  };

  const getNavLinkStyle = ({isActive} : any) => isActive ? activeNavLinkStyle : defaultNavLinkStyle; 

  const renderMenu = (
    <Box className={styles.Header_navbar_wrapper}>
      <Box  className={styles.navbar_comtainer}>
          <NavLink 
            to="/" 
            className={styles.Link}
            style={getNavLinkStyle}
          >
            <button 
              onClick={handleCloseNavMenu} 
              className={styles.navButton}
            >
              HOME
            </button>
          </NavLink>
          <NavLink 
            to="/services" 
            className={styles.Link} 
            style={getNavLinkStyle}
          >
            <button onClick={handleCloseNavMenu} className={styles.navButton}>
              SERVICES MAP
            </button>
          </NavLink>
          <NavLink 
            to='/support' 
            className={styles.Link}
            style={getNavLinkStyle}
          >
            <button onClick={handleCloseNavMenu} className={styles.navButton}>
              SUPPORT
            </button>
          </NavLink>
          {
            !isUserAuthorized ? <Button 
                                  variant="outlined" 
                                  style={{color: 'white', border: '1px solid white', height: '40px'}}
                                  onClick={() => navigate('/authorization')}
                                >
                                  Sign In
                                </Button> :
                                <Box className={styles.Header_avatar_wrapper}>
                                  <IconButton sx={{ p: 0 }}>
                                    <AccountCircle style={{color: 'white', fontSize: '35px'}} />
                                    <span className={styles.username}>{user?.user?.name}</span>
                                  </IconButton>
                                  <Button onClick={() => user?.signout()}>
                                    <Logout style={{color: 'white', fontSize: '35px'}} />
                                  </Button>
                                </Box>
          }
      </Box>              
    </Box>
  )
  const renderMobileMenu = (
    <>
      <IconButton
        size="large"
        aria-label="show more"
        className={styles.Header_burger}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        {
          isMobileMenuOpen ? <CloseIcon style={{color: 'white', fontSize: '35px'}} /> : 
          <MenuIcon style={{color: 'white', fontSize: '35px'}}/>
        }
      </IconButton>
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
          <Link to="/" className={styles.Link}>
            HOME
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/services" className={styles.Link}>
            SERVICES MAP
          </Link>
        </MenuItem>
        <MenuItem >
          <Link to='/support' className={styles.Link}>
            SUPPORT
          </Link>
        </MenuItem>
        {
          isUserAuthorized &&
          <div>
            <div className={styles.Link}>
              <AccountCircle style={{color: 'green', fontSize: '25px'}} />
              <span>{user?.user?.name}</span>
            </div>
            <MenuItem>
              <button className={styles.Link} onClick={() => user?.signout()}>
                Log out
              </button> 
            </MenuItem>
          </div>
        }
        {
          !isUserAuthorized &&
          <button className={styles.Link} onClick={() => navigate('/authorization')}>
            Sign in
          </button>
        }
      </Menu>
    </>
  );

  return (
        <Toolbar disableGutters className={styles.Header_box_wrapper}>
          <Link to='/'>
            <IconButton>
                <img src={IconLogo} alt="logo"></img>
            </IconButton>
          </Link>
          {
            location.pathname !== '/authorization' &&
            (isMobileDevice ? renderMobileMenu : renderMenu)
          }           
        </Toolbar>
  );
}
export default Header;