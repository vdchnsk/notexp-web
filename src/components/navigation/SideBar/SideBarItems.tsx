import { memo, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { PermissionLevels } from '../../../common/enums';

interface SideBarItem {
    readonly id: number;
    readonly title: string;
    readonly route?: string;
    readonly excludedPermitions?: PermissionLevels[];
}

const sideBarElements: SideBarItem[] = [
    { title: '🔍 Search For Notes', route: '/home', id: 0 },
    { title: '📚 My Library of Notes', route: '/notes/my', id: 1 },
    { title: '⚙️ Settings', route: '/me/settingss', id: 4, excludedPermitions: [PermissionLevels.deafult] },
    { title: '🚪 Log out', id: 2, excludedPermitions: [PermissionLevels.deafult] },
    { title: '🚪 Login', route: '/authentication/login', id: 3 },
];

export const SideBarItems = memo((): JSX.Element => {
    // TODO: Get it from redux store
    const currentPermisionLevel = PermissionLevels.deafult;

    const isThisTabPermitted = useCallback(
        (sidebarItem: SideBarItem): boolean => !sidebarItem.excludedPermitions?.includes(currentPermisionLevel),
        [currentPermisionLevel],
    );

    return (
        <ul
            className={`
                bg-secondary text-primary
                flex flex-col
                justify-center items-start
                overflow-y-autbo
                p-2
                list-none
                rounded-md
            `}
        >
            {sideBarElements.map(
                (element) =>
                    isThisTabPermitted(element) && (
                        <span
                            className={`
                                p-2 text-lg
                            `}
                            key={element.id}
                        >
                            <Link href={element.route ?? ''}>{element.title}</Link>
                        </span>
                    ),
            )}
        </ul>
    );
});
