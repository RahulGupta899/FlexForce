import React,{useContext, useEffect, memo, useRef, useImperativeHandle} from 'react'
import {Stack,Typography,TextField,Box,Button} from '@mui/material'
import {HomeContext} from './HomeContext'
import {APIs} from '../../utils/APIs'
import {exerciseOptions} from '../../utils/RapidAPIOptions'
import axios from 'axios'
import HorizontalBodyParts from './HorizontalBodyParts'


const ExerciseCategory = () => {
    
    const {
        searchText,
        setSearchText,
        setBodyParts,
        allExercises,
        setFilteredExercises
    } = useContext(HomeContext)

    useEffect(()=>{
        const fetchBodyParts = async ()=>{
            const {bodyParts_endPoint} = APIs
            const {data} = await axios.get(bodyParts_endPoint,exerciseOptions)
            // const data =  ["back", "cardio", "chest", "lower arms", "lower legs", "neck" , "shoulders", "upper arms", "upper legs", "waist"]
            setBodyParts(data)
         }
        fetchBodyParts()
    },[])

    const handleSearch = ()=>{

        const filterd = allExercises.filter((exercise)=>{
            const text = searchText.toLowerCase().trim();
            const exerciseName = exercise.name.toLowerCase().trim();
            const targetMuscle = exercise.target.toLowerCase().trim();

            return (exerciseName.includes(text) || targetMuscle.includes(text))
        })
        setFilteredExercises(filterd)
        window.scrollTo({top:1830, behavior:'smooth'})
    }

    const handleKeyDown = (e)=>{
        if(e.code === 'Enter') handleSearch()
    }


  return (
    <Stack alignItems="center" mt="37px" justifyContent='center' p='20px'>
        <Typography
            fontWeight={70}
            sx={{fontSize: {lg:'44px', xs:'30px'}}}
            mb="50px" textAlign="center">
        Awesome Exercises you <br/>
        Should Know
        </Typography>

        <Box position='relative' mb='72px'>
            <TextField
                type="text"
                value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}
                onKeyDown={handleKeyDown}
                placeholder = "Search Exercises..."
                height="76px"
                sx={{
                    input: {fontWeight: '700',
                            border:'none', 
                            borderRadius: '4px',
                            },
                    width: {lg: '800px', xs:'350px'},
                    backgroundColor: '#fff',
                    borderRadius: '40px'
                }}
            />
            <Button
                    onClick={handleSearch}
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform:'none',
                        width:    {lg: '175px', xs: '80px'},
                        fontSize: {lg:'20px', xs:'14px'},
                        height:'56px',
                        position:'absolute',
                        right:0                        
                    }}
                    className="search-btn"
            >
            Search
            </Button>
        </Box>

        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
            <HorizontalBodyParts />
        </Box>
    </Stack>
  )
}

export default memo(ExerciseCategory)