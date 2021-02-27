import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class ReactstrapPopover extends Component {

    render() {
        return (
            <>
                <Button id="Popover_id" type="button">
                    Popover Button
                </Button>
                <UncontrolledPopover placement="right" target="Popover_id">
                    <PopoverHeader>React</PopoverHeader>
                    <PopoverBody>개발하고 싶다!</PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default ReactstrapPopover;