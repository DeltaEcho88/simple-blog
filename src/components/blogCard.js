import { Avatar, Box, Typography, Link } from "@mui/material";
import Image from "next/image";
import moment from "moment";
import { trimmedText } from "@/helper";
import {CategoryComponents} from "@/components";

export default function BlogCard({data}) {

  const {featuredImage, categories, title, author, createdAt, blogSummary } = data;
  const postCreated = moment(new Date(createdAt)).fromNow();
  return (
    <Box
      sx={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        height: '100%'
      }}
    >
      <Box
        height="240px"
        overflow="hidden"
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
          boxShadow: 'none',
          height: 'calc( 100% - 272px)',
          display: 'flex',
          flexDirection: 'column',
        }}
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
            color="black"
          >
            {trimmedText(title, 50, '...')}
          </Link>
        </Typography>
        <Typography
          paragraph
          color="gray"
        >
          {trimmedText( blogSummary, 200, '...' )}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            marginTop: 'auto'
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