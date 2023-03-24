import React from 'react'
import {Stack, Typography, Button} from '@mui/material'
import bodyPartIcon  from '../../assets/icons/body-part.png';
import equipmentIcon from '../../assets/icons/equipment.png';
import targetIcon    from '../../assets/icons/target.png';



const ExerciseDetails = ({exercise}) => {

    const {gifUrl, name, bodyPart, equipment, target} = exercise
    
    const extraDetails = [
        {
            icon: bodyPartIcon, 
            name: bodyPart
        },
        {
            icon: equipmentIcon, 
            name: equipment
        }, 
        {
            icon: targetIcon,
            name: target
        }
    ]


  return (
    <Stack gap='60px' 
            sx={{flexDirection: {lg:'row'}, p:'20px', alignItems:'center'}}
        >
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack
                sx={ {gap: {lg: '35px', xs: '20px'}}}
            >
            <Typography variant="h5"    sx={{ fontSize:{lg:'64px', sx:'30px'},textTransform:'capitalize', fontWeight:'700' } }> {name} </Typography>
            <Typography sx={{fontSize:{lg:'24px', xs:'18'}}} color="#4f4c4c">
                Exercises keep you strong. {' '}
                <span style={{textTransform:'capitalize'}}>{name}</span>
                {' '} is one of the best exercises to target your  {` ${target}`}. It will help you improve your mood and gain energy.
            </Typography> 
            {
                extraDetails.map((item)=>{
                    return(
                    <Stack key={item.name}  direction="row" gap='24px' alignItems='center'>
                        <Button sx={{background:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
                            <img src={item.icon} alt={name} style={{width:'50px', height:'50px'}} />
                        </Button>
                        <Typography textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                    )
                })
            }
            </Stack>

        </Stack>
  )
}

export default ExerciseDetails