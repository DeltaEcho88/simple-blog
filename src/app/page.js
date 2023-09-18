"use-client"

import styles from './page.module.css';
import { Grid, Container } from '@mui/material';
import { BlogSummary, CategoryWidgets } from '@/components';

export default async function Home() {

  return (
    <main className={styles.main}>
      <Container>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={8}>
            <div>
              <BlogSummary />
            </div>
          </Grid>
          <Grid item xs={4}
          >
            <div>
              <CategoryWidgets />
            </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}
