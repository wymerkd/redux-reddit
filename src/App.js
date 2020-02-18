import React from 'react';
import NewPostControl from './components/NewPostControl';
import NewPostForm from './components/NewPostForm';
import Post from './components/Post';
import PostList from './components/PostList';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Error404 from './components/Error404';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList =
    this.handleAddingNewPostToList.bind(this);
  }
  handleAddingNewPostToList(newPost){
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }
  render(){
  return (
    <div>
        <Header/>
        <Switch>
          <Route path='/newpost' render={()=><NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />} />
          <Route exact path='/' render={()=><PostList postList={this.state.masterPostList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
  );
}
}

export default App;
