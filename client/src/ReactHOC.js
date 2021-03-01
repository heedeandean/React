import React from 'react';
import withHOC from './withHOC';

class ReactHOC extends React.Component {

    render() {
        console.log('2. HOC render')
        return (
            <h2>props.name : {this.props.name}</h2>
        )
    }
}

export default withHOC(ReactHOC, 'ReactHOC');