import React, { Component } from 'react';

class FetchGet extends Component {

    componentDidMount = async () => {
        const response = await fetch('http://date.jsontest.com/');
        const body = await response.json();
        alert(body.date)
    }

    render() {
        return (
            <h1>FetchGet</h1>
        )
    }
}

export default FetchGet;