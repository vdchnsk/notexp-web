import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { BaseURI } from '@common/constants/general';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { authActions, authState } from '@/redux/slices/AuthSlice';
import { MainLayout } from '@components/layout/MainLayout';

export const AuthTypes = {
    login: {
        title: 'Log in',
        request: `${BaseURI}/...`,
    },
};

export interface IAuthType {
    title: string;
    request: string;
}

interface IAuthScreenConfig {
    config: IAuthConfig;
}

export interface IAuthConfig {
    type: IAuthType;
    passEmail?: boolean;
    passEmailOrLogin?: boolean;
    passLogin?: boolean;
    passPassword?: boolean;
    passPasswordConfirm?: boolean;
    confirmCaptcha?: boolean;
}

export const AuthScreen = ({ config }: IAuthScreenConfig): JSX.Element => {
    const [emailOrLogin, setEmailOrLogin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');

    const dispatch = useAppDispatch();
    const currentAuthState = useAppSelector(authState);

    return (
        <MainLayout title={`${config.type.title}`}>
            <div
                className={`
                    bg-secondary
                    flex justify-center items-center
                    h-screen w-full
                    overflow-auto
                    text-primary
                `}
            >
                <div
                    className={`
                        flex flex-col 
                        items-center  justify-center
                        overflow-auto
                        gap-4
                        min-h-[300px] max-h-[500px]
                        w-1/2 max-w-[800px] min-w-[300px]
                        bg-secondary_light
                        rounded-md
                    `}
                >
                    {/* ! For tests */}

                    <h1> Log in</h1>
                    <div
                        className={`
                            flex flex-col gap-3
                            h-1/2 w-full
                            items-center
                            mt-[4px] mb-[3px]
                        `}
                    >
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={(values) => {}}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="flex flex-col gap-4">
                                    <Field type="text" name="email" />
                                    <ErrorMessage name="email" component="div" />

                                    <Field type="password" name="password" />
                                    <ErrorMessage name="password" component="div" />
                                    <button
                                        className={`
                                            bg-call_to_acion
                                            p-1
                                            rounded-sm
                                        `}
                                        onClick={() => {
                                            dispatch(authActions.loginUser({ emailOrLogin, password }));
                                        }}
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
                        {/* {config.passEmailOrLogin && (
                            <AppTextField
                                onChange={(event: any) => {
                                    setEmailOrLogin(event.target.value);
                                }}
                                placeholder={'Pass email or login'}
                                value={emailOrLogin}
                            />
                        )}
                        {config.passEmail && (
                            <AppTextField
                                onChange={(event: any) => {
                                    setEmail(event.target.value);
                                }}
                                placeholder={'Pass email'}
                                value={email}
                            />
                        )}
                        {config.passLogin && (
                            <AppTextField
                                onChange={(event: any) => {
                                    setLogin(event.target.value);
                                }}
                                placeholder={'Pass login'}
                                value={login}
                            />
                        )}
                        {config.passPassword && (
                            <AppTextField
                                onChange={(event: any) => {
                                    setPassword(event.target.value);
                                }}
                                placeholder={'Pass password'}
                                value={password}
                            />
                        )}
                        {config.passPasswordConfirm && (
                            <AppTextField
                                onChange={(event: any) => {
                                    setPasswordConfirm(event.target.value);
                                }}
                                placeholder={'Confirm password'}
                                value={passwordConfirm}
                            />
                        )} */}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
