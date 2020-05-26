# Firebase React Starter Kit [![Build Status](https://travis-ci.org/nicholasadamou/firebase-react-starter-kit.svg?branch=master)](https://travis-ci.org/nicholasadamou/firebase-react-starter-kit)

A starter project for firebase authentication and management in React with styles from the [Carbon Design System](https://www.carbondesignsystem.com/) and the [Material Design System](https://material.io/design/).

This project was inspired by a guide written by [Robin Wieruch](https://www.robinwieruch.de/) found @ [A Firebase in React Tutorial for Beginners](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial).

## 📚 The Tech. Stack

This project uses the following technologies:

**The Front-End**:

-   [**React.js**](https://reactjs.org/) - For building the interface along with:
    -   [**React Router**](https://reacttraining.com/react-router/) - for declarative routing for React.
    -   [**React Context API**](https://reactjs.org/docs/context.html) - Context provides a way to pass data through the component tree without having to pass props down manually at every level.
    -   [**Styled-Components**](https://www.styled-components.com/) - for styling.

**The Back-End**:

-	[**Firebase**](https://firebase.google.com/) - For handling authentication and database management.

## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/)
-   [yarn](https://yarnpkg.com/en/)

### Installing

First, clone the repository, then run

```bash
yarn install # alteratively, 'npm' can be used
```

followed by

```bash
yarn start
```

### Modify `.env.example`

⚠️ Don't forget to modify the contents of `.env`! Take `.env.example` and fill out its contents and rename it to `.env`.

To properly fill out your `.env` file, you must first find your project's configuration in the settings page found on your project's dashboard at the firebase website. There, you'll have access to all the necessary information: secrets, keys, ID's and other details to set up your application. Copy these into the correct variables within `.env`.

The configuration file that contains the necessary information looks like the following image:

![configuration file](https://www.robinwieruch.de/static/9ad3fd77dff966a11ad6a396872edd03/a9a89/firebase-config.webp)

### Modify the Firebase Realtime Database Rules

Go to your firebase project dashboard and select *Database* under the *Develop* section on the side-bar. Change to the *realtime database* and select *Rules*. 

⚠️ This step is required because without it we cannot properly access the database and insert or update the necessary data when logging-in, creating an account, or modifying an already existing account.

Paste the following into the *Edit Rules* form:

```json
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      ".read": true,
      ".write": false,
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      },
    },
  },
}
```

## License

'firebase-react-starter-kit' is © Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE
