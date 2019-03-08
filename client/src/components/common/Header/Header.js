import React, { PureComponent } from 'react';
import { Wrapper, HeaderLeft, HeaderRight, Logo } from './Header.styles';
import { withRouter, Link } from 'react-router-dom';

class Header extends PureComponent {
	render() {
		return (
			<Wrapper>
				<HeaderLeft>
					<Link to="/">
						<Logo>My Awesome Chat App</Logo>
					</Link>
				</HeaderLeft>
				<HeaderRight>
					<Link to="/">Chat</Link>

					<Link to="/api">Developer APIs</Link>
				</HeaderRight>
			</Wrapper>
		);
	}
}

export default withRouter(Header);
