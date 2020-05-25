/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

import Home20 from '@carbon/icons-react/es/home/20';
import User20 from '@carbon/icons-react/es/user/20';

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 6vh;
    background-color: #0061ff;
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        list-style-type: none;
        li {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 20px;
            line-height: 0;
            @media (max-width: 375px) {
                padding: 18px;
            }
            svg {
                width: 20px;
                height: 20px;
                fill: white;
            }
            &:hover {
                cursor: pointer;
                background-color: #2579ff;
            }
        }
    }
`;

const MenuBar = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to={ROUTES.DASHBOARD}>
                        <Home20 />
                    </Link>
                </li>
                <li>
                    <Link to={ROUTES.ACCOUNT}>
                        <User20 />
                    </Link>
                </li>
            </ul>
        </Wrapper>
    );
};

export default MenuBar;
