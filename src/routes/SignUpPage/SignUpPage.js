/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from 'react';

import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

import Form from './components/Form/Form';

import './index.scss';

const Wrapper = styled.div`
    padding: 10px;

    height: 80%;

    overflow-x: hidden;

    h1 {
        margin-bottom: 20px;

        font-size: larger;
        font-weight: bold;

        text-align: left;
    }
`;

const SignUpPage = () => {
    return (
        <Wrapper>
            <Form />
        </Wrapper>
    );
};

export default withRouter(SignUpPage);
