import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerTurn: null,
      xMoves: [],
      oMoves: [],
    }
  }

  handleGamePlay = (index) => {
    const { squares, playerTurn } = this.state
    if(squares[index] === 0 && playerTurn !== null){
      squares[index] = playerTurn
      playerTurn === "❌" ? this.oFirst() : this.xFirst()
    } 
    this.setState({squares: squares})
    this.xTurn(index)
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

  didWin = () => {

  }
  // Win conditions as indexes
  // 0,1,2    3,4,5   6,7,8
  // 0,3,6    1,4,7   2,5,8
  //    0,4,8   2,4,6


  
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

          <h1>xMoves{this.state.xMoves}</h1>

        </div>
          {this.state.playerTurn === null ? 
          (<div id="playerSelect">
          <h1>Who's going first?</h1>
          <button onClick={this.xFirst}>X</button>
          <button onClick={this.oFirst}>0</button>
          </div>) :
          null
          }
      </>
    )
  }
}
export default App
