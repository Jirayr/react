import React, {Component} from 'react';
import Test from './Test';

class Welcome extends Component{
    render() {
        return(<>
            <Test name="Sara" />
            <Test name="Cahal" />
            <Test name="Edite" />
        </>);
    }
}

export default Welcome;