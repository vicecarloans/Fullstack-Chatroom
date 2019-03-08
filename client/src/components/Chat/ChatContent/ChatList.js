import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
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

	componentDidUpdate() {
		if (this.lastLine) {
			this.lastLine.scrollIntoView({ behavior: 'smooth' });
		}
	}

	renderLogs = () => {
		return this.props.logs.map((log, i) => {
			switch (log.type) {
				case ANNOUCEMENT:
					return (
						<AnnoucementChatLine
							ref={ref => {
								if (i === this.props.logs.length - 1) {
									this.lastLine = ref;
								}
							}}
							key={uuidv4()}
						>
							<Username>{log.author} : </Username>
							<ChatContent>{log.message}</ChatContent>
						</AnnoucementChatLine>
					);
				case NORMAL:
					return (
						<ChatLine
							ref={ref => {
								if (i === this.props.logs.length - 1) {
									this.lastLine = ref;
								}
							}}
							key={uuidv4()}
						>
							<Username>{log.author} : </Username>
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
