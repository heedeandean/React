import React, { Component } from 'react';

class SpreadOperator extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        // javascript Array
        var varArray1 = ['n1', 'n2'];
        var varArray2 = ['n3', 'n4'];
        var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        console.log('1. sumVarArr : ' + sumVarArr);

        // ES6 
        let sumLetArr = [...varArray1, ...varArray2];
        console.log('2. sumLetArr : ' + sumLetArr);

        const [s1, s2, ...remain] = sumLetArr;
        console.log('3. s1 : ' + s1 + ', s2 : ' + s2 + ', remain : ' + remain);

        var varObj1 = {key1 : 'val1', key2 : 'val2'};
        var varObj2 = {key2 : 'new2', key3 : 'val3'};

        // javascript Object
        var sumVarObj = Object.assign({}, varObj1, varObj2);
        console.log('4. sumVarObj : ' + JSON.stringify(sumVarObj));
        
        // ES6
        var sumLetObj = {...varObj1, ...varObj2};
        console.log('5. sumLetObj : ' + JSON.stringify(sumLetObj));
        var {key1, key3, ...others} = sumLetObj;
        console.log('6. key1 : ' + key1 + ', key3 : ' + key3 + ', others : ' + JSON.stringify(others));
    }

    render() {
        return (
            <h2>[THIS IS SpreadOperator]</h2>
        )
    }
}

export default SpreadOperator;