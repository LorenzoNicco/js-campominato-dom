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

// Evento play
playBtn.addEventListener("click", 
    function () {
        if (levelSelection.value == "easy") { //Inizio livello facile
            gridContainer.innerHTML = " ";

            for (let i = 1; i <= 100; i++) {
                const myCell = document.createElement("div");
                myCell.classList.add("cell", "cell-easy");
                myCell.innerHTML = i;
            
                cellColor(myCell);
            
                gridContainer.append(myCell);
            }
        }
        else if (levelSelection.value == "medium") { //Inizio livello medio
            gridContainer.innerHTML = " ";

            for (let i = 1; i <= 81; i++) {
                const myCell = document.createElement("div");
                myCell.classList.add("cell", "cell-medium");
                myCell.innerHTML = i;
            
                cellColor(myCell);
            
                gridContainer.append(myCell);
            }
        }
        else if (levelSelection.value == "hard") { //Inizio livello difficile
            gridContainer.innerHTML = " ";

            for (let i = 1; i <= 49; i++) {
                const myCell = document.createElement("div");
                myCell.classList.add("cell", "cell-hard");
                myCell.innerHTML = i;
            
                cellColor(myCell);
            
                gridContainer.append(myCell);
            }
        }

    }
);

// Funzioni -----------------------------------------------------

function cellColor (cellVarName) {

    cellVarName.addEventListener("click",
    function () {
        if (cellVarName.classList.contains("click-azure")) {
            cellVarName.classList.remove("click-azure");
        }
        else {
            cellVarName.classList.add("click-azure");

            console.log("Il numero della cella è: " + i);
        }
    }
);
}