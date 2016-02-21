import AppBar from 'material-ui/lib/app-bar'
import Body from './Body.jsx'
import React from 'react'
import opener from '../utils/opener'

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.openWebPage = this.openWebPage.bind(this);
	}
	openWebPage() {
		opener('https://anagarama.github.io', function(err){
			console.log(err);
		});
	}
	render() {
		return (
			<div>
				<AppBar
					showMenuIconButton={false}
					title="Anagrama"
					onTitleTouchTap={this.openWebPage}
					titleStyle={{cursor: 'pointer'}}
				/>
				<Body />
			</div>
			)
	}
}