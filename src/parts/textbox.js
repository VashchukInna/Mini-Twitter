import React from 'react';
export default class TextBox extends React.Component {
    render() {
        return (
            <form className="textbox" onSubmit={this._submit}>
                <div className="textbox-fields">{this.props.user.login}
        <textarea className="textbox-area" placeholder="Enter your comment" value={this.state.value}
                  ref={c => this._body = c}>
        </textarea>
                </div>
                <div className="textbox-actions">
                    <button type="submit">Post</button>
                </div>
            </form>
        );
    }

    _submit(event) {
        event.preventDefault();
        this.props.addComment(this.props.user.login, this._body.value);
    }

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this._handleSubmit = this._submit.bind(this);
    }
}

import React from 'react';