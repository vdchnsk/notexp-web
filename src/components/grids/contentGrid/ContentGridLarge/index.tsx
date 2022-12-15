import { StraightPagination } from '../../../pagination/StraightPagination';

interface ContentGridLargeProps {
    readonly content: Array<any>;
}

export const ContentGridLarge = ({ content }: ContentGridLargeProps): JSX.Element => {
    return (
        <div
            className={`
                h-full
                flex flex-col 
                justify-center items-center
            `}
        >
            <span>Home</span>
            {/* <StraightPagination count={10} /> */}
        </div>
    );
};
