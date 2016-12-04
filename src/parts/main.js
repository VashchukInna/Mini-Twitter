import React from 'react';
import jQuery from 'jquery';
import Login from './login';
import TextBox from './textbox';
import Comment from './comment';
export default class Main extends React.Component {
  render() {
    const comments = this._getComments();
    return(
        <div className="row comments-container">
        <div className="cell">
        <div className="main">
        {this.state.isLogged?<TextBox user={this.state.user} addComment={this._addComment} />: <Login _handleSubmit={this._handleSubmit}/>}
        <div className="comment-list">
        {comments}
        </div>
        </div>
        </div>
        </div>
  );
  }
  constructor() {
    super();
    this.state = {
      comments: [],
      user: null,
      showComments: false,
      isLogged: false
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._deleteComment = this._deleteComment.bind(this);
    this._addComment = this._addComment.bind(this);

  }
  _addComment(commentAuthor, commentBody) {
    const comment = {
      id: this.state.comments.length + 1,
      author: commentAuthor,
      body: commentBody,
    };
    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }
  _deleteComment(commentID) {
    const comments = this.state.comments.filter(
        comment => comment.id !== commentID
    );

    this.setState({comments});
  }
  _handleSubmit(data) {
    if(data.login && data.password) {
      this.setState({
        isLogged: true,
        user: data
      })
    }
  }
  _getComments() {
    return this.state.comments.map((comment) => {
      return <Comment
      {...comment}
      onDelete={this._deleteComment}
      key={comment.id} />
    });
  }
  componentWillMount() {
    this._fetchComments();
  }
  _fetchComments() {
    jQuery.ajax({
      method: 'GET',
      url: this.props,
      success: (comments) => {
        this.setState({ comments })
      }
    });
  }
}
Main.propTypes = {
  apiUrl: React.PropTypes.string.isRequired
};