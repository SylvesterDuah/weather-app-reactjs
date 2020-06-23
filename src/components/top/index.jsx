import React, { Component } from 'react';

import './style.scss';

import Weather from './weather'

import { Manager, Reference, Popper } from 'react-popper @popperjs/core';

class TopSection extends Component {
    constructor (props) {
        super(props);
        this.state ={
            isSelectLocationOpen: false,
        };
    };

    onTggleSelectLocation() {
        this.setState((prevState) => ({ 
            isSelectLocationOpen: !prevState.isSelectLocationOpen 
        }));
    };

    render () {
        const { isSelectLocationOpen } = this.state;

        return (
            <div className="top-container">
                <div className="title">Weather Informer</div>
                <Weather {...this.props} />
                <Manager>
                    <Reference>
                    {({ ref }) => (
                        <button 
                        className="btn btn select-location" 
                        ref={ref} 
                        onClick={this.onTggleSelectLocation.bind(this)}
                        >
                            Select Location
                        </button>
                    )}
                    </Reference>
                    <Popper placement="top">
                        {({ ref, style, placement, arrowProps }) => ( isSelectLocationOpen && 
                        <div ref={ref} style={style} data-placement={placement}>
                            Popper element
                            <div ref={arrowProps.ref} style={arrowProps.style} />
                        </div>
                        )}
                    </Popper>
                </Manager>
            </div>
        );
    };
};



export default TopSection;