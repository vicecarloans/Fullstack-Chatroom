import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	ChatListWrapper,
	ChatLine,
	Username,
	AnnoucementChatLine,
	ChatContent,
} from './ChatContent.styles';
import combineSelectors from 'utils/combineSelectors';
import { messageLogSelector } from 'flux/ducks/realtime';
import { ANNOUCEMENT, NORMAL, ERROR } from 'constants/messageTypes';

export class ChatList extends Component {
	static propTypes = {
		logs: PropTypes.array,
	};

	static defaultProps = {
		logs: [],
	};

	renderLogs = () => {
		return this.props.logs.map(log => {
			switch (log.type) {
				case ANNOUCEMENT:
					return (
						<AnnoucementChatLine>
							<Username>{log.author}</Username>
							<ChatContent>{log.message}</ChatContent>
						</AnnoucementChatLine>
					);
				case NORMAL:
					return (
						<ChatLine>
							<Username>{log.author}</Username>
							<ChatContent>{log.message}</ChatContent>
						</ChatLine>
					);
				default:
					return null;
			}
		});
	};

	render() {
		return <ChatListWrapper>{this.renderLogs()}</ChatListWrapper>;
	}
}

const mapStateToProps = combineSelectors({
	logs: messageLogSelector,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatList);
