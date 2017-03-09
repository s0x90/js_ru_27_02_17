import React, {PropTypes, Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'


class ArticleList extends Component {

    render() {
        const {articles, toggleOpenedEl, openedElId} = this.props;

        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openedElId}
                     toggleOpen={toggleOpenedEl(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default accordion(ArticleList)