import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import moment from "moment";
import CategoryComponents from "./CategoryComponents";

const HotNewsGrid = ({data}) => {
  const {featuredImage, categories, title, author, createdAt } = data;
  const postCreated = moment(new Date(createdAt)).fromNow();

  const gridLink = {
    zIndex: '4',
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
  }

  const gridImageWrapper = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '1',
  }

  const bannerOverlay = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: '.3',
    zIndex: 3
  }

  const gridImageStyle = {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    height: '100%',
    transition: 'transform 1s ease',
  }

  const gridTextWrapper = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    textAlign: 'left',
    alignItems: 'start',
    justifyContent: 'flex-end',
    zIndex: '3',
    width: '100%',
    height: '100%',
  }

  return (
    <>
    <Box>
      <Link
        sx={gridLink}
        href="#"
      >
        <Box
          sx={gridImageWrapper}
        >
          <Image 
            src={featuredImage?.url} 
            width={300} 
            height={300} 
            alt="featured image" 
            style={gridImageStyle}
          />
        </Box>
        <Box sx={bannerOverlay}></Box>
      </Link>
      <Box
        sx={gridTextWrapper}
        className="HotNews__Grid--text"
      >
        <Box
          sx={{
            mb: '8px'
          }}
        >
          {
            categories.map(({id, title, categoryColor}, idx) => {
              return(
                <CategoryComponents
                  key={id}
                  bgColor={categoryColor?.hex}
                >
                  {title}
                </CategoryComponents>
              )
            })
          }
        </Box>
        <Typography 
          variant="h5"
          sx={{
            mb: '8px'
          }}
        >
          <Link
            href="#"
            underline="none"
            color="white"
          >
            {title}
          </Link>
        </Typography>
        <Box>
          <Typography
            fontSize="12px"
            color="#fff"
          >
            By: {author.name} | {postCreated}
          </Typography>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default HotNewsGrid