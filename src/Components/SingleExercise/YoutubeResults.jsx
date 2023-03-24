import React from 'react'
import {Box, Typography, Stack,Card, CardMedia, CardContent} from '@mui/material'
// import YouTubeIcon from '@mui/icons-material/YouTube'
const YoutubeResults = ({results, name }) => {
  

  return (
    <Box sx={{marginTop:'20px'}} p="20px">
            <Typography variant="h4" sx={{fontFamily:"Montserrat,sans-serif",fontWeight:'700px'}}>
                Watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> tutorials on Youtube 
            </Typography>

            <div className='youtube_video_container'>
                
                {
                    results.length>0 &&
                    results.slice(0,6).map((item,idx)=>{
                        return (
                            <div className='youtube_result_container' key={idx}>
                                <div className="youtube_result">
                                <a
                                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                                    target='_blank'
                                    rel='noreferrer'
                                    style={{margin:'10px', textDecoration:'none'}}
                                    
                                >
                                    <Card sx={{ width: 360 ,background:"#252424", color: 'whitesmoke'}}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="200"
                                            image={item.video.thumbnails[0].url}
                                        />
                                        <CardContent>
                                            <Typography >{item.video.title.substring(0,40)}</Typography>
                                            <Typography sx={{fontSize:'14px', fontStyle:'italic', fontWeight:'700'}}>{item.video.channelName}</Typography>
                                            <Typography sx={{fontSize:'12px'}}>Uploaded: {item.video.publishedTimeText}</Typography>
                                        </CardContent>
                                    </Card>
                                </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </Box>
  )
}

export default YoutubeResults