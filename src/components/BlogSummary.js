import { Box, TextField } from "@mui/material";
import { BlogCard } from "@/components";
import { useFetchBlogs } from "@/hooks";

export default async function BlogSummary() {
  const {data} = await useFetchBlogs('');

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
                sx={gridItem}
              >
                <BlogCard
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