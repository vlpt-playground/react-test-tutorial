import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Post from '../components/Post';
import * as postActions from '../store/modules/post';

class PostContainer extends Component {
  loadData = async () => {
    const { PostActions } = this.props;
    try {
      await PostActions.getPost(1);
    } catch (e) {
      console.log(e);
    }
  }
  
  render() {
    const { title, body } = this.props;
    return (
      <Post title={title} body={body} onLoad={this.loadData}/>
    );
  }
}

export default connect(
  ({ post }) => ({
    title: post.title,
    body: post.body
  }), 
  (dispatch) => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(PostContainer);