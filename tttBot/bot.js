var turn = 'x';
var gameOver = false;
var winner = "";
var botTurns = 0;

class Slot {
    constructor(id) {
        this.element = document.getElementById(id);
        this.filled = false;
        this.x = false;
        this.o = false;
    }

    setClick() {
        this.element.addEventListener("click", () => {
            this.click();
        });
    }

    click() {
        var thisGotFilled = false;
        if (!gameOver && !this.filled) {
            this.filled = true;
            thisGotFilled = true;

            var p = document.createElement("p");
            p.className = "symbol";

            if (turn == 'x') {
                this.x = true;
                p.textContent = "X";
                turn = 'o';
                document.getElementById("turnInd").innerHTML = "Bot's Turn!";
            }
            else if (turn == 'o') {
                this.o = true;
                p.textContent = "O";
                turn = 'x';
                document.getElementById("turnInd").innerHTML = "Player's Turn!";
            }


            this.element.appendChild(p);

            if (find3X()) {
                gameOver = true;
                winner = "X";
            }
            if (find3O()) {
                gameOver = true;
                winner = "O";
            }

            if (gameOver) {
                document.getElementById("turnInd").innerHTML = winner + " Wins!";
                if (winner === "tie") document.getElementById("turnInd").innerHTML = "Tie!";
                document.getElementById("restart").classList.remove("hide");
                navigator.vibrate(10, 10, 10);
            }
        }
        console.log("Filled Check: " + this.filled);
        console.log(this.element);
        return thisGotFilled;
    }
}

function restart() {
    console.log("Passed waka waka");
    console.log(slots[0].element);

    for (var i = 1; i <= 9; i++) {
        if (document.getElementById("slot" + i.toString()).firstChild) document.getElementById("slot" + i.toString()).firstChild.remove();
        document.getElementById("slot" + i.toString()).classList.remove("winnerSlot");
    }

    slots = [];
    slots = [
        new Slot("slot1"),
        new Slot("slot2"),
        new Slot("slot3"),
        new Slot("slot4"),
        new Slot("slot5"),
        new Slot("slot6"),
        new Slot("slot7"),
        new Slot("slot8"),
        new Slot("slot9")
    ];

    for (var i = 0; i < slots.length; i++) {
        slots[i].setClick();
    }

    turn = 'x';
    winner = "";
    botTurns = 0;
    gameOver = false;

    document.getElementById("turnInd").innerHTML = "Player's Turn!";

    document.getElementById("restart").classList.add("hide");
}

var slots = [
    new Slot("slot1"),
    new Slot("slot2"),
    new Slot("slot3"),
    new Slot("slot4"),
    new Slot("slot5"),
    new Slot("slot6"),
    new Slot("slot7"),
    new Slot("slot8"),
    new Slot("slot9")
];

for (var i = 0; i < slots.length; i++) {
    slots[i].setClick();
}

window.onload = () => {
    setInterval(() => {

        if (turn === 'o' && !gameOver) {
            botTakeTurn();
        }

        
    }, 100);
}

