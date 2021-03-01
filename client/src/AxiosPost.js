import React, { Component } from 'react';
import axios from "axios";

class AxiosPost extends Component {

    componentDidMount() {
        axios.post('http://date.jsontest.com/', {
            a: "react", b: 1
        }).then(response => { alert(response.data.date) })
    }

    render() {
        return (
            <h1>AxiosPost</h1>
        )
    }
}

export default AxiosPost;