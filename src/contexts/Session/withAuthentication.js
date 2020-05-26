/* eslint-disable no-unused-vars */
import React from 'react';

import AuthUserContext from './AuthUserContext';
import { withFirebase } from '../Firebase';

const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: localStorage.hasOwnProperty('authUser') ? JSON.parse(localStorage.getItem('authUser')) : {},
            };
        }

        componentDidMount() {
            const { firebase } = this.props;

            this.listener = firebase.onAuthUserListener(
                (authUser) => {
                    if (typeof authUser !== 'undefined' || authUser !== null) {
                        localStorage.setItem('authUser', JSON.stringify(authUser));
                    }
                },
                () => {
                    if (localStorage.hasOwnProperty('authUser')) {
                        localStorage.removeItem('authUser');
                    }
                    this.setState({ authUser: null });
                }
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;
