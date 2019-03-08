import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import combineSelectors from 'utils/combineSelectors';
import { startChannel } from 'flux/ducks/realtime';

export class Chat extends Component {
	static propTypes = {
		startChannel: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.startChannel();
	}

	render() {
		return <div>Chat</div>;
	}
}

const mapStateToProps = combineSelectors({});

const mapDispatchToProps = {
	startChannel,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat);
