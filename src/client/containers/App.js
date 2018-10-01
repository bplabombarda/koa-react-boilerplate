import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import { hot } from 'react-hot-loader';


class App extends Component {
	constructor(props){
        super(props);
        this.state = {
            markets: []
        };
    }

    componentDidMount() {
        console.log('[Component mounted]')
	}
 	
	render() {
		return (
			<h1>Farmony</h1>
		);
	}
};

export default hot(module)(App);