import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import combineSelectors from 'utils/combineSelectors';
import {
	switchRoomModalSelector,
	toggleSwitchRoomModalOff,
	roomsSelector,
	anyRoomsSelector,
	requestSwitchRoom,
	requestUnsubscribeListRoom,
	roomSelector,
} from 'flux/ducks/realtime';

import {
	DropdownV2,
	ComposedModal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'carbon-components-react';

export class SwitchRoomModal extends Component {
	static propTypes = {
		open: PropTypes.bool.isRequired,
	};

	handleCloseRoomModal = () => {
		this.props.toggleSwitchRoomModalOff();
		this.props.requestUnsubscribeListRoom();
	};

	enterRoom = ({ selectedItem }) => {
		if (selectedItem !== this.props.currentRoom) {
			this.props.requestSwitchRoom(selectedItem);
		}
		this.props.toggleSwitchRoomModalOff();
		this.props.requestUnsubscribeListRoom();
	};
	render() {
		return (
			<ComposedModal
				onClose={this.handleCloseRoomModal}
				open={this.props.open}
				danger={false}
				className="new-modal"
			>
				<ModalHeader
					label=""
					title="Switch Room"
					iconDescription="Close"
					buttonOnClick={this.handleCloseRoomModal}
				/>
				<ModalBody>
					{this.props.anyRooms ? (
						<DropdownV2
							value=""
							selectedText=""
							onChange={this.enterRoom}
							label="New Room Lists"
							ariaLabel="123"
							items={this.props.rooms}
							className="room-list"
						/>
					) : (
						<p>No rooms available right now</p>
					)}
				</ModalBody>
				<ModalFooter
					primaryButtonText=""
					primaryButtonDisabled={false}
					secondaryButtonText="Close"
					onRequestClose={this.handleCloseRoomModal}
				/>
			</ComposedModal>
		);
	}
}

const mapStateToProps = combineSelectors({
	currentRoom: roomSelector,
	open: switchRoomModalSelector,
	rooms: roomsSelector,
	anyRooms: anyRoomsSelector,
});
const mapDispatchToProps = {
	toggleSwitchRoomModalOff,
	requestSwitchRoom,
	requestUnsubscribeListRoom,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SwitchRoomModal);
