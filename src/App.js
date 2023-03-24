import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SingleExercisePage from './Pages/SingleExercisePage'
import {Box} from '@mui/material'
import NavBar from './Components/Header-Footer/NavBar'
import Footer from './Components/Header-Footer/Footer'

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} >
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/exercise/:id' element={<SingleExercisePage/>} />
        {/* <Route path='/exercises/:id' element={<SingleExerciseView/>} /> */}
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App



// {/* <Box width="400px" sx={ {width: {xl: '1488px'}} } >
        //  <Navbar/>  {/*handle when exercise details componets route is opened, useParams , ternary operator */}
        // <Routes>
        //     <Route path="/" element={<Home/>} />
        //     <Route path='/exercise/:id' element={<ExerciseDetails/>} />
        // </Routes>
        // <Footer/>
        // </Box> */}?}