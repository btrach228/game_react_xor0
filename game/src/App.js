import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
    };
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [3, 4, 5],
    ];
  }
  isWiiner = () => {
    let res = this.state.count % 2 === 0 ? "X" : "O";
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (
        this.state.squares[line[0]] === res &&
        this.state.squares[line[1]] === res &&
        this.state.squares[line[2]] === res
      ) {
        setTimeout(() => {
          alert("win");
          this.setState({ squares: Array(9).fill(null) });
          this.setState({ count: 0 });
        }, 111);
      } else {
      }
    }
  };

  showInfoOnClick = () => {
    alert(
      "If you catch any bag press - RESTART - and let me know sooso@gmail.no_com. Thanks"
    );
  };

  Restart = () => {
    this.setState({ squares: Array(9).fill(null) });
    this.setState({ count: 0 });
  };

  clickHandeler = (event) => {
    //data номер квадрата по которому кликнули
    let data = event.target.getAttribute("data");
    let currentSquares = this.state.squares;
    let currentCount = this.state.count;

    // !! add x and o different colors
    // let colorX = getElementsByClassName("tic-tac").setAttribute(
    //   "background-color",
    //   "red"
    // );
    // let colorO = getElementsByClassName("tic-tac").setAttribute(
    //   "background-color",
    //   "yellow"
    // );

    // console.log(data);
    // console.log(currentSquares);
    if (currentSquares[data] == null) {
      currentSquares[data] = currentCount % 2 === 0 ? "X" : "0";

      //!!!  add x and o different colors
      // currentSquares[data] = currentCount % 2 === 0 ? colorX : colorO;

      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquares });
    } else {
      //some code here
    }

    this.isWiiner();
  };

  render() {
    return (
      <div className="tic-tac">
        <div className="t-grid" onClick={this.clickHandeler} data="0" s>
          {this.state.squares[0]}
        </div>{" "}
        <div className="t-grid" onClick={this.clickHandeler} data="1" s>
          {this.state.squares[1]}
        </div>{" "}
        <div className="t-grid" onClick={this.clickHandeler} data="2" s>
          {this.state.squares[2]}
        </div>{" "}
        <div className="t-grid" onClick={this.clickHandeler} data="3" s>
          {this.state.squares[3]}
        </div>{" "}
        <div className="t-grid" onClick={this.clickHandeler} data="4" s>
          {this.state.squares[4]}
        </div>{" "}
        <div className="t-grid" onClick={this.clickHandeler} data="5" s>
          {this.state.squares[5]}
        </div>{" "}
        <div className="t-grid" onClick={this.clickHandeler} data="6" s>
          {this.state.squares[6]}
        </div>{" "}
        <div className="t-grid" onClick={this.clickHandeler} data="7" s>
          {this.state.squares[7]}
        </div>{" "}
        <div className="t-grid" onClick={this.clickHandeler} data="8" s>
          {this.state.squares[8]}
        </div>
        <button className="btn" onClick={this.Restart}>
          Restart
        </button>
        <button className="btnShow" onClick={this.showInfoOnClick}>
          ?
        </button>
      </div>
    );
  }
}

export default App;
