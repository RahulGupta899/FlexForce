import {Link} from 'react-router-dom';
import {Stack} from '@mui/material'; 
import Logo from '../../assets/images/Logo.png'

function NavBar(){

    return(
        <Stack 
            direction='row'
            justifyContent="space-around"
            sx={{
                gap: {sm:'122px', xs:'40px'}, 
                mt:  {sm:'32', xs:'20px'},
                justifyContent:'none' 
            }}
            px="25px"
        >
            <Link to="/">
                <img src={Logo} alt="logo" style={{width:'48px', height:'48px', margin:'0 25px'}} /> 
            </Link>
            <Stack 
                direction='row'
                gap='40px'
                fontSize='24px'
                alignItems='flex-end'
            >
                <Link to='/' style={{textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #FF2625'}}>
                    HOME
                </Link>
                <a href="#exercises" style={{textDecoration: 'none', color:'#3A1212',}}> Exercises </a>
            </Stack>
        </Stack>
    )
}
export default NavBar;