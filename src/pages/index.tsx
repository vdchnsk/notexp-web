import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                className={`
                    h-screen 
                    bg-primary
                    ml-auto
                `}
            ></main>

            <footer></footer>
        </div>
    );
};

export default HomePage;
