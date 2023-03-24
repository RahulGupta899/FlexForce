import {useContext, useEffect, useState} from 'react'
import { HomeContext } from './HomeContext'
import ExerciseCard from './ExerciseCard'
import axios from 'axios'
import {exerciseOptions} from '../../utils/RapidAPIOptions'
import {APIs,info} from '../../utils/APIs'
import {Box, Stack, Typography, Pagination} from '@mui/material'

const ExerciseList = ()=>{
    const {
        allExercises,
        setAllExercises,
        filteredExercises,
        setFilteredExercises,
        selectedBodyPart,
        setSearchText
    } = useContext(HomeContext)


    // FETCH ALL EXERCISES FROM API
    useEffect(()=>{
        (async function(){
            const {exercisesList_endPoint} = APIs
            const {data} = await axios.get(exercisesList_endPoint,exerciseOptions)
            // const data = info
            console.log(data);
            setAllExercises(data)
            setFilteredExercises(data)
        })();
    },[])


    ////////////////////////
    // PAGINITION
    ////////////////////////
    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage = 8
    const si = (currentPage-1)*itemsPerPage;
    const ei = si+itemsPerPage;

    const exercisesOnCurrentPage = (filteredExercises?filteredExercises.slice(si,ei):[]);

    const handlePagination = (e,page)=>{
        setCurrentPage(page);
        window.scrollTo({top:1830, behavior: 'smooth'})
    }

    // WHENEVER BODYPART IS MODIFIED THIS WILL EXECUTE
    useEffect(()=>{
        if(selectedBodyPart === 'all' && allExercises){
            setFilteredExercises(allExercises)
            window.scroll({top:1830, behavior: 'smooth'})
        } 
        else if(selectedBodyPart !== 'all'){
            const filteredInfo = allExercises.filter((exercise)=> exercise.bodyPart === selectedBodyPart)
            setFilteredExercises(filteredInfo)
            window.scroll({top:1830, behavior: 'smooth'})
        }
        setSearchText('');
        setCurrentPage(1)
    },[selectedBodyPart])


    return(
        <Box id="exercises"
            sx={{mt: {lg:'110px'}}}
            p='20px'
        >
            <Typography variant="h3" mb='44px' sx={{fontFamily:"Montserrat,sans-serif",fontWeight:'900px'}}>
            Showing Results
            </Typography>

            <Stack direction='row' sx={{gap: {lg:'110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
                {exercisesOnCurrentPage.map((exercise,idx)=>{
                    return(
                        <ExerciseCard key={idx} exercise={exercise}/>
                    )
                })}

                {(exercisesOnCurrentPage.length == 0) && <div>No such Exercise</div>  }

            </Stack>

            <Stack mt='100px' alignItems='center'> 
                {filteredExercises && filteredExercises.length > itemsPerPage && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(filteredExercises.length/itemsPerPage)}
                        onChange={handlePagination}
                        page={currentPage}
                        size='large'
                    />
                )}
            </Stack>
        </Box>
    )
}

export default ExerciseList






