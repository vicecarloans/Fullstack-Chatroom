import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import combineSelectors from 'utils/combineSelectors';
import { startChannel } from 'flux/ducks/realtime';
import { ChatBox } from 'components/Chat';
import { Button } from 'carbon-components-react';
import { ProgressModal } from '../../components/Chat';

export class Chat extends Component {
	static propTypes = {
		startChannel: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.startChannel();
	}

	render() {
		return <div></div>;
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
