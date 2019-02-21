import React, { Component } from 'react';
import Button from './Button';
import './styles.css';

/*
Todo:
Modularize service into multiple components
Fix list of protection plans css
Remove hard coded data
And then.... 
*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originalPrice: 529.99,
            currentPrice: 399.99,
            monthlyPayment: 33.34,
            twoYearPlan: 49.99,
            fiveYearPlan: 89.99
        }
    }

    render() {
        return (
            <div>
                <div className='main'>

                    <div>
                        <p className='price-match'>PRICE MATCH<span id='guarantee'> GUARANTEE</span></p>
                        <div>
                            <span id='price'>${this.state.currentPrice}</span>
                            <span> or</span>
                            <span id='monthly'> ${this.state.monthlyPayment}/month</span>
                        </div>
                        <div id='savings'>
                            Save ${this.state.originalPrice - this.state.currentPrice}
                        </div>
                    </div>



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
                            <li>{this.state.twoYearPlan}</li>
                            <li>{this.state.fiveYearPlan}</li>
                            <li>No Plan</li>
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
                    <div>
                        <input id='checkbox' type='checkbox' />Compare
                    </div>
                </div>
            </div>
        )
    }
}

export default App;