import React from 'react';
import Post from './post';
export default class Comment extends React.Component {
  render() {
    return(
        <div className="comment">
        <p className="comment-author">{this.props.author}</p>
        <p className="comment-body">{commentBody}</p>
        <div className="comment-actions">
        <Post onConfirm={this._handleDelete}>Delete Comment?</Post>
        </div>
        </div>
  );
  }
  _handleDelete() {
    this.props.onDelete(this.props.id);
  }
}
