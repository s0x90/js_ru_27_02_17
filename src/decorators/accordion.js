import React from 'react';


export default (CustomComponent) => class DecoratedComponent extends React.Component {
    state = {
        openedElId: null
    };


    toggleOpenedEl = openedElId => e => {
        this.setState({
            openedElId
        })
    };

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpenedEl={this.toggleOpenedEl} />
    }
}