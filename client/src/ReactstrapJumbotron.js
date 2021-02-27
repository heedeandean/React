import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class ReactstrapJumbotron extends Component {

    render() {
        return (
            <>
                <Jumbotron style={{ backgroundColor: "#D38C7C" }}>
                    <h1 className="display-4">React</h1>
                    <p className="h4">개발하고 싶다</p>
                    <hr className="my-2" />
                    <p>ㅠㅠ</p>
                    <p className="lead">
                        <Button color="danger">Go Detail</Button>
                    </p>
                </Jumbotron>
            </>
        )
    }
}

export default ReactstrapJumbotron;