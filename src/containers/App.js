import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			nyanko: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ nyanko: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	render() {
		const filteredNyanko = this.state.nyanko.filter(nyanko => {
			return nyanko.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		});
		if (this.state.nyanko.length === 0) {return <h1 className='tc'>Loading...</h1>}
		else {
			return (
				<div className='tc'>
					<h1 className='f1'>Nyanko Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList nyanko={filteredNyanko}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			)
		}
	}
}

export default App;
