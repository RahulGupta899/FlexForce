import React,{useState,useRef} from 'react'
import HomeBanner from '../Components/HomePage/HomeBanner'
import ExerciseCategory from '../Components/HomePage/ExerciseCategory'
import {Box} from '@mui/material'
import { HomeContext } from '../Components/HomePage/HomeContext'
import ExerciseList from '../Components/HomePage/ExerciseList'

const HomePage = () => {
  
  const [searchText,setSearchText] = useState('')
  const [bodyParts,setBodyParts] = useState(null)
  const [selectedBodyPart,setSelectedBodyPart] = useState('all')
  const [allExercises,setAllExercises] = useState(null)
  const [filteredExercises,setFilteredExercises] = useState(null)

  const value={
    searchText,
    setSearchText,
    bodyParts,
    setBodyParts,
    selectedBodyPart,
    setSelectedBodyPart,
    allExercises,setAllExercises,
    filteredExercises,setFilteredExercises
  }
  
  return (
    <Box>
        <HomeBanner/>
        <HomeContext.Provider value={value}>
          <ExerciseCategory/>
          <ExerciseList/>
        </HomeContext.Provider>
    </Box>
  )
}

export default HomePage


