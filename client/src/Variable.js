import React, { Component } from 'react';

class Variable extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : ' + varName);
        var varName = 'react2'; // var(재선언O, 재할당O)
        console.log('varName2 : ' + varName);

        let letName = 'react';
        console.log('letName1 : ' + letName);
        letName = 'react2'; // let(재선언X, 재할당O)
        console.log('letName2 : ' + letName);

        const constName = 'react'; // const(재선언X, 재할당X) - 상수
        console.log('constName : ' + constName);
    }

    render() {
        return (
            <h2>[THIS IS Variable]</h2>
        )
    }
}

export default Variable;