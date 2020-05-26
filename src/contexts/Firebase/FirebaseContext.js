import React from 'react';
import firebase from 'Firebase';

const FirebaseContext = React.createContext();

export const withFirebase = (Component) => (props) => (
    <FirebaseContext.Consumer>
        {(firebase) => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;
