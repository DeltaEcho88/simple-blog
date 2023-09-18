import { Box, Skeleton } from "@mui/material";
import { BlogCard } from "@/components";
import { UseFetchBlogs } from "@/hooks";

export default async function BlogSummary() {
  const { data } = await UseFetchBlogs();

  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
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
      data &&
        data.blogs.map((blog) => {
          return(
            <>
              <Box 
                key={blog.id}
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