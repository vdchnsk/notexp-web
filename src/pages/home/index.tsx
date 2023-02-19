import type { NextPage } from 'next';
import { MainLayout } from '../../components/layout/MainLayout';
import { HomeScreen } from '@components/screens/home';

const HomePage: NextPage = () => {
    return (
        <MainLayout title="Home">
            <HomeScreen />
        </MainLayout>
    );
};

export default HomePage;
