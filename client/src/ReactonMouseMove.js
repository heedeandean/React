import React, { Component } from 'react';

class ReactonMouseMove extends Component {

    MouseMove(tag) {
        console.log('TAG : ' + tag);
    }

    render() {
        return (
            <>
                <div onMouseMove={e => this.MouseMove("div")}>
                    <h3>DIV onMouseMove</h3>
                </div>
                <input type="text" onMouseMove={e => this.MouseMove("input")} />
                <select onMouseMove={e => this.MouseMove("select")}>
                    <option value="react">react</option>
                    <option value="python">python</option>
                </select>
            </>
        )
    }
}

export default ReactonMouseMove;