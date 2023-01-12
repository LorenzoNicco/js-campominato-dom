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

let numbersList = [];
console.log("numbersList", numbersList);

const levelEasy = "cell-easy";
const levelMedium = "cell-medium";
const levelHard = "cell-hard";

// Evento play
playBtn.addEventListener("click", 
    function () {
        
        if (levelSelection.value == "easy") { //Inizio livello facile
            gridContainer.innerHTML = " ";

            const bombCreator = bombs(1, 100);

            const cell = cellCreator(1, 100, levelEasy);
        }
        else if (levelSelection.value == "medium") { //Inizio livello medio
            gridContainer.innerHTML = " ";

            const bombCreator = bombs(1, 81);

            const cell = cellCreator(1, 81, levelMedium);
        }
        else if (levelSelection.value == "hard") { //Inizio livello difficile
            gridContainer.innerHTML = " ";

            const bombCreator = bombs(1, 49);

            const cell = cellCreator(1, 49, levelHard);
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
    
        cellColor(myCell, i);
    }
}

function cellColor (cellVarName, counter) {
    cellVarName.addEventListener("click",
        function () {
            if (numbersList.includes(counter)) {
                cellVarName.classList.add("bomb");

                console.log("Il numero della cella con la bomba è: " + counter);
            }
            else {
                cellVarName.classList.add("click-azure");

                console.log("Il numero della cella è: " + counter);
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
}