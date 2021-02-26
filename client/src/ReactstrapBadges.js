import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class ReactstrapAlerts extends Component {
    render() {
        return (
            <div>
                <h1>PROUDCT NAME <Badge color="secondary">hit</Badge></h1>
                <Button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>
                <Badge color="danger" pill>pill</Badge>
                <Badge href="https://github.com/heedeandean?tab=repositories" color="light">GoLink</Badge>
            </div>
        )
    }
}

export default ReactstrapAlerts;