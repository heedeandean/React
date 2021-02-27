import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class ReactstrapListGroup extends Component {

    render() {
        return (
            <>
                <ListGroup>
                    <ListGroupItem color="danger" className="justify-content-between">
                        React
                        <Badge pill>1</Badge>
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">Disable</ListGroupItem>
                    <ListGroupItem tag="a" href="https://github.com/heedeandean?tab=repositories">heedeandean git</ListGroupItem>
                    <ListGroupItem tag="button" action onClick={e => alert("button")}>Button</ListGroupItem>
                </ListGroup>
            </>
        )
    }
}

export default ReactstrapListGroup;