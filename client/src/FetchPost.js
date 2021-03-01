import React, { Component } from 'react';

class FetchPost extends Component {

    componentDidMount = async () => {
        const response = await fetch('http://date.jsontest.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { a: "react", b: 1 }
        });
        const body = await response.json();
        alert(body.date)
    }

    render() {
        return (
            <h1>FetchPost</h1>
        )
    }
}

export default FetchPost;