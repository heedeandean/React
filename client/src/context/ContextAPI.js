import React from 'react';
import Children from './ContextChildren';

const { Provider, Consumer } = React.createContext()
export { Consumer }

class ContextAPI extends React.Component {

    render() {
        return (
            <Provider value="React">
                <Children />
            </Provider>
        )
    }
}

export default ContextAPI;