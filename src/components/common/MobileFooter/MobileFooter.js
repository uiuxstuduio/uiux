import React, { useState } from 'react'
import './mobilefooter.scss'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {  useNavigate, } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Divider, Drawer } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListSubheader from '@mui/material/ListSubheader';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import { logoutUser } from '../../../redux/reducers/authReducer.slice';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import CardMedia from '@mui/material/CardMedia';
import stcI from '../../../assets/images/design1.png'
import TextField from '@mui/material/TextField';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MobileFooter = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    // const location = useLocation();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const menu = useSelector((state) => state?.commonData?.menuData);
    // console.log('menu', menu)
    const [opensub, setOpenSub] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const handleSubmenu = () => {
        setOpenSub(!opensub);
    };

    const handleSerach = () => {
        setOpenSearch(true);
    }

    const [selectedNav, setSelectedNav] = useState('');

    const handleListItemClick = (event, nav) => {
        setSelectedNav(nav);
        console.log('nav', nav)
        switch (nav) {
            case 'profile':
                navigate('/profile');
                break;
            case 'settings':
                navigate('/settings');
                break;
            case 'downloads':
                navigate('/downloads');
                break;
            case 'favourites':
                navigate('/favourites');
                break;
            case 'collections':
                navigate('/collections');
                break;
            default:
                break;
        }
    };
    // console.log('selectedNav', selectedNav)
    const logoutHandler = () => {
        dispatch(logoutUser());
        setOpen(false)
        navigate('/')
    };

    return (
        <>
            <ul className='mobileFooter'>
                <li>

                    <IconButton onClick={() => navigate('/')}>
                        <HomeIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton onClick={() => handleSerach()}>
                        <SearchIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton onClick={() => navigate('/cart')}>
                        <Badge color="action" badgeContent={cart.items.length !== 0 ? cart.items.length : '0'}>
                            <LocalMallIcon />
                        </Badge>
                    </IconButton>
                </li>
                <li>
                    <IconButton onClick={() => setOpen(true)}>
                        <MenuOpenIcon />
                    </IconButton>
                </li>
            </ul>
            <Drawer className='drawer'
                variant="temporary"
                open={open}
                anchor={"right"}
                onClose={() => setOpen(false)}
            >
                <div className='mobileDrawer'>
                    <List
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" onClick={() => setOpen(false)} className='close' >
                                <ArrowBackOutlinedIcon /> <span>Themes & more</span>
                            </ListSubheader>
                        }>
                    </List>
                    <List subheader={
                        <ListSubheader component="div" id="nested-list-subheader" className='subtitlelist'>
                            <span> Theme Categories</span>
                        </ListSubheader>
                    }>
                        <ListItem>
                            <Box className='boxc'
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 0,
                                        width: 60,
                                    },
                                }}
                            >
                                {
                                    menu?.map((menu, i) => (
                                        <Link key={i} to={{ pathname: `/category/${menu.cate_id}` }} state={{ name: menu?.theme_categorie }}>
                                            <span className='imgWrap'>
                                                <img src={menu?.category_image || 'https://dummyimage.com/48x48/f208f2/ffffff'} alt="HTML Logo" />
                                            </span>
                                            <label>{menu?.theme_categorie}</label>
                                        </Link>

                                    ))
                                }
                            </Box>
                        </ListItem>
                    </List>

                    <Divider className='' />

                    <List sx={{ width: '100%'}}
                        component="nav" className='nestedmobile'
                        aria-labelledby="nested-list-subheader">

                        <ListItemButton onClick={() => navigate('/pricing')}>
                            <ListItemIcon>
                                <LocalOfferOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pricing" />
                            <ChevronRightOutlinedIcon sx={{ color: '#cdcdcd8a' }} />
                        </ListItemButton>

                        <ListItemButton onClick={() => navigate('/contact')}>
                            <ListItemIcon>
                                <ConnectWithoutContactOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                            <ChevronRightOutlinedIcon sx={{ color: '#cdcdcd8a' }} />
                        </ListItemButton>

                        <ListItemButton onClick={handleSubmenu}>
                            <ListItemIcon>
                                <Person4OutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Account" />
                            {opensub ? <ExpandLess sx={{ color: '#cdcdcd8a' }} /> : <ExpandMore sx={{ color: '#cdcdcd8a' }} />}
                        </ListItemButton>

                        <Collapse in={opensub} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton selected={selectedNav === 'profile'} sx={{ pl: 4 }} onClick={(event) => handleListItemClick(event, 'profile')}
                                >
                                    <ListItemIcon>
                                        <AccountBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Profile" />
                                </ListItemButton>
                                <ListItemButton selected={selectedNav === 'settings'} sx={{ pl: 4 }} onClick={(event) => handleListItemClick(event, 'settings')}
                                >
                                    <ListItemIcon>
                                        <SettingsOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Setting" />
                                </ListItemButton>
                                <ListItemButton selected={selectedNav === 'downloads'} sx={{ pl: 4 }} onClick={(event) => handleListItemClick(event, 'downloads')}
                                >
                                    <ListItemIcon>
                                        <DownloadingOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Downloads" />
                                </ListItemButton>
                                <ListItemButton selected={selectedNav === 'favourites'} sx={{ pl: 4 }} onClick={(event) => handleListItemClick(event, 'favourites')}
                                >
                                    <ListItemIcon>
                                        <FavoriteBorderOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Favourites" />
                                </ListItemButton>
                                <ListItemButton selected={selectedNav === 'collections'} sx={{ pl: 4 }} onClick={(event) => handleListItemClick(event, 'collections')}
                                >
                                    <ListItemIcon>
                                        <FolderCopyOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Collection" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>

                    <ListItemButton className="logout" sx={{ textAlign: 'center', position: 'absolute', bottom: '0', width: '100%' }} onClick={logoutHandler}>
                        <ListItemText primary="Sign Out" />
                    </ListItemButton>
                </div>
            </Drawer>

            <Dialog
                fullScreen
                open={openSearch}
                onClose={() => setOpenSearch(false)}
                TransitionComponent={Transition}
                className='searchModal'

            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => setOpenSearch(false)}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Search theme
                        </Typography>
                        <Button variant="outlined" autoFocus color="inherit" onClick={() => setOpenSearch(false)}>
                            search
                        </Button>
                    </Toolbar>
                </AppBar>
                <List sx={{ width: '100%', }}>
                    <Box sx={{ margin: "0 16px 20px 16px" }}>
                        <TextField id="standard-basic" label="Type theme name to search..." variant="standard" sx={{ width: "100%" }} />
                    </Box>

                    <ListItem alignItems="flex-start" sx={{ gap: "10px" }} component="button">
                        <ListItemAvatar >
                            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                            <CardMedia
                                component="img"
                                height="60"
                                width="50"
                                image={stcI}
                                alt="Paella dish"

                            />
                        </ListItemAvatar>
                        <ListItemText sx={{ color: '#fff' }}
                            primary="Avada Bootstrap Theme"

                            secondary={
                                <React.Fragment >
                                    <Typography
                                        sx={{ display: 'inline', color: '#fff' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Tech
                                    </Typography>
                                    {" — Bootstrap, Responsive, High Performance, Lorem Ipsum"}
                                </React.Fragment>
                            }
                        />
                        <ArrowOutwardOutlinedIcon sx={{ color: '#fff' }} />
                    </ListItem>
                    <Divider variant="inset" component="li" sx={{ borderColor: '#ffb43a9c' }} />
                    <ListItem alignItems="flex-start" sx={{ gap: "10px" }} component="button">
                        <ListItemAvatar >
                            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                            <CardMedia
                                component="img"
                                height="60"
                                width="50"
                                image={stcI}
                                alt="Paella dish"

                            />
                        </ListItemAvatar>
                        <ListItemText sx={{ color: '#fff' }}
                            primary="Avada Bootstrap Theme"

                            secondary={
                                <React.Fragment >
                                    <Typography
                                        sx={{ display: 'inline', color: '#fff' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Tech
                                    </Typography>
                                    {" — Bootstrap, Responsive, High Performance, Lorem Ipsum"}
                                </React.Fragment>
                            }
                        />
                        <ArrowOutwardOutlinedIcon sx={{ color: '#fff' }} />
                    </ListItem>
                </List>
            </Dialog>

        </>
    )
}

export default MobileFooter