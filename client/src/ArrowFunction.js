import React, { Component } from 'react';

class ArrowFunction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFunc: 'React',
            num: 3
        };
    }

    componentDidMount() {
        Function1(1);
        this.Function2(1, 1);
        this.Function3(1, 3);
        this.Function4();
        this.Function5(0, 2, 3);

        function Function1(n1) {
            return console.log(n1 + '. ES5 Function');
        }
    }

    Function2 = (n1, n2) => {
        let n3 = n1 + n2;
        console.log(n3 + '. Arrow Function : ' + this.state.arrowFunc);
    }

    Function3() {
        var this_bind = this;
        setTimeout(function () {
            console.log(this_bind.state.num + '. ES5 Callback Function noBind : ');
            console.log(this.state.arrowFunc);
        }, 100);
    }

    Function4() {
        setTimeout(function () {
            console.log('4. ES5 Callback Function Bind : ' + this.state.arrowFunc);
        }.bind(this), 100);
    }

    Function5 = (n1, n2, n3) => {
        const n4 = n1 + n2 + n3;
        setTimeout(() => {
            console.log(n4 + '. Arrow Callback Function : ' + this.state.arrowFunc);
        }, 100);
    }

    render() {
        return (
            <h2>[THIS IS ArrowFunction.]</h2>
        )
    }
}

export default ArrowFunction;