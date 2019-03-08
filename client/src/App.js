import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { MainContainer } from './App.styles';
import Chat from './screens/Chat';
import API from './screens/API';
class App extends Component {
	render() {
		return (
			<Router>
				<MainContainer>
					<Switch>
						<Route exact path="/" component={Chat} />
						<Route exact path="/api" component={API} />
					</Switch>
				</MainContainer>
			</Router>
		);
	}
}

export default App;
