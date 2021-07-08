// besoin de la classe Maze
const Maze = require('./maze');

// variables du programme
// taille du labyrinthe
const mazeWidth = 5;
const mazeHeight = 5;

// le labyrinthe
let myMaze = new Maze(mazeHeight, mazeWidth);

// coordonnées de départ
let x = 0;
let y = 0;

// coordonnées de la destination, qui seront fixées à la fin
let endx = 3;
let endy = 3;

// liste qui contiendra la suite de déplacements pour créer le labyrinthe
let path = new Set();

console.log("myMaze :");
console.log(myMaze);

////////
// Début du programme
////////

generateBox([0, 0]);
console.log(path);

// création du labyrinthe "exploitable", on le remplit de murs ('M')
let finalMaze = new Array(mazeHeight * 2 - 1);
for (let i = 0; i < mazeHeight * 2 - 1; i++) {
    finalMaze[i] = new Array(mazeWidth * 2 - 1);
    for (let j = 0; j < mazeWidth * 2 - 1; j++) {
        finalMaze[i][j] = 'M';
    }
}
// creuser la case de départ
//dug(x, y);

// pour chaque liaison dans path
path.forEach(function(value) {
    console.log(("Valeur : " + value));
    // calculer les coordonnées de la case intermédiaire
    //let intermediate = findIntermediate(value);
    // creuser la case intermédiaire
    //dug(intermediate);
    // récupérer les coordonnées de la case liée
    //let connected = [1, 1];
    // creuser la case liée
    //dug(connected);
})


////////
// Fin du programme
////////

function generateBox([x, y]) {
    // ajout de la case courante à la liste des cases visitées
    myMaze.setVisited([x, y]);
    // établir la liste des cases voisines disponibles
    myMaze.findPossibleNeighbors(x, y);
    console.log("visited :");
    console.table(myMaze.visited);
    console.log("possibleNeighbors :");
    console.log(myMaze.getBox(x, y).possibleNeighbors);

    // tant qu'il y a des cases voisines disponibles
    while (myMaze.getBox(x, y).hasPossibleNeighbors()) {
        // choisir une case aléatoirement
        let choice = myMaze.getBox(x, y).chooseNeighbor();
        // ici mettre le traitemet à effectuer pour représenter le passage d'une case à une autre
        // enregistrer les coordonnées des 2 cases ? pour traitement lors de la construction du labyrinthe final ?
        path.add([[x, y], choice]);
        console.log(path);
        // appelle la fonction sur cette case
        generateBox(choice);
        // une fois la case traitée on refait la liste des case voisines disponibles
        myMaze.findPossibleNeighbors(x, y);
    }
}