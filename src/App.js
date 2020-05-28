import React, { Component } from 'react'
import './Metronome.css'

class App extends Component{
    render(){
        let bpm = 100;
        let playing = false;

        return(
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} BPM</div>
                    <input type="range" min="20" max="400" value={bpm}/>
                </div>
                <button className="button">{playing ? "Stop" : "Start"}</button>
            </div>
        )
    }
}

export default App