import { Avatar, Box, Stack, Typography, Link } from "@mui/material";
import { trimmedText } from '@/helper';
import Image from "next/image";
import moment from "moment";

export default function BlogList(blogData) {


  const { title, featuredImage, blogSummary, createdAt, categories, author } = blogData?.data;
  const postCreated = moment(new Date(createdAt)).fromNow();

  const articleImage = {    
    position: 'relative',
    width: '33.33%',
    height: '200px',
    overflow: 'hidden'
  }

  

  const contentWrapper = {
    flex: 1
  }

  const categoriesStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px'
  }

  return (
    <Stack
      as="article"
      flexDirection="row"
      alignItems="center"
      gap="24px"
      mt="32px"
      boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    >
      <Box
        sx={articleImage}
      >
        <a href="#">
          <Image 
            src={featuredImage?.url} 
            width={300} 
            height={300} 
            alt="featured image" 
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
        </a>
        <Box
          sx={categoriesStyle}
        >
        {
            categories.map(({id, title}, idx) => {
              return(
                <Link
                  key={idx}
                  href="#"
                  underline="none"
                  sx={{
                    background: 'cyan',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '12px',
                    display: 'inline-block'
                  }}
                >
                  {title}
                </Link>
              )
            })
          }
        </Box>
      </Box>
      <Box
        sx={contentWrapper}
      >
        <Typography 
          variant="h5"
          sx={{
            mb: '8px'
          }}
        >
          <Link
            href="#"
            underline="none"
            color="black"
          >
            {trimmedText(title)}
          </Link>
        </Typography>
        <Typography
          paragraph
          color="gray"
        >
          {trimmedText(blogSummary)}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}
        >
          <Box>
            <Avatar
              alt="Remy Sharp"
              src={author.authorImage.url}
              sx={{ width: 40, height: 40 }}
            />
          </Box>
          <Box>
            <Typography 
              variant="h6"
              color="black"
              fontSize="14px"
            >
              {author.name}
            </Typography>
            <Typography
              color="black"
              fontSize="12px"
            >
              {postCreated}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  )
}