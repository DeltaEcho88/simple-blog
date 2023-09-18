import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

export default function Banner(ads){

  const bannerWrapper = {
    position: 'relative',
    paddingBottom: '60%',
    overflow: 'hidden',
    '&:hover img': {
      transform: 'scale(1.01)'
    },
  }

  const bannerOverlay = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: '.3'
  }
  
  const bannerLink = {
    display: 'block'
  }

  const imageStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    height: '100%',
    transition: 'transform 1s ease',
  }

  const bannerText = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    letterSpacing: '2px',
  }

  return (
    <Box>
      {
        // Will integrate to Swiper or any carousel later
        ads.data.map((banner, idx) => {
          return(
            <Box 
              key={banner.id}
              sx={bannerWrapper}
            >
                  <Image 
                    src={banner.bannerImage?.url} 
                    width={300} 
                    height={300} 
                    alt="featured image" 
                    style={imageStyle}
                />
                <Box sx={bannerOverlay}></Box>
                <Typography
                  sx={bannerText}
                >
                  {banner.bannerText}
                </Typography>
            </Box>
          )
        })
      }
    </Box>
  )
}