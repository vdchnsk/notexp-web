import { memo } from 'react';
import styles from '../../../styles/statistic/achievements_component.module.scss';
import { AchievementProgress } from './AchievementProgress';

export const AchievementsComponent = memo((): JSX.Element => {
    return (
        <div className={styles.main}>
            <h2 className={styles.progress_window}> Your Progress</h2>
            <AchievementProgress progressValue={80} />
        </div>
    );
});
