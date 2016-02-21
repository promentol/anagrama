import React from 'react'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import Snackbar from 'material-ui/lib/snackbar'
import WordList from './WordList.jsx'
import solver from '../utils/solver'

export default class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			words: [],
			snackbarOpen: false,
			term: ''
		}

		this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
		this.handleResolve = this.handleResolve.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleKey = this.handleKey.bind(this);
	}
	handleKey(event){
		if (event.keyCode == 13) {
			this.handleResolve()
		}
	}
	handleInputChange(event){
		this.setState({
			term: event.target.value
		})
	}
	handleResolve() {
		const words = solver(this.state.term)
		this.setState({
			words: words,
			snackbarOpen: words && words.length ? false : true
		})
	}
	handleCloseSnackbar() {
		this.setState({
			snackbarOpen: false
		})
	}
	render() {
		const style = {
			container: {
				padding: 20,
				textAlign: 'center'
			},
			button: {
				marginTop: 8,
				marginBottom: 15
			}
		}
		return (
			<div id="containter" style={style.container}>
				<div>
					<TextField onKeyDown={this.handleKey} onChange={this.handleInputChange} hintText="Write your anagrama" />
				</div>
				<div>
					<RaisedButton style={style.button} onTouchTap={this.handleResolve} label="resolve" secondary={true}/>
				</div>
				<WordList words={this.state.words} />
				<Snackbar 
					open={this.state.snackbarOpen}
					message="No matching word have been found"
					autoHideDuration={2000}
					onRequestClose={this.handleCloseSnackbar}
				/>
      </div>
			)
	}
}