import { FC, memo } from 'react';
import { AchievementProgress } from './AchievementProgress';

export const AchievementsComponent: FC = memo((): JSX.Element => {
    return (
        <div
            className={`
                flex flex-col justify-center 
                overflow-hidden
                bg-secondary
                rounded-md
                mt-4 mb-4
                w-full h-[200px]

            `}
        >
            <h2
                className={`
                h-full
                text-primary
                text-center
                m-4
            `}
            >
                Your Progress
            </h2>
            <AchievementProgress progressValue={80} />
        </div>
    );
});
