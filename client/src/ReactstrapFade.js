import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';

class ReactstrapFade extends Component {
    constructor(props) {
        super(props);
        this.state = { fadeInOut: true }
    }

    toggle = (e) => {
        this.setState({ fadeInOut: !this.state.fadeInOut })
    }

    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag="h1">
                    나는 개발이 하고 싶다.
                </Fade>
            </div>
        )
    }
}

export default ReactstrapFade;