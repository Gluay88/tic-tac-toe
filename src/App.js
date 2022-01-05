import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerTurn: null,
      theWinner: null,
    }
  }

  handleGamePlay = (index) => {
    const { squares, playerTurn, theWinner } = this.state
    if(squares[index] === 0 && playerTurn !== null && theWinner === null){
      squares[index] = playerTurn
      playerTurn === "❌" ? this.oTurn() : this.xTurn()
    } 
    this.setState({squares: squares})
  }

  // This gets run when ⭕️ makes a move
  xTurn = () => {
    this.setState({
      playerTurn: "❌"
    })
    this.didWin()
  }

  // This gets run when ❌ makes a move
  oTurn = () => {
    this.setState({
      playerTurn: "⭕️"
    })
    this.didWin()
  }

  didWin = () => {
    const { squares } = this.state
    const winningLines =
     [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
        for (let i = 0; i < winningLines.length; i++) {
          const [a, b, c] = winningLines[i]
          if (squares[a] !== 0 && squares[a] === squares[b] && squares[a] === squares[c]){
            this.setState({theWinner: squares[a]})
            return console.log((`${squares[a]} is the winner`));
          } else if (squares.includes(0) === false){
            this.setState({theWinner: "the cat!"})
          }
        }
  
    }

    restart = () => {
      this.setState({
        squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerTurn: null,
      theWinner: null,
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


            {/* input section */}

                <input type="color" id="favcolor" name="favcolor" value="#ff0000"/>

                <input type="text"/>
                
            {/* end input section */}            

            <div>
               { this.state.theWinner === null ?  <h2>It's {this.state.playerTurn}'s turn! </h2> : null}
            </div>

            

          {this.state.playerTurn === null ? 
          (<div id="playerSelect">
          <h1>Who's going first?</h1>

          <button onClick={this.xTurn}>❌</button>
          <button onClick={this.oTurn}>⭕️</button>
          </div>) :
          null
          }

{this.state.theWinner === null ? null : <h1>The winner is {this.state.theWinner}</h1> }
            <button onClick={this.restart} className="restart-btn">Click here to play again</button>
      </>
    )
  }
}
export default App
