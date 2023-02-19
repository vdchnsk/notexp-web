import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core';
import { PROJECT_NAME, topBarHeight } from '../../common/constants/general';
import { FooterMain } from './footer/FooterMain';
import { mainTheme } from '../../styles/material_ui_presets/main_preset';
import { SideBar } from './navigation/SideBar';
import { TopBar } from './navigation/TopBar';

interface MainLayoutProps {
    children: JSX.Element;
    title: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title = PROJECT_NAME }) => {
    return (
        <MuiThemeProvider theme={mainTheme}>
            <Head>
                <title>
                    {PROJECT_NAME} | {title}
                </title>
            </Head>
            <div className={`flex flex-row`}>
                <SideBar />
                <main className={`flex-1`}>
                    <TopBar />
                    <div style={{ transform: `translateY(calc(${topBarHeight}))` }}>{children}</div>
                    <FooterMain />
                </main>
            </div>
        </MuiThemeProvider>
    );
};
