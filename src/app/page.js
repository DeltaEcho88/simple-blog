"use-client"

import styles from './page.module.css';
import { Box, Container, Stack } from '@mui/material';
import { BlogSummary, HotNews, Sidebar } from '@/sections';
import { UseFetchData } from '@/hooks';

export default async function Home() {
  const { data } = await UseFetchData();

  return (
    <main className={styles.main}>
      <Container>
        <HotNews data={data.hotNews} />
        <Stack
          gap={3}
          mt="20px"
          flexDirection="row"
        >
          <Box
            sx={{
              flex: 1
            }}
          >
            <BlogSummary data={data.blogs} /> 
          </Box>
          <Stack
            as="aside"
            sx={{
              width: '33.333%',
              margin: '0 !important',
              gap: '24px'
            }}
          >
            <Sidebar categories={data.sidebar} ads={data.advertisement} />
          </Stack>
        </Stack>
      </Container>
    </main>
  )
}
