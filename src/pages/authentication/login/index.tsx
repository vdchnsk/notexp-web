import type { NextPage } from 'next';
import { AuthScreen, AuthTypes, IAuthConfig } from '@components/screens/authentication/AuthCommon';

const Login: NextPage = (): JSX.Element => {
    const loginScreenConfig: IAuthConfig = {
        type: AuthTypes.login,
        passEmailOrLogin: true,
        passPassword: true,
    };

    return <AuthScreen config={loginScreenConfig} />;
};

export default Login;
