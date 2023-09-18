import { Box } from "@mui/material";
import { BlogCard } from "@/components";
import { blogs } from '@/constant';

const getPosts = async () => {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Blogs {
          blogs {
            title
            blogSummary
            author {
              authorImage {
                url
              }
              name
            }
            categories {
              id
              title
            }
            featuredImage {
              url
              width
              height
            }
            createdAt
          }
        }
    `,
    }),
    next: { revalidate: 10 },
  });

  const json = await response.json();

  return json;
}


export default async function BlogSummary() {
 
  const {data} = await getPosts();

  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)"
  }

  const gridItem = {
    margin: "8px",
    background: 'white'
  }

  return (
    <Box 
      sx={gridContainer} 
    >
      {
       data.blogs.map((blog, idx) => {
          return(
            <>
              <Box 
                key={idx} 
                xs={4}
                sx={gridItem}
              >
                <BlogCard 
                  key={idx} 
                  data={blog} 
                />
              </Box>
            </>
          )
        })
      }
    </Box>
  )
}