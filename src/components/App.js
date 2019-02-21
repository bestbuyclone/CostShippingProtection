import React, { Component } from 'react';
import './styles.css';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <button className='add-to-cart'>Add to Cart</button>

                </div>
                <div>
                    <button className='build-a-bundle'>Build A Bundle</button>

                </div>
                <div>
                    <button className='save-for-later'>Save for Later</button>

                </div>
            </div>
        )
    }
}

export default App;