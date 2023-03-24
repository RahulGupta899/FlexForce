import React,{useContext} from 'react'
import { HomeContext } from './HomeContext';
import {Stack, Typography} from '@mui/material'
import Icon from '../../assets/icons/gym.png'
// import Icon from '../../assets/icons/compass.png'


const BodyPart = ({name})=>{

    const {selectedBodyPart,setSelectedBodyPart,searchText} = useContext(HomeContext)

    const handleClick = (name)=>{
        setSelectedBodyPart(name)
    }
    return (
        <Stack
            type="button"
            className='bodyPart-card'
            alignItems= 'center'
            justifyContent='center'
            sx={{  
                borderTop: (selectedBodyPart == name)? '4px solid #ff2625' : '' ,
                backgroundColor:'#FFF',
                borderBottomLeftRadius: '20px',
                height:'300px',
                width:'290px',
                cursor:'pointer',
                gap:'47px',
            }}
            onClick={(e)=>{handleClick(name)}}
        >
            <img src={Icon} alt="logo" style={{height:'40px', width:'40px'}}/>
            <Typography
                fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'
            >{name}</Typography>
        </Stack>
    )
}

export default BodyPart; 