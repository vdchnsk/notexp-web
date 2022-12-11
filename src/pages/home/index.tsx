import type { NextPage } from 'next';
import { MainLayout } from '../../components/common/MainLayout';
import { ContentGridLarge } from '../../components/grids/contentGrid/ContentGridLarge';

const HomePage: NextPage = () => {
    return (
        <MainLayout title="🏠 Home">
            <div className={``}>
                <main
                    className={`
                        h-screen
                        bg-main
                        ml-auto
                    `}
                >
                    <ContentGridLarge content={[]} />
                </main>

                <footer className={``}></footer>
            </div>
        </MainLayout>
    );
};

export default HomePage;
