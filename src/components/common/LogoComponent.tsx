import { memo } from 'react';
import { PROJECT_NAME } from '../../constants/general';

export const LogoComponent = memo((): JSX.Element => {
    return <span className={`p-5 bg-transparent font-semibold text-2xl text-primary`}>✏️ {PROJECT_NAME}</span>;
});
