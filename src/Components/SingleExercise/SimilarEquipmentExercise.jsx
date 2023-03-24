import React from 'react'
import {Box, Typography} from '@mui/material'
import ExerciseCard from '../HomePage/ExerciseCard'

const SimilarEquipmentExercise = ({exercises, setExerciseId}) => {
  return (
    <Box sx={{marginTop:'20px'}} p="20px">
            <Typography variant="h4" sx={{fontFamily:"Montserrat,sans-serif",fontWeight:'700px'}}>
                Similar exercises that uses <span style={{color:'#ff2625', textTransform:'capitalize'}}>{exercises[0].equipment}</span> as equipment
            </Typography>

            <div className='youtube_video_container'>
                {
                    exercises.slice(0,15).map((exercise,idx)=>{
                        return(
                            <div key={idx}>
                                <ExerciseCard exercise={exercise} setExerciseId={setExerciseId}/>
                            </div>
                        )
                    })
                }
            </div>
    </Box>
  )
}

export default SimilarEquipmentExercise