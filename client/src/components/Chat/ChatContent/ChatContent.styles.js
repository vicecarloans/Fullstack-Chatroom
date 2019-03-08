import styled from 'styled-components';

export const ChatListWrapper = styled.div`
	height: 70%;
	padding: 20px;
	background-color: #fff;
	border: 1px solid #000;

	border-bottom: none;
`;

export const ChatBoxWrapper = styled.div`
	display: flex;
	height: 30%;
	background-color: #fff;
	border: 1px solid #000;
`;

export const ChatInputArea = styled.textarea`
	flex: 0.7;
	height: 100%;
	font-size: 18px;
	resize: none;
	outline: none;
	border: none;
	border-right: 1px solid black;
`;

export const ChatActions = styled.div`
	flex: 0.3;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const ActionButton = styled.button`
	flex: 0.5;
	outline: 0;
	cursor: pointer;
	color: #000;
	text-align: center;
	font-size: 20px;
`;

export const SendActionButton = styled(ActionButton)`
	background-color: #00ba00;
`;

export const SwitchRoomButton = styled(ActionButton)`
	background-color: #b23d00;
`;

export const ChatLine = styled.div`
	margin: 20px;
	display: flex;
	flex-wrap: wrap;

	width: 100%;
`;

export const Username = styled.p`
	font-weight: bold;
	color: #000;
	font-size: 18px;
`;

export const ChatContent = styled.p`
	color: #000;
`;

export const AnnoucementChatLine = styled(ChatLine)`
	justify-content: center;
	color: #00a300;
`;
