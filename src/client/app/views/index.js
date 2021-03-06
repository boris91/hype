import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import 'app/styles/index.less';

class AppLayout extends Component {
	render() {
		return <div id='app' class='app'>
			<div id='header' class='header'>
				<Link to='home' class='btn-primary'>Home</Link>
				<Link to='user' class='btn-default'>User</Link>
				<Link to='about' class='btn-default'>About</Link>
			</div>
			{this.props.children}
			<div id='footer' class='footer'>
				AppFooter
			</div>
		</div>;
	}
};

const stateToProps = state => state;
const dispatchToProps = (/*dispatch*/) => ({ /*pageActions: bindActionCreators(pageActions, dispatch)*/ });
export default connect(stateToProps, dispatchToProps)(AppLayout);