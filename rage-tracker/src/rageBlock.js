import React, { Component } from 'react';

class RageBlock extends Component {
    constructor(props) {
        super(props);
        this.props = {
            name: String,
            rageTimerOn: Boolean
        };
        this.state = {
            localTimerOn: false,
            rage: 0,
            countOn: false,
        }
    }

    rageAdd = () => {
        this.setState({
            rage: this.state.rage + 6
        })
    }

    rageReset = () => {
        this.setState({
            rage: 0
        })
    }

    toggleTimer = () => {
        this.setState({
            localTimerOn: !this.state.localTimerOn
        })
    }

    componentDidUpdate() {
        if ((this.state.localTimerOn || this.props.rageTimerOn) && !this.state.countOn) {
            this.rageTimer = setInterval(() => {
                this.setState((prevState) => ({
                    rage: prevState.rage + 1,
                }));
            }, 1000)
            this.setState({
                countOn: true
            })
        }
        else if (!(this.state.localTimerOn || this.props.rageTimerOn) && this.state.countOn) {
            clearInterval(this.rageTimer);
            this.setState({
                countOn: false
            })
        }
    }

    render() {
        const { rage, localTimerOn } = this.state
        const { name } = this.props
        const roundedRage = (rage / 6).toFixed(2)
        return (
            <div className="block">
                <div className='title'>
                    <h2>{name}</h2>
                    <h2>{rage} seconds, {roundedRage} rounds</h2> <br />
                </div>

                <div className='row'>
                    <button onClick={this.rageAdd} className='btn'>
                        Add
                    </button>
                    <button onClick={this.toggleTimer} className='btn'>
                        Timer: {localTimerOn ? 'On' : 'Off'}
                    </button>
                    <button onClick={this.rageReset} className='btn'>
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}

export default RageBlock