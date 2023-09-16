"use-client"

import styles from './page.module.css';
import { Box } from '@mui/material';
import { BlogSummary } from '@/components';

export default async function Home() {

  return (
    <main className={styles.main}>
      <Box>
          <BlogSummary />
      </Box>
    </main>
  )
}
