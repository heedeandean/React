import React, { Component } from 'react';

class ReactonMouseOut extends Component {

    MouseOut(tag) {
        console.log('TAG : ' + tag);
    }

    render() {
        return (
            <>
                <div onMouseOut={e => this.MouseOut("div")}>
                    <h3>DIV onMouseOut</h3>
                </div>
                <input type="text" onMouseOut={e => this.MouseOut("input")} />
                <select onMouseOut={e => this.MouseOut("select")}>
                    <option value="react">react</option>
                    <option value="python">python</option>
                </select>
            </>
        )
    }
}

export default ReactonMouseOut;