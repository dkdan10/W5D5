/* Game.prototype.run
  run() {
     until a peg which is not intial peg has all stones on it 
    //////// get a move
    //make the move
    //
  }*/

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(size = 3){
    this.towers = Array.from({length: 3}, () => []);
    for (let i = size; i > 0; i--) {
      this.towers[0].push(i)
    }
    this.pegs = size;
  }

  promptMove(cb){
    this.printStacks();
    reader.question(`Choose disk to move?\n`, startTowerIdx => {
      const start = parseInt(startTowerIdx);
      reader.question(`Choose disk location\n`, endTowerIdx => {
        const end = parseInt(endTowerIdx);
        this.move(start, end);
        if (this.isWon()) {
          cb();
        } else {
          this.promptMove(cb);
        }
      });
    });
  }

  printStacks() {
    for (let i = 0; i < this.towers.length; i++) {
      let printablePegs = this.towers[i].join(' ');
      console.log(`Tower: ${i} Pegs: ${printablePegs}` );
    }
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (startTowerIdx < 0 || startTowerIdx > this.pegs - 1 || endTowerIdx < 0 || endTowerIdx > this.pegs - 1) return false
    let startPeg = this.towers[startTowerIdx]; 
    if (startPeg.length === 0) return false
    let startStone = startPeg[startPeg.length - 1];

    let endPeg = this.towers[endTowerIdx];
    if (endPeg.length === 0) return true
    let endPegTopStone = endPeg[endPeg.length - 1];

    if (startStone < endPegTopStone) return true;
    return false; 
  }

  move(startIndex, endIndex) {
    if (this.isValidMove(startIndex, endIndex)) {
      this.towers[endIndex].push(this.towers[startIndex].pop());
      return true;
    } else {
      console.log("Invalid move My guy!");
      return false;
    }
  }

  isWon(){
    let won = false;
    this.towers.slice(1).forEach(tower => {
      if(tower.length === this.pegs) {won = true;}
    });
    return won;
  }

  run(completionCallback){
    this.promptMove(() => {
      console.log('user won')
      reader.close();
      completionCallback();
    })
  }
   
}


const cbb = function (a, b) {
  console.log(`${a} and ${b}`);
}

const compCall = function () {
  console.log("You won!");
}


let game = new Game;
// game.promptMove(cbb);
game.run(compCall);
// game1