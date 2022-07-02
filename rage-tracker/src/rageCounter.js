import React, { Component } from 'react';
import RageBlock from './rageBlock';

class RageCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rageTimerOn: false,
        }
    }

    toggleTimer = () => {
        this.setState({
            rageTimerOn: !this.state.rageTimerOn
        })
    }

    render() {
        const {rageTimerOn } = this.state
        return (
            <div className='bigBoiBlock'>
                <div className='blockContainer'>
                    <RageBlock name={"Rajang"} rageTimerOn={this.state.rageTimerOn} />

                    <RageBlock name={"Claudia"} rageTimerOn={this.state.rageTimerOn} />
                </div>

                <button onClick={this.toggleTimer} className='btn'>
                    Timer: {rageTimerOn ? 'On' : 'Off'}
                </button>
            </div>
        )
    }
}

export default RageCounter