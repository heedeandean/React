import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class ReactstrapInputGroup extends Component {

    render() {
        return (
            <>
            <InputGroup>
                <Input placeholder="userid" />
                <InputGroupAddon addonType="append">
                    <InputGroupText>@hanmail.net</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <Button>버튼</Button>
                </InputGroupAddon>
                <Input></Input>
            </InputGroup>
            </>
        )
    }
}

export default ReactstrapInputGroup;