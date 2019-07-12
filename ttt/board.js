class Board {
  constructor(reader){
    this.reader =  reader;
    this.board = Array.from({length: 3}, () => Array.from({length: 3}));
  }
  won(){
   
  }

  winner(){

  }

  empty(pos){
    if (this.board[pos] === undefined) {
      return true;
    } else {
      return false;
    }
  }

  placeMark(pos, mark){
    if (this.empty(pos)) {
      this.board[pos] = mark;
      return true;
    } else {
      return false;
    }
  }

  run(){

  }
}