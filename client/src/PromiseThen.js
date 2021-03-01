import React, { Component } from 'react';

class PromiseThen extends Component {

    componentDidMount() {
        new Promise(resolve => {
            setTimeout(function() {
                resolve('react');
            }, 1500);
        }).then(function(result) {
            console.log(result);
            return result + 1;
        }).then(result => {
            console.log(result);
        })
    }

    render() {
        return (
            <h1>Promise</h1>
        )
    }
}

export default PromiseThen;