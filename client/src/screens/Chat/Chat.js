import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import combineSelectors from 'utils/combineSelectors';
import {
	startChannel,
	inMessExistSelector,
	inMessSelector,
	deleteInMessage,
} from 'flux/ducks/realtime';
import {
	ChatBox,
	ChatList,
	ProgressModal,
	SwitchRoomModal,
} from 'components/Chat';
import { ToastNotification } from 'carbon-components-react';
import { PageWrapper } from './Chat.styles';
import { NORMAL, ERROR } from 'constants/messageTypes';

export class Chat extends Component {
	static propTypes = {
		startChannel: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.startChannel();
	}

	renderInMessage = () => {
		const { shouldOpenToast, inMess } = this.props;
		return (
			shouldOpenToast &&
			this.renderToast({ kind: inMess.type, message: inMess.message })
		);
	};

	renderToast = ({ kind, message }) => {
		switch (kind) {
			case NORMAL:
				return (
					<ToastNotification
						kind="info"
						title="Message from BOT"
						subtitle={message}
						className="in-mail-noti"
						caption=""
						onCloseButtonClick={this.props.deleteInMessage}
					/>
				);
			case ERROR:
				return (
					<ToastNotification
						kind="error"
						title="Message from BOT"
						subtitle={message}
						className="in-mail-noti"
						caption=""
						onCloseButtonClick={this.props.deleteInMessage}
					/>
				);
			default:
				return null;
		}
	};
	render() {
		return (
			<PageWrapper>
				<ChatList />
				<ChatBox />

				<ProgressModal />

				<SwitchRoomModal />
				{this.renderInMessage()}
			</PageWrapper>
		);
	}
}

const mapStateToProps = combineSelectors({
	shouldOpenToast: inMessExistSelector,
	inMess: inMessSelector,
});

const mapDispatchToProps = {
	startChannel,
	deleteInMessage,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat);
