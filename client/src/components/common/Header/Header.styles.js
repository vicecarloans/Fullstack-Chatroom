import styled from 'styled-components';

export const Wrapper = styled.header`
	padding: 0.5rem 1rem;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: nowrap;
	max-height: 60px;
	z-index: 51;
`;

export const HeaderLeft = styled.div`
	display: flex;
	flex-direction: row;
	flex: 0.7;
`;

export const HeaderRight = styled.div`
	display: flex;
	flex: 0.3;
	justify-content: space-evenly;
`;

export const Logo = styled.h1`
	font-weight: bold;
	font-size: 28px;
	text-decoration: none;
	color: #000;
`;
