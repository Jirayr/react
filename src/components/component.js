import React, {PureComponent} from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';


class App extends PureComponent {
    render() {
        return(
            <>
                <Header />
                <Content />
                <Footer />
            </>
        );
    }
}

export default App;