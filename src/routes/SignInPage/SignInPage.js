/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';

import styled from 'styled-components';

import { Form, TextInput, Button } from 'carbon-components-react';

import * as ROUTES from '../../constants/routes';

import AccountContext from '../../contexts/Account/AccountContext';

const { PasswordInput } = TextInput;

const Wrapper = styled.div`
    width: 100%;

    padding: 10px;

    overflow: hidden;

    div {
        margin-top: 10px;

        &:first-child {
            margin-top: 0;
        }
    }

    form {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -60%);

        width: 50%;

        overflow: hidden;

        @media (max-width: 375px) {
            top: initial;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);

            width: 90%;
        }

        h1 {
            font-size: larger;
            font-weight: bold;
            margin-bottom: 20px;
        }

        button {
            max-width: 100%;
            width: 100%;
        }
    }
`;

const SignInPage = () => {
    const {
        account,
        setAccount,
        validateEmail,
        handleLogin,
        error,
    } = useContext(AccountContext);

    const isValid =
        validateEmail(account.email) && account.password !== undefined;

    return (
        <Wrapper>
            <Form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                {error.error && (
                    <span
                        style={{
                            display: 'block',
                            marginBottom: 20,
                            lineHeight: 2,
                        }}
                    >
                        <span role="img" aria-label="warning">
                            ⚠️
                        </span>{' '}
                        {error.message}
                    </span>
                )}
                <TextInput
                    id="email"
                    labelText="Email *"
                    placeholder="Stephen.Alt@ibm.com"
                    className="signin__btn"
                    onBlur={(e) => {
                        if (validateEmail(e.target.value)) {
                            setAccount('email', e);
                        }
                    }}
                />
                <PasswordInput
                    id="password"
                    labelText="Password *"
                    placeholder="***************"
                    className="signin__btn"
                    onBlur={(e) => {
                        if (
                            e.target.value !== '' &&
                            !/\s+/g.test(e.target.value)
                        ) {
                            setAccount('password', e);
                        }
                    }}
                />
                <Button kind="primary" type="submit" disabled={!isValid}>
                    Sign in
                </Button>
                <Button
                    kind="secondary"
                    style={{ marginTop: 10 }}
                    onClick={() => {
                        window.location.href = `${ROUTES.PASSWORD_FORGET}`;
                    }}
                >
                    Forgot your password?
                </Button>
                <Button
                    kind="secondary"
                    style={{ marginTop: 10 }}
                    onClick={() => {
                        window.location.href = `${ROUTES.SIGN_UP}`;
                    }}
                >
                    Don't have an Account? Sign Up!
                </Button>
            </Form>
        </Wrapper>
    );
};

export default SignInPage;
