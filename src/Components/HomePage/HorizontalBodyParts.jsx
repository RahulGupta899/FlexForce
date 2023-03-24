import React,{useContext,memo} from 'react'
import { HomeContext } from './HomeContext'
import { Box} from '@mui/material'
import BodyPart from './BodyPart'

const HorizontalBodyParts = ()=>{
  
    const {bodyParts} = useContext(HomeContext)
    let categories;
    if(bodyParts)   categories = ['all', ...bodyParts]

    return(
        <div style={{width:'1200px', overflowX: 'scroll' ,display:'flex', height:'350px',paddingTop:'10px'}}>
          {
                categories
                && 
                categories.map((item,idx)=>{
                    return(
                      <Box key={idx} m=" 0 40px">
                        <BodyPart name={item} />
                     </Box>
                    )
                })
            }
        </div>
    )
}

export default memo(HorizontalBodyParts)