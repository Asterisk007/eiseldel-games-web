import React, { Component } from 'react';

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "isOpen": false
        };
        this.cardDetails = React.createRef();
        this.cardArrow = React.createRef();
        this.showInfoText = this.showInfoText.bind(this);
    }

    showInfoText() {
        this.setState((state) => {
            return {
                isOpen: !state.isOpen
            };
        });
    }

    render() { 
        return (
            <div className="max-w-md m-2 p-4 border-2 border-red-700 rounded-lg bg-zinc-600 card-animate" onClick={this.showInfoText}>
                <h3 className='block font-bold'>
                    {this.props.title}
                </h3>
                <p className='block'>
                    {this.props.body}
                </p>
                <div className='click-for-more text-xs text-center text-white p-2'>
                    <span className='mr-2'>Click to read more</span>
                    <i ref={this.cardArrow} className={`arrow ${(this.state.isOpen && 'down') || 'right'}`}></i>
                </div>
                {this.state.isOpen && (
                    <div className='card-details'>
                        {this.props.children}
                    </div>
                )}
            </div>
        );
    }
}
 
export default InfoCard;