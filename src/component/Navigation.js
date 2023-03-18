import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, ButtonGroup, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../css/Navigation.css'
import { Avatar } from '@mui/material';

export default function Navigation() {
    const { user, logOut } = UserAuth();
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <AppBar sx={{ backgroundColor: "#D8D8D8" }}>
                <Toolbar>
                    <Button sx={{ color: 'black', marginLeft:'40rem', fontSize:'20px', fontWeight:'bold', marginRight:'30px' }}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></Button>
                    <Button sx={{ color: 'black', fontSize:'20px', fontWeight:'bold' }}>About</Button>
                    <Button sx={{ color: 'black', fontSize:'20px', fontWeight:'bold', marginLeft:'30px' }}>cars</Button>
                    <Button sx={{ color: 'black', fontSize:'20px', fontWeight:'bold', marginLeft:'30px' }}>Active</Button>
                    <Button sx={{ color: 'black', fontSize:'20px', fontWeight:'bold', marginLeft:'30px' }}><Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link></Button>

                    <div className='avatar'>{user?.displayName && <Avatar alt={user.displayName} src={user.photoURL} />}</div>
                    <div className='user-name'>{user?.displayName && <Typography sx={{ color: 'black' }}>{user.displayName}</Typography>}</div>
                    <div className='button-log'>
                        <ButtonGroup>
                            {user?.displayName ? <Button onClick={handleSignOut}>Logout</Button> : <Button><Link to='/loginpage' style={{ textDecoration: 'none' }}>Login</Link></Button>}
                        </ButtonGroup>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    )
}
