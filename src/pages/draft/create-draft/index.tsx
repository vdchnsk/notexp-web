import type { NextPage } from 'next';
import { MainLayout } from '../../../components/layout/MainLayout';
import { CreateDraftScreen } from '@components/screens/draft/create-draft';

const HomePage: NextPage = () => {
    return (
        <MainLayout title="Create Draft">
            <CreateDraftScreen />
        </MainLayout>
    );
};

export default HomePage;
