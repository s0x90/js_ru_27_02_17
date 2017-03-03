import React, {Component} from 'react';


class Comment extends Component {

    render() {
        const {comment} = this.props;
        return (
            <div>{comment.user} : {comment.text}</div>
        )
    }
}

export default Comment