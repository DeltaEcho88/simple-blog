import { Box, Skeleton } from "@mui/material";
import { BlogCard } from "@/components";
import { UseFetchData } from "@/hooks";

export default async function BlogSummary(dataBlogs) {

  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: '24px'
  }

  const gridItem = {
    background: 'white'
  }

  return (
    <Box
      sx={gridContainer} 
    >
      {
      dataBlogs &&
        dataBlogs.data.map((blog) => {
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