function find3X() {
    var xrow = false;

    if (slots[0].x && slots[1].x && slots[2].x) {
        xrow = true;
        slots[0].element.classList.add("winnerSlot");
        slots[1].element.classList.add("winnerSlot");
        slots[2].element.classList.add("winnerSlot");
    };
    if (slots[3].x && slots[4].x && slots[5].x) {
        xrow = true;
        slots[3].element.classList.add("winnerSlot");
        slots[4].element.classList.add("winnerSlot");
        slots[5].element.classList.add("winnerSlot");
    };
    if (slots[6].x && slots[7].x && slots[8].x) {
        xrow = true;
        slots[6].element.classList.add("winnerSlot");
        slots[7].element.classList.add("winnerSlot");
        slots[8].element.classList.add("winnerSlot");
    };

    if (slots[0].x && slots[3].x && slots[6].x) {
        xrow = true;
        slots[0].element.classList.add("winnerSlot");
        slots[3].element.classList.add("winnerSlot");
        slots[6].element.classList.add("winnerSlot");
    };
    if (slots[1].x && slots[4].x && slots[7].x) {
        xrow = true;
        slots[1].element.classList.add("winnerSlot");
        slots[4].element.classList.add("winnerSlot");
        slots[7].element.classList.add("winnerSlot");
    };
    if (slots[2].x && slots[5].x && slots[8].x) {
        xrow = true;
        slots[2].element.classList.add("winnerSlot");
        slots[5].element.classList.add("winnerSlot");
        slots[8].element.classList.add("winnerSlot");
    };


    if (slots[0].x && slots[4].x && slots[8].x) {
        xrow = true;
        slots[0].element.classList.add("winnerSlot");
        slots[4].element.classList.add("winnerSlot");
        slots[8].element.classList.add("winnerSlot");
    };
    if (slots[2].x && slots[4].x && slots[6].x) {
        xrow = true;
        slots[2].element.classList.add("winnerSlot");
        slots[4].element.classList.add("winnerSlot");
        slots[6].element.classList.add("winnerSlot");
    };

    if (xrow) return true;
    else return false;
}

function find3O() {
    var orow = false;

    if (slots[0].o && slots[1].o && slots[2].o) {
        orow = true;
        slots[0].element.classList.add("winnerSlot");
        slots[1].element.classList.add("winnerSlot");
        slots[2].element.classList.add("winnerSlot");
    };
    if (slots[3].o && slots[4].o && slots[5].o) {
        orow = true;
        slots[3].element.classList.add("winnerSlot");
        slots[4].element.classList.add("winnerSlot");
        slots[5].element.classList.add("winnerSlot");
    };
    if (slots[6].o && slots[7].o && slots[8].o) {
        orow = true;
        slots[6].element.classList.add("winnerSlot");
        slots[7].element.classList.add("winnerSlot");
        slots[8].element.classList.add("winnerSlot");
    };

    if (slots[0].o && slots[3].o && slots[6].o) {
        orow = true;
        slots[0].element.classList.add("winnerSlot");
        slots[3].element.classList.add("winnerSlot");
        slots[6].element.classList.add("winnerSlot");
    };
    if (slots[1].o && slots[4].o && slots[7].o) {
        orow = true;
        slots[1].element.classList.add("winnerSlot");
        slots[4].element.classList.add("winnerSlot");
        slots[7].element.classList.add("winnerSlot");
    };
    if (slots[2].o && slots[5].o && slots[8].o) {
        orow = true;
        slots[2].element.classList.add("winnerSlot");
        slots[5].element.classList.add("winnerSlot");
        slots[8].element.classList.add("winnerSlot");
    };


    if (slots[0].o && slots[4].o && slots[8].o) {
        orow = true;
        slots[0].element.classList.add("winnerSlot");
        slots[4].element.classList.add("winnerSlot");
        slots[8].element.classList.add("winnerSlot");
    };
    if (slots[2].o && slots[4].o && slots[6].o) {
        orow = true;
        slots[2].element.classList.add("winnerSlot");
        slots[4].element.classList.add("winnerSlot");
        slots[6].element.classList.add("winnerSlot");
    };

    checkForFull();

    if (orow) {
        gameOver = true;
        winner = "O";
    }
}

function checkForFull() {
    var full = 0;

    for (var i = 0; i < slots.length; i++) {
        if (slots[i].filled) full++;
    }

    if (full == 9) {
        gameOver = true;
        winner = "tie";
    }
}

function find2X() {
    var toOut = [];

    for (var i = 0; i < slots.length; i++) {
        if (slots[i].x) {
            toOut.push(i);

            if (i == 0) {
                if (slots[1].x) toOut.push(1);
                else if (slots[3].x) toOut.push(3);
                else if (slots[4].x) toOut.push(4);
            }
            if (i == 1) {
                if (slots[2].x) toOut.push(2);
                else if (slots[4].x) toOut.push(4);
            }
            if (i == 2) {
                if (slots[5].x) toOut.push(5);
                else if (slots[4].x) toOut.push(4);
            }
            if (i == 3) {
                if (slots[4].x) toOut.push(4);
                else if (slots[6].x) toOut.push(6);
            }
            if (i == 5) {
                if (slots[4].x) toOut.push(4);
                else if (slots[8].x) toOut.push(8);
            }
            if (i == 6) {
                if (slots[4].x) toOut.push(4);
                else if (slots[7].x) toOut.push(7);
            }
            if (i == 7) {
                if (slots[4].x) toOut.push(4);
                else if (slots[8].x) toOut.push(8);
            }

            return toOut;
        }
    }
}

