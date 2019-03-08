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
import { requestAddMessageToGroup } from 'flux/ducks/realtime';

export class ChatBox extends Component {
	state = {
		text: '',
	};
	handleOnTextChange = e => {
		this.setState({ text: e.target.value });
	};
	handleSendMessage = () => {
		const { text } = this.state;
		if (text) {
			this.props.requestAddMessageToGroup(text);
		}
	};
	render() {
		return (
			<ChatBoxWrapper>
				<ChatInputArea
					onChange={this.handleOnTextChange}
					placeholder="Enter your chat message..."
				/>
				<ChatActions>
					<SendActionButton onClick={this.handleSendMessage}>
						Send Message
					</SendActionButton>
					<SwitchRoomButton onClick={() => {}}>
						Switch Room
					</SwitchRoomButton>
				</ChatActions>
			</ChatBoxWrapper>
		);
	}
}

const mapStateToProps = combineSelectors({});

const mapDispatchToProps = {
	requestAddMessageToGroup,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatBox);
