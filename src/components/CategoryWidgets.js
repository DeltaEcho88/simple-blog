'use client'

import { Box, Link, Typography } from "@mui/material";
import { UseFetchCategories } from "@/hooks";
import { useEffect, useState } from "react";

export default function CategoryWidgets() {

  const [categoriesData, setCategoriesData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect( () => {
    const fetchData = async () => {
      const { data } = await UseFetchCategories();
      setCategoriesData(data.categories);
      setIsLoaded(true);
    }
    fetchData();
  },[])

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
          isLoaded && categoriesData &&
          categoriesData.map((category, idx) => {
            return(
              <Link
                key={category.id}
                href="#"
                sx={categoryStyle}
              >
                {category.title}
              </Link>
            )
          })
        }
      </Box>
    </Box>
  )
}