function find2O() {
    var toOut = [];

    for (var i = 0; i < slots.length; i++) {
        if (slots[i].o) {
            toOut.push(i);

            if (i == 0) {
                if (slots[1].o) toOut.push(1);
                else if (slots[3].o) toOut.push(3);
                else if (slots[4].o) toOut.push(4);
            }
            if (i == 1) {
                if (slots[2].o) toOut.push(2);
                else if (slots[4].o) toOut.push(4);
            }
            if (i == 2) {
                if (slots[5].o) toOut.push(5);
                else if (slots[4].o) toOut.push(4);
            }
            if (i == 3) {
                if (slots[4].o) toOut.push(4);
                else if (slots[6].o) toOut.push(6);
            }
            if (i == 5) {
                if (slots[4].o) toOut.push(4);
                else if (slots[8].o) toOut.push(8);
            }
            if (i == 6) {
                if (slots[4].o) toOut.push(4);
                else if (slots[7].o) toOut.push(7);
            }
            if (i == 7) {
                if (slots[4].o) toOut.push(4);
                else if (slots[8].o) toOut.push(8);
            }

            return toOut;
        }
    }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function pickRandomSlot(type) {
    var full0 = false;
    var full1 = false;
    var full2 = false;
    var full3 = false;
    if (type === "side") {
        while (true) {
            var slot = getRandomArbitrary(0,4);
            if (slot == 0) {
                if (checkSlot(1)) return 1;
                else full0 = true;
            }
            if (slot == 1) {
                if (checkSlot(3)) return 3;
                else full1 = true;
            }
            if (slot == 2) {
                if (checkSlot(5)) return 5;
                else full2 = true;
            }
            if (slot == 3) {
                if (checkSlot(7)) return 7;
                else full3 = true;
            }
            if (full0 && full1 && full2 && full3) return -1;
        }
    }
    if (type === "corner") {
        while (true) {
            var slot = getRandomArbitrary(0,4);
            if (slot == 0) {
                if (checkSlot(0)) return 0;
                else full0 = true;
            }
            if (slot == 1) {
                if (checkSlot(2)) return 2;
                else full1 = true;
            }
            if (slot == 2) {
                if (checkSlot(6)) return 6;
                else full2 = true;
            }
            if (slot == 3) {
                if (checkSlot(8)) return 8;
                else full3 = true;
            }
            if (full0 && full1 && full2 && full3) return -1;
        }
    }
}



function botTakeTurn() {

    if (botTurns == 0) {
        if (fillCenter()) console.log("Passed Center 0");
        else if (fillRandomSlot("corner")) console.log("Passed Random 0");
        done = true;
        botTurns++;
    }

    else if (botTurns == 1) {
        if (blockBetween()) console.log("Passed Between 1");
        else if (block2Row()) console.log("Passed Row 1");
        else if (fillCenter()) console.log("Passed Center 1");
        else if (fillRandomSlot("corner")) console.log("Passed Random 1");
        botTurns++
    }

    else if (botTurns == 2) {
        if (complete()) console.log("Passed Complete 2")
        else if (blockBetween()) console.log("Passed Between 2");
        else if (block2Row()) console.log("Passed Row 2");
        else if (fillCenter()) console.log("Passed Center 2");
        else if (fillRandomSlot("corner")) console.log("Passed Random 2");
        botTurns++
        
    }

    else if (botTurns== 3) {
        if (complete()) console.log("Passed Complete 3")
        else if (blockBetween()) console.log("Passed Between 3");
        else if (block2Row()) console.log("Passed Row 3");
        else if (fillCenter()) console.log("Passed Center 3");
        else if (fillRandomSlot("corner")) console.log("Passed Random 3");
        botTurns++
        
    }
    
}

function checkSlot(index) {
    if (!slots[index].filled) return true;
    else return false;
}

function block2Row() {
    var two = find2X();
    var done = false;
    if (two.length > 0) {
        if (two[0] == 0) {
            if (two[1] == 1) {
                done = slots[2].click();
            }
            if (two[1] == 3) {
                done = slots[6].click();
            }
            if (two[1] == 4) {
                done = slots[8].click();
            }
        }
        if (two[0] == 1) {
            if (two[1] == 2) {
                done = slots[0].click();
            }
            if (two[1] == 4) {
                done = slots[7].click();
            }
        }
        if (two[0] == 2) {
            if (two[1] == 5) {
                done = slots[8].click();
            }
            if (two[1] == 4) {
                done = slots[6].click();
            }
        }
        if (two[0] == 3) {
            if (two[1] == 6) {
                done = slots[0].click();
            }
            if (two[1] == 4) {
                done = slots[5].click();
            }
        }
        if (two[0] == 5) {
            if (two[1] == 8) {
                done = slots[2].click();
            }
            if (two[1] == 4) {
                done = slots[3].click();
            }
        }
        if (two[0] == 6) {
            if (two[1] == 7) {
                done = slots[8].click();
            }
            if (two[1] == 4) {
                done = slots[2].click();
            }
        }
        if (two[0] == 7) {
            if (two[1] == 8) {
                done = slots[6].click();
            }
            if (two[1] == 4) {
                done = slots[1].click();
            }
        }
    }
    
    return done;
}

function blockBetween() {
    var done = false;

    if (slots[0].x && slots[2].x && !done) {
        done = slots[1].click();
    }
    if (slots[0].x && slots[6].x && !done) {
        done = slots[3].click();
    }
    if (slots[2].x && slots[8].x && !done) {
        done = slots[5].click();
    }
    if (slots[8].x && slots[6].x && !done) {
        done = slots[7].click();
    }

    console.log("Done: " + done);

    return done;
}

function complete() {
    var two = find2O();
    var done = false;
    if (two.length > 0) {
        if (two[0] == 0) {
            if (two[1] == 1) {
                done = slots[2].click();
            }
            if (two[1] == 3) {
                done = slots[6].click();
            }
            if (two[1] == 4) {
                done = slots[8].click();
            }
        }
        if (two[0] == 1) {
            if (two[1] == 2) {
                done = slots[0].click();
            }
            if (two[1] == 4) {
                console.log("Check Complete 1: " + done);
                done = slots[7].click();
                console.log("Check Complete 2: " + done);
            }
        }
        if (two[0] == 2) {
            if (two[1] == 5) {
                done = slots[8].click();
            }
            if (two[1] == 4) {
                done = slots[6].click();
            }
        }
        if (two[0] == 3) {
            if (two[1] == 6) {
                done = slots[0].click();
            }
            if (two[1] == 4) {
                done = slots[5].click();
            }
        }
        if (two[0] == 5) {
            if (two[1] == 8) {
                done = slots[2].click();
            }
            if (two[1] == 4) {
                done = slots[3].click();
            }
        }
        if (two[0] == 6) {
            if (two[1] == 7) {
                done = slots[8].click();
            }
            if (two[1] == 4) {
                done = slots[2].click();
            }
        }
        if (two[0] == 7) {
            if (two[1] == 8) {
                done = slots[6].click();
            }
            if (two[1] == 4) {
                done = slots[1].click();
            }
        }
    }
    
    return done;
}

function fillCenter() {
    if (!slots[4].filled) {
        slots[4].click();
        return true;
    }
    else return false;
}

function fillRandomSlot() {
    var slot = -1;
    slot = pickRandomSlot("side");
    if (slot == -1) slot = pickRandomSlot("corner");

    slots[slot].element.click();

    return true;
}