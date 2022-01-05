import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerTurn: null,
    }
  }

  handleGamePlay = (index) => {
    const { squares, playerTurn } = this.state
    if(squares[index] === 0){
      squares[index] = playerTurn
    } 

    playerTurn === "❌" ? this.oFirst() : this.xFirst()

    this.setState({squares: squares})
  }



  xFirst = () => {
    this.setState({
      playerTurn: "❌"
    })
  }

  oFirst = () => {
    this.setState({
      playerTurn: "⭕️"
    })
  }

  
  render(){
    return(
      <>
        <h1>Noughts-and-Crosses</h1>
        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return (
              value=<Square 
              value={value}
              index={index}
              key={index}
              handleGamePlay={this.handleGamePlay}
              />
            )
          })}

        </div>

        <h1>Who's going first?</h1>
        <button onClick={this.xFirst}>X</button>
        <button onClick={this.oFirst}>0</button>
        
      </>
    )
  }
}
export default App
