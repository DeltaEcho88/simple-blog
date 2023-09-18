import { Box, Typography } from '@mui/material';
import { HotNewsGrid } from '@/components';

export default function HotNews(dataHotNews) {
  return (
    <Box
      className="hotNews__Grid"
    >
      {
      dataHotNews &&
        dataHotNews.data.map((blog) => {
          return(
            <>
              <Box 
                key={blog.id}
              >
               <HotNewsGrid 
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