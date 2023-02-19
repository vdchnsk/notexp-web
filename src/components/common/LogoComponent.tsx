import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { PROJECT_NAME } from '../../common/constants/general';

export const LogoComponent = memo((): JSX.Element => {
    return (
        <div className={`p-5`}>
            <Link href={'/home'} className={`flex flex-row w-1/2 items-center justify-start gap-4`}>
                <Image alt="App logo" width={40} height={0} src="/assets/logo_bg_less_transparent.png" />
                <span className={`bg-transparent font-semibold text-2xl text-primary`}>{PROJECT_NAME}</span>
            </Link>
        </div>
    );
});
