$(document).ready(function () {
    $("#newGame").click(begin);
    document.addEventListener('keydown', move);
    var score = 0;

    begin();

    function begin() {

        grid = [[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ']];
        insertNewNo();
        insertNewNo();
        display();
    }




    function insertNewNo() {
        console.log("insert called");
        while (true) {
            var randx = Math.floor(Math.random() * 4);
            var randy = Math.floor(Math.random() * 4);

            if (grid[randx][randy] == ' ') {
                console.log(randx,randy);
                var randno = Math.floor(Math.random() * 10);
                if (randno <= 8) {
                    grid[randx][randy] = 2;

                }
                else {
                    grid[randx][randy] = 4;
                }
                break;


            }

        }
        display();

    }

    function display() {
        $('#points').html(score);

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                $('#pos' + i + j).html(grid[i][j]);
                if (grid[i][j] == 2) {
                    $("#pos" + i + j).css("background-color", "#eee4da");
                    $("#pos" + i + j).css("color", "#776e65");
                }
                else if (grid[i][j] == 4) {
                    $("#pos" + i + j).css("background-color", "#eee1c9");
                    $("#pos" + i + j).css("color", "#776e65");
                }
                else if (grid[i][j] == 8) {
                    $("#pos" + i + j).css("background-color", "#f3b27a");
                    $("#pos" + i + j).css("color", "#f9f6f2");
                }
                else if (grid[i][j] == 16) {
                    $("#pos" + i + j).css("background-color", "#f69664");
                    $("#pos" + i + j).css("color", "#f9f6f2");
                }
                else if (grid[i][j] == 32) {
                    $("#pos" + i + j).css("background-color", "#f77c5f");
                    $("#pos" + i + j).css("color", "#f9f6f2");
                }
                else if (grid[i][j] == 64) {
                    $("#pos" + i + j).css("background-color", "#f75f3b");
                    $("#pos" + i + j).css("color", "#f9f6f2");
                }
                else if (grid[i][j] == 128) {
                    $("#pos" + i + j).css("background-color", "#edd073");
                    $("#pos" + i + j).css("color", "#f9f6f2");
                    $("#pos" + i + j).css("font-size", "50px");
                }
                else if (grid[i][j] == 256) {
                    $("#pos" + i + j).css("background-color", "#edcc62");
                    $("#pos" + i + j).css("color", "#f9f6f2");
                    $("#pos" + i + j).css("font-size", "50px");
                }
                else {
                    $("#pos" + i + j).css("background-color", "#cdc1b4");
                }
            }
        }

    }


    function move(event) {
        if (event.keyCode == 39) {
            moveRight();

        }
        else if (event.keyCode == 37) {
            moveLeft();

        }
        else if (event.keyCode == 38) {
            moveUp();

        }
        else if (event.keyCode == 40) {
            moveDown();

        }

    }


    function moveUp() {
        var empty;
        for (var j = 0; j < 4; j++) {
            for (var i = 1; i < 4; i++) {

                if (grid[i][j] != ' ') {
                    for (var x = i - 1; x >= 0; x--) {
                        if (grid[x][j] == ' ') {
                            empty = x;
                        }
                    }


                    if (empty != undefined) {
                        grid[empty][j] = grid[i][j];
                        grid[i][j] = ' ';
                    }

                }
            }
        }
        display();
        insertNewNo();
    }

    function moveDown() {
        var empty;
        for (var j = 0; j < 4; j++) {
            for (var i = 2; i >= 0; i--) {

                if (grid[i][j] != ' ') {
                    for (var x = i + 1; x < 4; x++) {
                        if (grid[x][j] == ' ') {
                            empty = x;
                        }
                    }


                    if (empty != undefined) {
                        grid[empty][j] = grid[i][j];
                        grid[i][j] = ' ';
                    }
                }
            }
        }
        display();
        insertNewNo();
    }

    function moveLeft() {
        var empty;
        for (var i = 0; i < 4; i++) {
            for (var j = 1; j < 4; j++) {

                if (grid[i][j] != ' ') {
                    for (var x = j - 1; x >= 0; x--) {
                        if (grid[i][x] == ' ') {
                            empty = x;
                        }
                    }


                    if (empty != undefined) {
                        grid[i][empty] = grid[i][j];
                        grid[i][j] = ' ';
                    }

                }
            }
        }
        display();
        insertNewNo();

    }

    function moveRight() {
        var empty;
        for (var i = 0; i < 4; i++) {
            for (var j = 2; j >= 0; j--) {

                if (grid[i][j] != ' ') {
                    for (var x = j + 1; x < 4; x++) {
                        if (grid[i][x] == ' ') {
                            empty = x;
                        }
                    }

                    if (empty != undefined) {
                        grid[i][empty] = grid[i][j];
                        grid[i][j] = ' ';
                    }
                }
            }
        }
        display();
        insertNewNo();


        //Call add

    }

















})