import React, { useState } from 'react'
import './mobilefooter.scss'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Drawer } from '@mui/material';
const MobileFooter = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleSerach = () => ({
})

    const getList = () => (
        <div style={{ width: 300 }} onClick={() => setOpen(false)}>
          dsadasdasdsad
        </div>
    )

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
            <Drawer
                variant="temporary"
                open={open}
                anchor={"right"}
                onClose={() => setOpen(false)}
            >
                {getList()}
            </Drawer>
        </>
    )
}

export default MobileFooter