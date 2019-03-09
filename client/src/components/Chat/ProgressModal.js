import React, { Component } from 'react';
import combineSelectors from 'utils/combineSelectors';
import { connect } from 'react-redux';
import {
	stepSelector,
	nextStep,
	prevStep,
	closeRegModal,
	closeRoomModal,
	requestChangeUsername,
	requestJoinRoom,
	roomsSelector,
	anyRoomsSelector,
	requestSubscribeListRoom,
	requestUnsubscribeListRoom,
} from 'flux/ducks/realtime';
import {
	ProgressIndicator,
	ProgressStep,
	Modal,
	TextInput,
	DropdownV2,
} from 'carbon-components-react';

export class ProgressModal extends Component {
	state = {
		desiredUsername: '',
		desiredRoom: '',
	};
	handleCloseRegModal = () => {};

	handleCloseRoomModal = () => {};

	handleNextStep = () => {
		this.props.nextStep();
	};

	handlePrevStep = () => {
		this.props.prevStep();
	};

	handleSubmitUsername = () => {
		const { desiredUsername } = this.state;
		if (desiredUsername) {
			this.props.requestChangeUsername(desiredUsername);
			this.props.requestSubscribeListRoom();
			this.props.nextStep();
		}
	};

	handleSubmitRoom = () => {
		const { desiredRoom } = this.state;
		if (desiredRoom) {
			this.props.requestJoinRoom(desiredRoom);
			this.props.requestUnsubscribeListRoom();
			this.props.closeRegModal();
			this.props.closeRoomModal();
		}
	};

	enterRoom = ({ selectedItem }) => {
		this.props.requestJoinRoom(selectedItem);
		this.props.requestUnsubscribeListRoom();
		this.props.closeRegModal();
		this.props.closeRoomModal();
	};

	handleUsernameChange = e => {
		this.setState({ desiredUsername: e.target.value });
	};
	handleNewRoomName = e => {
		this.setState({ desiredRoom: e.target.value });
	};

	render() {
		return (
			<div>
				{/* Reg Modal */}
				<Modal
					open={this.props.step.openRegModal}
					danger={false}
					shouldSubmitOnEnter={false}
					modalHeading="Register"
					modalAriaLabel=""
					primaryButtonText="Next Step"
					secondaryButtonText="Previous Step"
					iconDescription="Close the modal"
					onRequestClose={this.handleCloseRegModal}
					onRequestSubmit={this.handleSubmitUsername}
					onSecondarySubmit={this.handlePrevStep}
				>
					<ProgressIndicator
						className="indicator"
						currentIndex={this.props.step.step}
					>
						<ProgressStep
							label="Enter Username"
							description="Step 1: Getting started with Carbon Design System"
							onClick={this.handleNextStep}
						/>
						<ProgressStep
							label="Select Room"
							description="Step 5: Getting started with Carbon Design System"
							disabled
							onClick={this.handleNextStep}
						/>
					</ProgressIndicator>

					<TextInput
						placeholder="Enter Username"
						type="text"
						labelText="Username"
						onChange={this.handleUsernameChange}
						id="username"
					/>
				</Modal>
				{/* Room Modal */}
				<Modal
					open={this.props.step.openRoomModal}
					danger={false}
					shouldSubmitOnEnter={false}
					modalHeading="Enter Room"
					modalAriaLabel=""
					primaryButtonText="Create Room"
					secondaryButtonText="Previous Step"
					iconDescription="Close the modal"
					onRequestClose={this.handleCloseRoomModal}
					onRequestSubmit={this.handleSubmitRoom}
					onSecondarySubmit={this.handlePrevStep}
				>
					<ProgressIndicator
						className="indicator"
						currentIndex={this.props.step.step}
					>
						<ProgressStep
							label="Enter Username"
							description="Step 1: Getting started with Carbon Design System"
							onClick={this.handleNextStep}
						/>
						<ProgressStep
							label="Select Room"
							description="Step 5: Getting started with Carbon Design System"
							disabled
							onClick={this.handleNextStep}
						/>
					</ProgressIndicator>

					{this.props.anyRooms ? (
						<DropdownV2
							value=""
							selectedText=""
							onChange={this.enterRoom}
							label="Room Lists"
							ariaLabel="Choose your room list"
							className="room-list"
							items={this.props.rooms}
						/>
					) : (
						<p>No rooms available right now</p>
					)}
					<TextInput
						type="text"
						placeholder="Enter Room Name"
						onChange={this.handleNewRoomName}
						id="room"
						className="create-room"
					/>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = combineSelectors({
	step: stepSelector,
	rooms: roomsSelector,
	anyRooms: anyRoomsSelector,
});

const mapDispatchToProps = {
	nextStep,
	prevStep,
	closeRegModal,
	closeRoomModal,
	requestChangeUsername,
	requestJoinRoom,
	requestSubscribeListRoom,
	requestUnsubscribeListRoom,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgressModal);
