import React, {useEffect,useState} from 'react'
import {Box,Skeleton} from '@mui/material'
import {useParams} from 'react-router-dom'
import {exerciseOptions, youtubeSearchOptions} from '../utils/RapidAPIOptions'
import axios from 'axios'
import ExerciseDetails from '../Components/SingleExercise/ExerciseDetails'
import YoutubeResults from '../Components/SingleExercise/YoutubeResults'
import SimilarTargetExercise from '../Components/SingleExercise/SimilarTargetExercise'
import SimilarEquipmentExercise from '../Components/SingleExercise/SimilarEquipmentExercise'
import Loader from '../Components/SingleExercise/Loader'



const SingleExercisePage = ()=>{

    const {id} = useParams();

    const [particularExercise,setParticularExercise] = useState(null)
    const [similarTargetExercises, setSimilarTargetExercises] = useState(null)
    const [similarEquipmentExercises, setSimilarEquipmentExercises] = useState(null);
    const [youtubeResults, setYouTubeResults] = useState(null);
    const [exerciseId, setExerciseId] = useState(null);

    
    useEffect(()=>{
      (async()=>{
        const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises';
        console.log("### USE EFFECT EXECUTED ###")

            // FETCH THE EXERCISE
            const particularExerciseUrl =  `${baseUrl}/exercise/${id}` 
            const exercise = await axios.get(particularExerciseUrl, exerciseOptions)
            setParticularExercise(exercise.data)



            // FETCH SIMILAR EXERCISE BY TARGET MUSCLE
            const similarTargetMuscleUrl = `${baseUrl}/target/${exercise.data.target}`
            const similarTargetResponse = await axios(similarTargetMuscleUrl,exerciseOptions)
            // console.log(similarTargetResponse.data)
            setSimilarTargetExercises(similarTargetResponse.data)


            // FETCH SIMILAR EXERCISE BY EQUIPMENT
            const similarEquipmentExercisesUrl = `${baseUrl}/equipment/${exercise.data.equipment}`
            const similarEquipmetResponse = await axios(similarEquipmentExercisesUrl,exerciseOptions)
            // console.log(similarEquipmetResponse.data)
            setSimilarEquipmentExercises(similarEquipmetResponse.data)








            // FETCH YOUTUBE RESULTS
            const youtubeBaseUrl = 'https://youtube-search-and-download.p.rapidapi.com'; 
            const youtubeTextSearchUrl = `${youtubeBaseUrl}/search?query=${exercise.data.name}`
            const youtubeResponse = await axios(youtubeTextSearchUrl, youtubeSearchOptions)
            // console.log("YOUTUBE: ", youtubeResponse.data)
            // const youtubeResponse = {
            //     data: {
            //         contents: [
            //           {
            //             video: {
            //               channelId: "UCUzjiQT6zsMQxYqQCo3F_hg",
            //               channelName: "GFitProject",
            //               description: "START - Adjust a ",
            //               lengthText: "0:19",
            //               publishedTimeText: "8 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/V-k27645MTs/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB_t6-HKyMLnBwvuWFhv350sYPu2Q",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/V-k27645MTs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD2vXdzxmrJRVSF6wTpXKkRAb2Shw",
            //                   width: 720
            //                 }
            //               ],
            //               title: "45 Degree Side Bend",
            //               videoId: "V-k27645MTs",
            //               viewCountText: "10,916 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCs8lIA3p4SM8n7UYU3lKoGQ",
            //               channelName: "LPS Athletic",
            //               description: "Side Bend",
            //               lengthText: "0:26",
            //               publishedTimeText: "2 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/-aAhcIGcGh4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCPOx8EYduz0wyCeD8iKlgBoT9FHA",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/-aAhcIGcGh4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBOvKWsiiqxkqPA0IHS36QY5HPy1Q",
            //                   width: 720
            //                 }
            //               ],
            //               title: "Side Bend - 45 Degree Back Extension",
            //               videoId: "-aAhcIGcGh4",
            //               viewCountText: "1,131 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCg2UFfNIoPLmBvAuWN8x0VQ",
            //               channelName: "Fitness Club",
            //               description: "45",
            //               lengthText: "1:00",
            //               publishedTimeText: "23 hours ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/8r4ZdQsquh8/hq720_2.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAAlAADIQj0AgKJDeAHwAQH4AbYIgAKAD4oCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLAii9mQpjgtcpuLM1YEu1nCAGFK9w",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/8r4ZdQsquh8/hq720_2.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLClR-QFBzREjAwN8g8uEcZTZoK_Eg",
            //                   width: 720
            //                 }
            //               ],
            //               title: "45 Degree Side Bend Workout",
            //               videoId: "8r4ZdQsquh8",
            //               viewCountText: "93 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCQfTj76oPeGsNAop-cIkJOg",
            //               channelName: "Mr Electration",
            //               description: "steel_trunking_side_bend_45_degree Subscribe my channal #mrelectration Learn how to modify trunking ...",
            //               lengthText: "13:16",
            //               publishedTimeText: "2 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 270,
            //                   url: "https://i.ytimg.com/vi/nKl_w0EXcSY/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAzmT4cXG192h0CNRU2enxJ10OwoA",
            //                   width: 480
            //                 }
            //               ],
            //               title: "Steel trunking side bend 45 degree",
            //               videoId: "nKl_w0EXcSY",
            //               viewCountText: "28,379 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCQfTj76oPeGsNAop-cIkJOg",
            //               channelName: "Mr Electration",
            //               description: "اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُ SUBSCRIBE my channal those people who want to learn about #Electrical_wiring ...",
            //               lengthText: "9:09",
            //               publishedTimeText: "2 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 270,
            //                   url: "https://i.ytimg.com/vi/qn41Hi0OHVE/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDcPC7mCJ4xu-WsO3SPDt73qcJLLw",
            //                   width: 480
            //                 }
            //               ],
            //               title: "Cable Tray side bend (45)|| how to make side bend of Cable Tray || with english subtitle",
            //               videoId: "qn41Hi0OHVE",
            //               viewCountText: "29,508 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCIKqLBiq7iqvO--LTck4ihw",
            //               channelName: "Mike Sheridan - Health Coaching",
            //               description: "From one of the workouts in my '1% Fit 4 Life' program. Learn more at: http://coachmikeblogs.com.",
            //               lengthText: "0:59",
            //               publishedTimeText: "7 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/IyCX-a9Lm_U/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA76bR0z1DwyH-tYVYAH1PIlpl1Dg",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/IyCX-a9Lm_U/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD0tcE4Jm3kQYgCKHw53q1gQo08Eg",
            //                   width: 720
            //                 }
            //               ],
            //               title: "Side Bend on 45-degree Hyper Extension - Bodyweight or Weighted",
            //               videoId: "IyCX-a9Lm_U",
            //               viewCountText: "16,759 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCGhTw1XxdCUhNa71clII2IQ",
            //               channelName: "Forbes Performance",
            //               description: "New Project.",
            //               lengthText: "0:13",
            //               publishedTimeText: "9 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/pUXu_7H0y_o/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBM3IL6P_eIUjVqm5D_419y4kwNXg",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/pUXu_7H0y_o/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCEXFIttK_Lf4Cn_tZKdEhCdnqN4g",
            //                   width: 720
            //                 }
            //               ],
            //               title: "45 degree side bends",
            //               videoId: "pUXu_7H0y_o",
            //               viewCountText: "3,452 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UC65cPngDx5FG3qFZLexFwcA",
            //               channelName: "Gym visual",
            //               description: "45 Side Bend",
            //               lengthText: "0:07",
            //               publishedTimeText: "6 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 270,
            //                   url: "https://i.ytimg.com/vi/OZUxaYoWgyg/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCX736ebx2a6lFBmkWglD_34fiTCA",
            //                   width: 480
            //                 }
            //               ],
            //               title: "45 Side Bend",
            //               videoId: "OZUxaYoWgyg",
            //               viewCountText: "1,372 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UC6TRaqsCQQBI0QF6aSBz4nw",
            //               channelName: "Testosterone Nation",
            //               description: "Grab the handle of a cable (or resistance band) that has a low attachment, roughly ankle level with your right hand. Stand tall with ...",
            //               lengthText: "0:13",
            //               publishedTimeText: "5 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 270,
            //                   url: "https://i.ytimg.com/vi/iKEC2mOfaVs/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCk9N60Nlhtr_GiYYSFAvh9jXM69A",
            //                   width: 480
            //                 }
            //               ],
            //               title: "Cable Side Bend",
            //               videoId: "iKEC2mOfaVs",
            //               viewCountText: "36,502 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCtsXZPZ86XczU7oPyj1v9hg",
            //               channelName: "Scott Hagnas",
            //               description: "Uh for the ",
            //               lengthText: "0:48",
            //               publishedTimeText: "2 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/n21XoWfT8qw/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC1A7jcW8PtQ7TkDc0HyMqUYgYB-Q",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/n21XoWfT8qw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD6lFEC_ibG3Ey4tR8n5mEXeS_X9w",
            //                   width: 720
            //                 }
            //               ],
            //               title: "45 Degree Side Bend",
            //               videoId: "n21XoWfT8qw",
            //               viewCountText: "70 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCtN7sGcEEbvWvsZZnDurJkw",
            //               channelName: "Biohacking Bombshell with Allyssa LaScala",
            //               description: "Oblique Crunch on Hyperextension as ab or core exercise — ▻ Subscribe to my YouTube channel here: ...",
            //               lengthText: "1:45",
            //               publishedTimeText: "5 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/_FgFT6DYmQ0/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBJrQm6goeGyEgMDbcdiHGAASq1ew",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/_FgFT6DYmQ0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCtvDhiZMVDfXWg2P1xfQzPTDNmrQ",
            //                   width: 720
            //                 }
            //               ],
            //               title: "Oblique Crunch on Hyperextension",
            //               videoId: "_FgFT6DYmQ0",
            //               viewCountText: "29,513 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UC-uDEypd1vXcNBP0JQDbtxQ",
            //               channelName: "Guidry Golf and Sport-Dr. JP Guidry DPT TPI",
            //               description: "Click HERE for Free Resources Sports Performance | www.guidrygolfandsport.com | United States #golfswing #golfer #golflife ...",
            //               lengthText: "0:59",
            //               publishedTimeText: "1 year ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/5BRK_IwzJtc/hq720_2.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAAlAADIQj0AgKJDeAHwAQH4Ac4FgALQBYoCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLAob37xyl_aFdI4UTNJVUwsd9RcUA",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/5BRK_IwzJtc/hq720_2.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGADwAQH4Ac4FgALQBYoCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLBT5nVVPGwmBn3LBVufZrvxRYCPCg",
            //                   width: 720
            //                 }
            //               ],
            //               title: "45 Degree Side Bend Exercise",
            //               videoId: "5BRK_IwzJtc",
            //               viewCountText: "845 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCAyZAk3Ki273c1takH2Qc8Q",
            //               channelName: "Fit Gent",
            //               lengthText: "0:35",
            //               publishedTimeText: "6 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/j9OjQbQ8rJ0/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAkJgWiJ-CpmuOBxLCyGgJHwU42kg",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/j9OjQbQ8rJ0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB6YmBxYu8WldnSIyITC3GiJC8uSA",
            //                   width: 720
            //                 }
            //               ],
            //               title: "Obliques Roman Chair Side Bend",
            //               videoId: "j9OjQbQ8rJ0",
            //               viewCountText: "34,890 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCXN0KlirLVz8aLCC4xjNDpA",
            //               channelName: "AIM Human Performance",
            //               description: "Several options for performing ",
            //               lengthText: "0:39",
            //               publishedTimeText: "1 year ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/_pipUNO90O4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCvQqJXsWz2c7p-Vk6InlB-t8GbHA",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/_pipUNO90O4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCkMrOtx72JYUScbOvonRGVma637Q",
            //                   width: 720
            //                 }
            //               ],
            //               title: "Side Bend on 45 bench",
            //               videoId: "_pipUNO90O4",
            //               viewCountText: "32 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UC1bcqvAnNsBoq_RWJNxYvhQ",
            //               channelName: "Well+Good",
            //               description: "A ",
            //               lengthText: "2:17",
            //               publishedTimeText: "10 months ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/iFUmG1Iuit0/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB56PLKUb6fqyfvZ4fy170iFidp0Q",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/iFUmG1Iuit0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBd4lk7aTX7ap8cufY4lsXe9HXuFQ",
            //                   width: 720
            //                 }
            //               ],
            //               title: "How to do a Side Bend | The Right Way | Well+Good",
            //               videoId: "iFUmG1Iuit0",
            //               viewCountText: "6,016 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCp6CkWfmFtM7M0G75ciuOgw",
            //               channelName: "Chris Kennedy",
            //               lengthText: "0:21",
            //               publishedTimeText: "6 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/WRZej6EgZs4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAJ1tdOhhNeYNFGlInp1mDwWoScXw",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/WRZej6EgZs4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDZpOdGZbSVZsG5pVUchHovoM0a4Q",
            //                   width: 720
            //                 }
            //               ],
            //               title: "45 Degree Side Bend",
            //               videoId: "WRZej6EgZs4",
            //               viewCountText: "264 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UClhP6SrUEewPZX4Ky1dkrPQ",
            //               channelName: "Hannah Pattie - Belleli",
            //               lengthText: "0:15",
            //               publishedTimeText: "4 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/qtDFDU3upXE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAg32FpBKPJPxnMQUxBkMm3eRXVWg",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/qtDFDU3upXE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDmUa6Re9qD8K-LUyLqjTLV2Am6xA",
            //                   width: 720
            //                 }
            //               ],
            //               title: "45 Degree Side Bends",
            //               videoId: "qtDFDU3upXE",
            //               viewCountText: "31 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCSpVHeDGr9UbREhRca0qwsA",
            //               channelName: "Howcast",
            //               description: "Hi. I'm going to demonstrate how to do a dumbbell ",
            //               lengthText: "1:36",
            //               publishedTimeText: "10 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/dL9ZzqtQI5c/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLASjIqHt0b6fIawCblwLgAMuJguxQ",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/dL9ZzqtQI5c/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBg0PtFDJTvur9REJmTIJy72McyoQ",
            //                   width: 720
            //                 }
            //               ],
            //               title: "How to Do a Dumbbell Side Bend | Ab Workout",
            //               videoId: "dL9ZzqtQI5c",
            //               viewCountText: "1,228,184 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCxyiSz4m161Z6frOsFxJpgw",
            //               channelName: "Cleveland Clinic",
            //               description: "Benefits of Pose: Stretches and lengthens the ",
            //               lengthText: "0:15",
            //               publishedTimeText: "7 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 202,
            //                   url: "https://i.ytimg.com/vi/Vko-SJok-fk/hq720_2.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAAlAADIQj0AgKJDeAHwAQH4Ac4FgALQBYoCDAgAEAEYZSBfKEowDw==&rs=AOn4CLBBMrvN5ib-LuqxVZlZ3hXj9ayY-g",
            //                   width: 360
            //                 },
            //                 {
            //                   height: 404,
            //                   url: "https://i.ytimg.com/vi/Vko-SJok-fk/hq720_2.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGADwAQH4Ac4FgALQBYoCDAgAEAEYZSBfKEowDw==&rs=AOn4CLCsMJFnI0IoWMW_8gRJikedENx41A",
            //                   width: 720
            //                 }
            //               ],
            //               title: "How To Do a Standing Side Bend",
            //               videoId: "Vko-SJok-fk",
            //               viewCountText: "89,227 views"
            //             }
            //           },
            //           {
            //             video: {
            //               channelId: "UCiX1cT9USWDbX9YgHSmP0yA",
            //               channelName: "Nikola L",
            //               lengthText: "0:08",
            //               publishedTimeText: "10 years ago",
            //               thumbnails: [
            //                 {
            //                   height: 270,
            //                   url: "https://i.ytimg.com/vi/kty_3zMND70/hq2.jpg?sqp=-oaymwE9COADEI4CSFryq4qpAy8IARUAAAAAGAAlAADIQj0AgKJDeAHwAQH4AeIBgALmAYoCDAgAEAEYZSBWKFAwDw==&rs=AOn4CLD05JAihEQbLbRgJEMoP1teyK1zCQ",
            //                   width: 480
            //                 }
            //               ],
            //               title: "Side Bend, 45°",
            //               videoId: "kty_3zMND70",
            //               viewCountText: "220 views"
            //             }
            //           }
            //         ],
            //         estimatedResults: "23110903",
            //         next: "EpcDEg40NcKwIHNpZGUgYmVuZBqEA1NCU0NBUXRTVkZwbUxYQkpiR0ZYWjRJQkMwVmpTWE5mYzBKMmJVeGpnZ0VMT0hJMFdtUlJjM0YxYURpQ0FRdHVTMnhmZHpCRldHTlRXWUlCQzNGdU5ERklhVEJQU0ZaRmdnRUxTWGxEV0MxaE9VeHRYMVdDQVF0d1ZWaDFYemRJTUhsZmI0SUJDMDlhVlhoaFdXOVhaM2xuZ2dFTGFVdEZRekp0VDJaaFZuT0NBUXR1TWpGWWIxZG1WRGh4ZDRJQkMxOUdaMFpVTmtSWmJWRXdnZ0VMTlVKU1MxOUpkM3BLZEdPQ0FRdHFPVTlxVVdKUk9ISktNSUlCQzE5d2FYQlZUazg1TUU4MGdnRUxhVVpWYlVjeFNYVnBkRENDQVF0WFVscGxhalpGWjFwek5JSUJDM0YwUkVaRVZUTjFjRmhGZ2dFTFpFdzVXbnB4ZEZGSk5XT0NBUXRXYTI4dFUwcHZheTFtYTRJQkMydDBlVjh6ZWsxT1JEY3dzZ0VHQ2dRSUZoQUMYgeDoGCILc2VhcmNoLWZlZWQ%3D"
            //     }
            // }
            setYouTubeResults(youtubeResponse.data.contents)
        })();
    },[exerciseId])



    return(
        <Box>
            {particularExercise && youtubeResults && similarTargetExercises ?(
                <>
                    <ExerciseDetails exercise={particularExercise}/> 
                    <YoutubeResults results={youtubeResults} name={particularExercise.name}/>
                    <SimilarTargetExercise exercises={similarTargetExercises} setExerciseId={setExerciseId}/>
                    <SimilarEquipmentExercise exercises={similarEquipmentExercises} setExerciseId={setExerciseId}/>
                </>
            ):
            <div style={{ textAlign:'center'}}>
                <div style={{margin:'0px 100px 100px 100px'}}>
                    <Skeleton height={300} />
                    <Skeleton animation="wave" height={100} />
                    <Skeleton animation={false} height={100}/>
                </div>
            </div>
            }
        </Box>   
    )
}
export default SingleExercisePage