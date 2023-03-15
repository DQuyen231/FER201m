import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, ButtonGroup, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../css/Navigation.css'
import {Avatar} from '@mui/material';

export default function Navigation() {
    const {user, logOut} = UserAuth();
    const handleSignOut = async () =>{
        try{
            await logOut()
        }catch(error){
            console.log(error)
        }
    }


    return(
        <div>
            <AppBar sx={{backgroundColor: "white"}}> 
                <Toolbar>
                    <Button><Link to='/'>Home</Link></Button>
                    <Button>About</Button>
                    <Button>cars</Button>
                    <Button>Active</Button>
                    <Button><Link to='/contact'>Contact</Link></Button>
                    {user?.displayName && <Avatar alt={user.displayName} src={user.photoURL}/>}
                    {user?.displayName && <Typography sx={{color:'black'}}>{user.displayName}</Typography>}
                    <ButtonGroup>
                        {user?.displayName ?  <Button onClick={handleSignOut}>Logout</Button> : <Button><Link to='/loginpage' style={{textDecoration:'none'}}>Login</Link></Button>}
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </div>
    )
}
