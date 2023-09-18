import { Box, Typography } from "@mui/material";
import { CategoryComponents } from "@/components";

export default function CategoryWidgets(categories) {
  const categoryWrapper = {
    display: 'flex',
    gap: '8px',
  }

  const categoryStyle = {
    color: 'black',
    textDecoration: 'none',
    p: '8px 16px',
    border: '1px solid #000',
    display: 'inline-flex',
    transition: '.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'black',
      color: '#fff'
    }
  }

  return (
    <Box>
      <Typography
        variant="h5"
        color="#000"
        pb="8px"
        mb="8px"
        borderBottom="1px solid #000"
      >
        Categories
      </Typography>
      <Box
        sx={categoryWrapper}
      >
        {
          categories &&
          categories.data.map(({id, title, categoryColor}, idx) => {
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
    </Box>
  )
}