/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import { compose } from 'recompose';

import {
	withAuthorization,
	withEmailVerification,
} from '../../contexts/Session';
import AccountContext from '../../contexts/Account/AccountContext';

import Loading from '../../components/Loading';

class DashboardPage extends Component {
	static contextType = AccountContext;

	constructor(props) {
		super(props);

		this.state = {
			loading: false,
		};
	}

	componentWillMount() {
		const { firebase } = this.props;
		const { user } = this.context;
		console.log('👨🏼‍💻 user=', user);

		// Enter logic to handle loading state here.
		// By default loading state is set to false.
		// If it is required, set it to true in the constructor() and
		// manually set it to false after the desired logic is handled within
		// componentWillMount().
	}

	render() {
		const { loading } = this.state;

		return <>{loading ? <Loading /> : <></>}</>;
	}
}

export default compose(
	withEmailVerification,
	withAuthorization((authUser) => !!authUser)
)(DashboardPage);
