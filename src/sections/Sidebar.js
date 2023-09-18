import { Banner, CategoryWidgets } from "@/components";
import { Box } from "@mui/material";

export default function Sidebar({ads, categories }) {
  return (
    <>
    <Box
      sx={{
        position: 'sticky',
        top: 10,
        display: 'flex',
        flexDirection: 'column',
        rowGap: '24px'
      }}
    >
      <Banner data={ads}/>
      <CategoryWidgets data={categories}/>
    </Box>
    </>
  )
}