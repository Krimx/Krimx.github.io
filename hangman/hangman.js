function letter(n) {
    if (!gameover) {
        if (checkForGotten(n)) {
            document.getElementById(n).classList.add("tried");
    
            if (word.includes(n)) {
                complete.push(n);
            }
            else {
                document.getElementById("ball" + (fails + 1).toString()).classList.add("none");
                fails++;
            }
    
            update();
        }
    }
}

const words = ["consider", "minute", "accord", "evident", "practice", "intend", "concern", "commit", "issue", "approach", "establish", "utter", "conduct", "engage", "obtain", "scarce", "policy", "straight", "stock", "apparent", "property", "fancy", "concept", "court", "appoint", "passage", "vain", "instance", "coast", "project", "commission", "constant"]
var word = "";
var complete = [];
fails = 0;
gameover = false;
var lost = false;
var won = false;

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

window.onload = () => {
    word = pickRandomWord();
    update();

    setInterval(() => {
        if (fails >= 7) {
            lost = true;
            gameover = true;
        }
        if (buildWord() === word) {
            gameover = true;
            won = true;
        }
        if (gameover) gameOver();
    }, 100);
}

function update() {
    const element = document.getElementById("word");

    element.innerHTML = buildWord();
}

function buildWord(n) {
    var toOut = "";
    for (var i = 0; i < word.length; i++) {
        if (complete.includes(word.charAt(i).toLowerCase())) {
            toOut += word.charAt(i);
        }
        else {
            toOut += "_";
        }

        if (n) toOut += " ";
    }

    return toOut;
}

function reset() {
    gameover = false;
    fails = 0;
    document.getElementById("newGame").classList.add("hide");
    document.getElementById("winOrLose").classList.add("hide");
    complete = [];
    word = pickRandomWord();
    document.getElementById("man").classList.remove("falling");

    for (var i = 0; i < 26; i++) {
        document.getElementById(alphabet[i]).classList.remove("tried");
    }

    for (var i = 1; i <= 7; i++) {
        document.getElementById("ball" + i.toString()).classList.remove("none");
    }

    update();
}

function checkForGotten(n) {
    if (!complete.includes(n)) return true;
    else return false;
}

function gameOver() {
    document.getElementById("newGame").classList.remove("hide");
    document.getElementById("winOrLose").classList.remove("hide");

    if (won) {
        document.getElementById("winOrLose").innerHTML = "You Win!";
    }
    if (lost) {
        document.getElementById("man").classList.add("falling");
        document.getElementById("winOrLose").innerHTML = "You Lose :(";
        finishWord();
        update();
    }
}

function pickRandomWord() {
    return (words[getRandomArbitrary(0, words.length)]);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function finishWord() {
    for (var i = 0; i < word.length; i++) {
        if (!complete.includes(word[i])) complete.push(word[i]);
    }
}