import React from 'react';
import Post from './post';
export default class Comment extends React.Component {
    render() {
        let commentBody;
        if (!this.state.isAbusive) {
            commentBody = this.props.body;
        } else {
            commentBody = <em>Bad content</em>;
        }
        return (
            <div className="comment">
                <p className="comment-author">{this.props.author}</p>
                <p className="comment-body">{commentBody}</p>
                <div className="comment-actions">
                    <Post onConfirm={this._handleDelete}>Delete Comment?</Post>
                    <Post onConfirm={this._toggleAbuse}>Report</Post>
                </div>
            </div>
        );
    }

    _handleDelete() {
        this.props.onDelete(this.props.id);
    }

    _toggleAbuse() {
        this.setState({
            isAbusive: !this.state.isAbusive
        });
    }

    constructor() {
        super();
        this.state = {
            isAbusive: false
        };
        this._handleDelete = this._handleDelete.bind(this);
        this._toggleAbuse = this._toggleAbuse.bind(this);
    }
}