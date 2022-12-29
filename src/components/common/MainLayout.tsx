import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core';
import { PROJECT_NAME } from '../../constants/general';
import { SideBar } from '../navigation/SideBar';
import { FooterMain } from '../footer/FooterMain';
import { TopBar } from '../navigation/TopBar';
import { mainTheme } from '../../styles/material_ui_presets/main_preset';
import { SidebarWidth, topBarHeight } from '../../common/constants';

interface MainLayoutProps {
    children: JSX.Element;
    title: string;
}

export const MainLayout = ({ children, title = 'Next' }: MainLayoutProps) => {
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
