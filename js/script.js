/*
    STEPS:
        1. Ricontrollare e ottimizzare il codice.
        2. Creare una funzione che genera 16 numeri casuali.
        3. Controllare che i numeri casuali non vadano in conflitto con quelli della griglia.
        4. Usare un if per far si che se l'utente clicca su una bomba, la casella si colora di rosso.
        5. Scrivere le condizioni di chiusura della partita.
*/

console.log("Collegamento js ok");



const gridContainer = document.getElementById("grid-container");


// Bottoni
const levelSelection = document.getElementById("level-selector");

const playBtn = document.getElementById("play-button");

const levelEasy = "cell-easy";
const levelMedium = "cell-medium";
const levelHard = "cell-hard";

let numbersList = [];
console.log("numbersList", numbersList);

let points = 0;
console.log("points prima", points, typeof points);

let pointCounter = document.getElementById("points");

let gameOver = document.getElementById("game-over");

let goalNumber = 0;

// Evento play
playBtn.addEventListener("click", 
    function () {
        if (levelSelection.value == "easy") { //Inizio livello facile
            gridContainer.classList.remove("no-click");

            gridContainer.innerHTML = " ";
            pointCounter.innerHTML = " ";
            gameOver.innerHTML = " ";
            numbersList = [];
            goalNumber = 84

            bombs(1, 100);

            cellCreator(1, 100, levelEasy);
        }
        else if (levelSelection.value == "medium") { //Inizio livello medio
            gridContainer.classList.remove("no-click");

            gridContainer.innerHTML = " ";
            pointCounter.innerHTML = " ";
            gameOver.innerHTML = " ";
            numbersList = [];
            goalNumber = 65;

            bombs(1, 81);

            cellCreator(1, 81, levelMedium);
        }
        else if (levelSelection.value == "hard") { //Inizio livello difficile
            gridContainer.classList.remove("no-click");
            
            gridContainer.innerHTML = " ";
            pointCounter.innerHTML = " ";
            gameOver.innerHTML = " ";
            numbersList = [];
            goalNumber = 33;

            bombs(1, 49);

            cellCreator(1, 49, levelHard);
        }
    }
);

// Funzioni -----------------------------------------------------

function cellCreator (min, max, levelClass) {
    for (let i = min; i <= max; i++) {
        const myCell = document.createElement("div");
        myCell.classList.add("cell", levelClass);
        myCell.innerHTML = i;

        gridContainer.append(myCell);
    
        cellSetUp(myCell, i);
    }
}

function cellSetUp (cellVarName, counter) {
    cellVarName.addEventListener("click",
        function () {
            if (numbersList.includes(counter)) {
                cellVarName.classList.add("bomb");
                console.log("Il numero della cella con la bomba è: " + counter);

                gameOver.innerHTML = "Game Over!"
                points = 0;

                gridContainer.classList.add("no-click");
            }
            else {
                cellVarName.classList.add("click-azure");
                console.log("Il numero della cella è: " + counter);

                cellVarName.classList.add("no-click");

                points++;
                console.log("points dopo", points, typeof points);

                pointCounter.innerHTML = "Il tuo punteggio è: " + points;

                if (points == goalNumber) {
                    alert("Congratulazioni, hai vinto! Il tuo punteggio è: " + points);
                    console.log("Hai vinto!");
    
                    gridContainer.classList.add("no-click");
                }
            }
        }
    );
}

function bombs (min, max) {
    for (let i = 1; i <= 16; i++) {
        let bombNumber = Math.floor(Math.random() * max) + min;
    
        while (numbersList.includes(bombNumber)) {
            bombNumber = Math.floor(Math.random() * max) + min;
        }
    
        numbersList.push(bombNumber);
    }
    console.log("numbersList", numbersList);
}