import React from 'react';
import { Consumer } from './ContextAPI2';

class ContextChildren3 extends React.Component {

    render() {
        return (
            <Consumer>
                {contextValue => <button onClick={e => contextValue.setStateFunc("react")}>{contextValue.name}_button</button>}
            </Consumer>
        )
    }
}

export default ContextChildren3;