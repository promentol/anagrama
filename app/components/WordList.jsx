import React from 'react'
import CardText from 'material-ui/lib/card/card-text'
import Card from 'material-ui/lib/card/card'

export default class WordList extends React.Component {
	constructor(props) {
		super(props);
	}
	renderWord(word){
		return (
			<Card key={word}>
				<CardText>
					{word}
				</CardText>
			</Card>
			)
	}
	render() {
		return (
			<div>
				{this.props.words.map(this.renderWord)}
			</div>
			)
	}
}