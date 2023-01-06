const game = {
    player1: {
        username: "Praabindh",
        playingAs: "X"
    },
    player2: {
        username: "Pradeep",
        playingAs: "O"
    },
    board: [
        ['O', 'X', 'X'],
        ['X', 'O', 'X'],
        ['O', 'O', 'X']
    ]
};

console.log("Player One : \n" + game.player1.username + "\nPlaying As - " + game.player1.playingAs);
console.log("Player Two : \n" + game.player2.username + "\nPlaying As - " + game.player2.playingAs);

function printBoard(board) {
    var strArray = "\nPlaying Board \n";
    for (var i = 0; i < board.length; i++) {
        strArray += board[i] + '\n';
    }
    console.log(strArray);
}

printBoard(game.board)