"use client";

import { Button, Box, Stack, TextField, Typography, Modal } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useCallback, useEffect, useState } from 'react';
import { UseFetchBlogSearch } from '@/hooks';
import { BlogList } from '@/components';

const SearchForm = () => {
  const [searchTerms, setSearchTerms] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [blogData, setBlogData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchData = UseFetchBlogSearch();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const formStyle = {
    width: '100%',
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    minHeight: '30vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const getBlogSearch = useCallback(
    async (params) => {
      const res = await fetchData(
        params
      );
      const data = res.data?.blogs;
      if( data ){
        setBlogData( data );
        setIsLoaded( true );
      }
    },[fetchData]
  );

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      getBlogSearch(searchTerms)
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  },[getBlogSearch, searchTerms]);

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
    >
      <Button onClick={handleOpen}><SearchIcon /></Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={modalStyle}
        >
          <TextField 
            id="standard-basic" 
            label="Search Posts" 
            variant="standard"
            sx={formStyle}
            onChange={(e) => setSearchTerms(e.target.value)}
          />
          <Box>
            <Typography
              color="#000"
              textAlign="center"
              mt="40px"
            >
              {blogData.length ? 'Posts Found: '+blogData.length : 'No Posts Found'}
            </Typography>
            {
              isLoaded && isOpen && (
                blogData.map((blog, idx) => {
                  return(
                    <BlogList 
                      key={idx} 
                      data={blog}
                    />
                  )
                })
              )
            }
          </Box>
        </Box>
      </Modal>
    </Stack>
  )
}

export default SearchForm