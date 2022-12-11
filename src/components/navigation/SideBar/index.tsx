import { LogoComponent } from '../../common/LogoComponent';
import { AchievementsComponent } from '../../statistic/AchievementsComponent';
import { SideBarItems } from './SideBarItems';

export const SideBar = (): JSX.Element => {
    return (
        <div
            className={`
                overflow-hidden
                h-full w-[25%] min-w-[300px]
                p-3
                flex flex-col
                fixed 
                justify-start
                bg-primary
                border-r-border_primary
                z-[2]
            `}
        >
            <LogoComponent />
            <SideBarItems />
            <AchievementsComponent />
        </div>
    );
};
