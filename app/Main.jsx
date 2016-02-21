import AppBar from 'material-ui/lib/app-bar';
import React from 'react'
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';
import Card from 'material-ui/lib/card/card';
import Snackbar from 'material-ui/lib/snackbar';
import IconButton from 'material-ui/lib/icon-button';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }

    handleRequestClose () {
        this.setState({
            open: false
        });
    }

    handleTouchTap (){
        this.setState({
          open: true
        });
    }

    openGitHub (){
       alert('asdfg');
    }

    render() {
        const style = {
           title:{
            cursor: 'pointer'
           },
          container: {
            padding: 20,
            textAlign: 'center'
          },
          card: {
          },
          button: {
            marginTop: 8,
            marginBottom: 15
          }
        }
        return (
<div>
    <AppBar
      showMenuIconButton={false}
      title="Anagrama"
      iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github" />}
      onTitleTouchTap={this.openGitHub}
      titleStyle={style.title}
    />
    <div id="containter" style={style.container}>
      <div><TextField style={style.textField} hintText="asd" /></div>
      <div><RaisedButton style={style.button} onTouchTap={this.handleTouchTap} label="resolve" secondary={true}/></div>
      <div>
        <Card style={style.card}>
            <CardText>
              Crazy
            </CardText>
        </Card>
        <Card style={style.card}>
            <CardText>
              Crazy
            </CardText>
        </Card>
        <Card style={style.card}>
            <CardText>
              Crazy
            </CardText>
        </Card>
        <Card style={style.card}>
            <CardText>
              Crazy
            </CardText>
        </Card>
        <Card style={style.card}>
            <CardText>
              Crazy
            </CardText>
        </Card>
      </div>
    </div>
    <Snackbar 
        open={this.state.open}
        message="Event added to your calendar"
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
   />
</div>
  );
	}
}