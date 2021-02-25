import React, { Component } from 'react';

class Es6 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var jsString1 = '자바스크립트';
        var jsString2 = '!\n다음 줄';
        console.log(jsString1 + ' 문자열' + jsString2 + '~');

        var Es6String1 = 'Es6';
        var Es6String2 = '!';
        console.log(`${Es6String1} 문자열${Es6String2}!
다음 줄`);

        var LongString = "ES6의 String 함수들";
        console.log('startsWith : ' + LongString.startsWith("ES6의"));
        console.log('endsWith : ' + LongString.endsWith("함수들"));
        console.log('includes : ' + LongString.includes("추가된 String"));

    }

    render() {
        return (
            <h2>[THIS IS ES6 STRING.]</h2>
        )
    }
}

export default Es6;