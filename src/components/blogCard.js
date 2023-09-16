import { Avatar, Box, Typography, Link } from "@mui/material";
import Image from "next/image";
import moment from "moment";

export default function blogCard({data}) {
  // alert
  const { featuredImage, categories, title, author, createdAt, content, blogSummary } = data;
  const postCreated = moment(new Date(createdAt)).fromNow();
  return (
    <Box>
      <Box
        height="240px"
        overflow="hidden"
        borderRadius="2px"
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
      </Box>
      <Box
        padding={2}
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none'
        }}
      >
        <Box
          sx={{
            mb: '8px'
          }}
        >
          {
            categories.map(({id, title}, idx) => {
              return(
                <Link
                  key={id}
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
            {title}
          </Link>
        </Typography>
        <Typography
          paragraph
          color="gray"
        >
          {blogSummary}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '16px'
          }}
        >
          <Box>
            <Avatar
              alt="Remy Sharp"
              src={author.authorImage.url}
              sx={{ width: 60, height: 60 }}
            />
          </Box>
          <Box>
            <Typography 
              variant="h6"
              color="black"
            >
              {author.name}
            </Typography>
            <Typography
              color="black"
              fontSize="14px"
            >
              {postCreated}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}