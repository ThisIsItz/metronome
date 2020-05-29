import React, { Component } from 'react'
import './Metronome.css'

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            playing: false,
            bpm: 100,
            count: 0,
            beatsPerMeasure: 4,
        }
    }

    changeBpm = event => {
        const bpm = event.target.value;
        this.setState({bpm})
    }

    render(){
        const { playing, bpm } = this.state;

        return(
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} BPM</div>
                    <input type="range" min="20" max="400" value={bpm} onChange={this.changeBpm}/>
                </div>
                <button className="button">{playing ? "Stop" : "Start"}</button>
            </div>
        )
    }
}

export default App