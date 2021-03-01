import React, { Component } from 'react';

class ReactonMouseOver extends Component {

    MouseOver(tag) {
        console.log('TAG : ' + tag);
    }

    render() {
        return (
            <>
                <div onMouseOver={e => this.MouseOver("div")}>
                    <h3>DIV onMouseOver</h3>
                </div>
                <input type="text" onMouseOver={e => this.MouseOver("input")} />
                <select onMouseOver={e => this.MouseOver("select")}>
                    <option value="react">react</option>
                    <option value="python">python</option>
                </select>
            </>
        )
    }
}

export default ReactonMouseOver;