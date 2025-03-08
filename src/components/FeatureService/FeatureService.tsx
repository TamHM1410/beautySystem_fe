import { Grid } from '@mantine/core';
import FeatureCard from './FeatureCard';
import styles from './styles/style.module.css';

const FeatureService = () => {
  return (
    <div>
      <div className={styles.container}>
        <h3 className={styles.title}>Featured Services</h3>
        <div className={styles.subtitle}>Explore professional skin care services</div>
      </div>
      <div className={styles.gridContainer}>
        <Grid>
          <Grid.Col span={6}>
            <FeatureCard />
          </Grid.Col>
          <Grid.Col span={6}>
            <FeatureCard />
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default FeatureService;
