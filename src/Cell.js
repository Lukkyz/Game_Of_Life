class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = 0;
    this.nextState = 0;
  }
  getNode() {
    return document.querySelector(`#x${this.x}_y${this.y}`);
  }
  createNode() {
    let cell = document.createElement("div");
    cell.className = "dead";
    cell.id = `x${this.x}_y${this.y}`;
    cell.addEventListener("click", () => {
      if (cell.className == "dead") {
        cell.className = "live";
        this.state = 1;
      } else {
        cell.className = "dead";
        this.state = 0;
      }
    });
    return cell;
  }
  numNeighbor() {
    let numNeighbor = 0;
    let neighbors = [
      [this.x - 1, this.y],
      [this.x - 1, this.y - 1],
      [this.x - 1, this.y + 1],
      [this.x, this.y - 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
      [this.x + 1, this.y - 1],
      [this.x + 1, this.y],
    ];
    neighbors.forEach((cell) => {
      let neighbor = document.querySelector(`#x${cell[0]}_y${cell[1]}`) || 0;
      neighbor && neighbor.classList.contains("live") ? (numNeighbor += 1) : "";
    });
    return numNeighbor;
  }
  nextGen() {
    let numNeighbor = this.numNeighbor();
    if (numNeighbor == 3) {
      this.nextState = 1;
    } else if (numNeighbor < 2 || numNeighbor > 3) {
      this.nextState = 0;
    } else if (numNeighbor == 2) {
      this.nextState = this.state;
    }
  }
  goNext() {
    this.state = this.nextState;
    this.nextState = 0;
  }
}

export default Cell;
