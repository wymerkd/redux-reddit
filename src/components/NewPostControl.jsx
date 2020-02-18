import React from 'react';
import NewPostForm from './NewPostForm';
import ConfirmationQuestion from './ConfirmationQuestion';
import PropTypes from 'prop-types';

class NewPostControl extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false
  };
this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);}

handleTroubleshootingConfirmation(){
  this.setState({formVisibleOnPage: true});
}

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewPostForm onNewPostCreation={this.props.onNewPostCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestion onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}
NewPostControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};
export default NewPostControl;
