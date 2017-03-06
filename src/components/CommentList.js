import React, {Component} from 'react'
import Comment from './Comment'


class CommentList extends Component {

    constructor() {
        super();
        this.state = {
            isOpened: false,
             //это совсем не нужно в state, ты можешь получить текст из прошлой переменной
            linkText: 'show comments'
        }
    }

    showComments = (e) => {
        e.preventDefault();

        this.setState({
            isOpened: !this.state.isOpened
        })
    };

    render() {

        const {comments} = this.props;
        const {isOpened} = this.state;

        if (comments !== undefined) {
            const commentComponents = isOpened ? comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>) : null;
            const linkText = this.state.isOpened ? 'hide comments' : 'show comments';

            return (
                <div>
                    <a href="#" onClick={this.showComments}>{linkText}</a>
                    <div>
                        <ul>
                            {commentComponents}
                        </ul>
                    </div>
                </div>
            )
        }
        return null

    }
}

export default CommentList
