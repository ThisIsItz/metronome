import React, { Component } from 'react'
import './Metronome.css'
import audio1 from './click1.wav'
import audio2 from './click2.wav'

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            playing: false,
            bpm: 100,
            count: 0,
            beatsPerMeasure: 4,
        }

        this.lowClick = new Audio(audio1)
        this.highClick = new Audio(audio2)
    }

    startAudio = () => {
        if (this.state.playing){
            clearInterval(this.timer)
            this.setState({
                playing: false
            })
        }else{
            this.timer = setInterval(
                this.playClick,
                    (60/ this.state.bpm) * 1000
            )
            this.setState({
                playing: true,
                count: 0
            },
                this.playClick  
            )
        }
    }

    playClick = () => {
        const { count, beatsPerMeasure } = this.state;
        if(count % beatsPerMeasure === 0){
            this.highClick.play()
        }else{
            this.lowClick.play()
        }

        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure
        }))
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
                <button className="button" onClick={this.startAudio}>{playing ? "Stop" : "Start"}</button>
            </div>
        )
    }
}

export default App