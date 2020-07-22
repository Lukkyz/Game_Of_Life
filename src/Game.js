import Cell from "./Cell";

class Game {
  constructor() {
    this.board = [];
    this.fillBoard();
    this.playing = false;
    this.manageBtn();
  }
  manageBtn() {
    let btnPlay = document.querySelector("#play");
    btnPlay.addEventListener("click", () => {
      this.playing = !this.playing;
      if (this.playing) this.play();
    });
  }
  fillBoard() {
    for (let x = 0; x < 60; x++) {
      let row = document.createElement("section");
      for (let y = 0; y < 30; y++) {
        let cell = new Cell(x, y);
        this.board.push(cell);
        row.appendChild(cell.createNode());
      }
      let main = document.querySelector("main");
      main.appendChild(row);
    }
  }
  nextGen() {
    this.board.forEach((cell) => cell.nextGen());
  }
  play() {
    setInterval(() => {
      if (this.playing == false) return false;
      this.nextGen();
      this.board.forEach((cell) => {
        if (cell.nextState == 1) {
          cell.getNode().className = "live";
        } else if (cell.nextState == 0) {
          cell.getNode().className = "dead";
        }
        cell.goNext();
      });
    }, 50);
  }
}

export default Game;
