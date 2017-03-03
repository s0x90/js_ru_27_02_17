import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
        }
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        const body = isOpen ? <section>{article.text}</section> : null;
        const commens = body ? <CommentList comments={article.comments}/> : null;

        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
                <br/>
                {commens}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article