"use client";

import { Button, Box, TextField, Modal } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useCallback, useEffect, useState } from 'react';
import useFetchBlogSearch from '@/hooks/useFetchBlogSearch';

const SearchForm = () => {
  const [searchTerms, setSearchTerms] = useState('');
  const [open, setOpen] = useState(false);
  const [blogData, setBlogData] = useState({});
  const fetchData = useFetchBlogSearch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
      setBlogData( res );
    },[fetchData]
  );

  useEffect(() => {

    const timeoutID = setTimeout(() => {
      getBlogSearch({title_contains: searchTerms})
    }, 1000);

    return () => {
      // 👇️ clear timeout when the component unmounts
      clearTimeout(timeoutID);
    };
  },[getBlogSearch, searchTerms]);

  console.log(blogData);

  return (
    <div>
      <Button onClick={handleOpen}><SearchIcon /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={modalStyle}
        >
          <TextField 
            id="standard-basic" 
            label="Standard" 
            variant="standard"
            sx={formStyle}
            onChange={(e) => setSearchTerms(e.target.value)}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default SearchForm