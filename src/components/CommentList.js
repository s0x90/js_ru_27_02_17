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
        if (this.state.linkText === 'show comments') {
            this.setState({
                linkText: 'hide comments'
            })} else {
                this.setState({
                    linkText: 'show comments'
                })
            }

        this.setState({
            isOpened: !this.state.isOpened
        })
    };

    render() {

        const {comments} = this.props;
        const {isOpened} = this.state;

        if (comments !== undefined) {
            const commentComponents = isOpened ? comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>) : null;
            const {linkText} = this.state;

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
