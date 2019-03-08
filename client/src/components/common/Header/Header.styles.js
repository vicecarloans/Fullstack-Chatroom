import styled from 'styled-components';

import media from 'common/utils/styling/media';

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
	background-color: white;

	${media.tablet`
    padding-left: 5%;
  `};
`;

export const HeaderLeft = styled.div`
	display: flex;
	flex-direction: row;
`;

export const HeaderRight = styled.div`
	display: flex;
	flex-direction: row;
`;
