/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from 'react';

import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';

const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Loading = () => (
    <ProgressWrapper>
        <CircularProgress style={{ color: '#000' }} />
    </ProgressWrapper>
);

export default Loading;
