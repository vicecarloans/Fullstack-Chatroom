import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import combineSelectors from 'utils/combineSelectors';
import {
	startChannel,
	inMessExistSelector,
	inMessSelector,
} from 'flux/ducks/realtime';
import { ChatBox, ChatList } from 'components/Chat';
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
					/>
				);
			case ERROR:
				return (
					<ToastNotification
						kind="error"
						title="Message from BOT"
						subtitle={message}
						className="in-mail-noti"
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
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat);
