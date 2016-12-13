var Board = function(){
	this.board = [[1,2,3],[4,5,6],[7,8,9]];
	this.counter = 0
};

Board.prototype ={
	show: function(){

	for (let i = 0; i < this.board.length; i++) {
		console.log(this.board[i][0].toString() + " | " + this.board[i][1].toString() + " | " + this.board[i][2].toString() );
		if (i < 2) {
			console.log("---------");
		}
	}
		return this.board;
	},
	isWon: function(board) {
		this.counter += 1;
		// horizontal row:
		for (let i = 0; i < board.length; i++) {
			if (checker(board[i][0], board[i][1], board[i][2])) {
				return board[i][0];
			}
		}
		// Vertical column:
		for (let i = 0; i < board.length; i++) {
			if (checker(board[0][i], board[1][i], board[2][i])) {
				return board[0][i];
			}
		}
		// Diagonal:
		if (checker(board[0][0], board[1][1], board[2][2])) {
			return board[0][0];
		} else if (checker(board[0][2], board[1][1], board[2][0])) {
			return board[0][2];
		}
		// Final case - checks for tie
		if (this.counter === 9) {
			return "There is a draw: no winner";
		} else {
		// increment counter
			return false;
		}
	}
};

// Handles the checking of board elements
var checker = function(element1, element2, element3) {
	// Ensures that default values in board do not cause a false win
	// Null can be replaced with another placeholder value
	if (Number.isInteger(element1) === true || Number.isInteger(element2) === true || Number.isInteger(element3) === true) {
		return false;
	} else {
  		return (element1 === element2 && element2 === element3);
		}
};

module.exports = Board;

var winningBoard = new Board;
winningBoard.show();
