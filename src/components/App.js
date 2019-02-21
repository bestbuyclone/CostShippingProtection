import React, { Component } from 'react';
import Button from './Button';
import './styles.css';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className='main'>
                    <hr />

                    <div id="main-container">
                        <div className="container">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/4/42/Geek_Squad_logo.png' className="logo" />
                            <div className="protection-content">
                                <p className="protection-title">Protect your product</p>
                                <a className='protection-sub-title' href="https://example.com" target="_blank">Learn about Standard Protection Plans</a>
                            </div>
                        </div>
                    </div>

                    <div className='list-plans'>
                        <ul>
                            <li>Plan 1</li>
                            <li>Plan 2</li>
                            <li>Plan 3</li>
                        </ul>
                    </div>

                    <hr />

                    {/* <Button className='add-to-cart' children='Add to Cart' />
                    <Button className='build-a-bundle' children='Build A Bundle' />
                    <Button className='save-for-later' children='Save for Later' /> */}
                    <div>
                        <button className='add-to-cart'>&#xe116; Add to Cart</button>

                    </div>
                    <div>
                        <button className='build-a-bundle'>Build A Bundle</button>

                    </div>
                    <div>
                        <button className='save-for-later'>Save for Later</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default App;