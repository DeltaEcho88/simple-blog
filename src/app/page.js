import styles from './page.module.css';
import { Container, Typography } from '@mui/material';
import { BlogSummary } from '@/components';

export default async function Home() {

  return (
    <main className={styles.main}>
      <Container>
        <Typography>
          Simple Blog Test
        </Typography>
        <BlogSummary />
      </Container>
    </main>
  )
}
