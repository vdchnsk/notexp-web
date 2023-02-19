import { ContentGridLarge } from '@components/grids/contentGrid/ContentGridLarge';

export const HomeScreen = () => {
    return (
        <div className={``}>
            <main
                className={`
                        h-screen
                        bg-secondary
                        ml-auto
                        text-primary
                    `}
            >
                <ContentGridLarge content={[]} />
            </main>

            <footer className={``}></footer>
        </div>
    );
};
