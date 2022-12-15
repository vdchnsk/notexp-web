import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface StraightPaginationProps {
    count: number;
}

export const StraightPagination = ({ count = 10 }: StraightPaginationProps): JSX.Element => {
    return (
        <Stack spacing={2}>
            <Pagination count={count} variant="outlined" shape="rounded" />
        </Stack>
    );
};
