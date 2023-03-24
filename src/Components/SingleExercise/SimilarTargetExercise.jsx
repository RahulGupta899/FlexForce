import React from 'react'
import {Box, Typography} from '@mui/material'
import ExerciseCard from '../HomePage/ExerciseCard'

const SimilarTargetExercise = ({exercises}) => {
  return (
    <section id="exercises" style={{margin:'20px'}} p="20px">
            <Typography variant="h4" sx={{fontFamily:"Montserrat,sans-serif",fontWeight:'700px'}}>
                Similar exercises that targets <span style={{color:'#ff2625', textTransform:'capitalize'}}>{exercises[0].target}</span> muscle
            </Typography>

            <div className='youtube_video_container'>
                {
                    exercises.slice(0,15).map((exercise,idx)=>{
                        return(
                            <div key={idx}>
                                <ExerciseCard exercise={exercise} />
                            </div>
                        )
                    })
                }
            </div>
    </section>
  )
}

export default SimilarTargetExercise

