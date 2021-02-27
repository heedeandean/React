import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ReactstrapTable extends Component {

    render() {
        return (
            <Table>
                {/* <Table dark bordered> */}
                {/* <Table striped hover> */}
                {/* <Table borderless size="sm"> */}
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>React</td>
                        <td>10000원</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Python</td>
                        <td>20000원</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default ReactstrapTable;