import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Stack,Button,Typography} from '@mui/material'


const ExerciseCard = ({exercise,setExerciseId}) => {

    const handleClick = (id)=>{
        setExerciseId(id);
        window.scrollTo({top:0, behavior:'smooth'});
        // window.scrollTo({top:1820, behavior:'smooth'})
    }
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`} onClick={()=>handleClick(exercise.id)} >
        <img src={exercise.gifUrl} alt={exercise.name} />

        <div className='button_area' direction='row' sx={{paddingRight:'10px'}}>
            <ul>
                <li><a className='btn_waist'>{exercise.bodyPart}</a></li>
                <li><a className='btn_waist2'>{exercise.target}</a></li>
                <li><a className='btn_waist3'>{exercise.equipment}</a></li>
            </ul>
            
            {/* <Button
                sx={{ml:'21px', color:'#fff', background:'#ffa9a9',
                    textDecoration: 'none' ,fontSize:'14px',
                    borderRadius:'20px', textTransform:'capitalize',
                    ':hover':{background:'#ffa9a9'}
                }}
                onClick={handleClick}
            >
            {exercise.bodyPart}
            </Button>

            <Button
                // variant='outlined'
                sx={{ml:'21px', color:'#fff', background:'#65d5b8',
                    textDecoration: 'none' ,fontSize:'14px',
                    borderRadius:'20px', textTransform:'capitalize',
                    ':hover':{
                        background: '#65d5b8',
                    }
                }}
            >
            {exercise.target}
            </Button>

            <Button
                sx={{ml:'21px', color:'#fff', background:'#ffcc79',
                    textDecoration: 'none' ,fontSize:'14px',
                    borderRadius:'20px', textTransform:'capitalize',
                    ':hover':{
                        background: '#ffcc79'
                    }
                }}
            >
            {exercise.equipment}
            </Button> */}

        </div>

        <Typography 
            ml='21px' color='#000' fontWeight='bold' 
            mt='11px' pb='10px' textTransform="capitalize" 
            fontSize='22px'
        >
        {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard