import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import combineSelectors from 'utils/combineSelectors';
import {
	ChatBoxWrapper,
	ChatInputArea,
	ChatActions,
	SendActionButton,
	SwitchRoomButton,
} from './ChatContent.styles';

export class ChatBox extends Component {
	static propTypes = {
		prop: PropTypes,
	};

	state = {
		text: '',
	};
	handleOnTextChange = e => {
		this.setState({ text: e.target.value });
	};
	render() {
		return (
			<ChatBoxWrapper>
				<ChatInputArea
					onChange={this.handleOnTextChange}
					placeholder="Enter your chat message..."
				/>
				<ChatActions>
					<SendActionButton>Send Message</SendActionButton>
					<SwitchRoomButton>Switch Room</SwitchRoomButton>
				</ChatActions>
			</ChatBoxWrapper>
		);
	}
}

const mapStateToProps = combineSelectors({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatBox);
