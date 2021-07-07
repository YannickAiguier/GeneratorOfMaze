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

console.log("myMaze :");
console.log(myMaze);

////////
// Début du programme
////////

generateBox([0, 0]);


console.log(myMaze);


////////
// Fin du programme
////////

function generateBox([x, y]) {
    // ajout de la case courante à la liste des cases visitées
    myMaze.setVisited(x, y);
    console.log("Visited :");
    console.table(myMaze.visited);
    myMaze.findPossibleNeighbors(x, y);
    console.log("Possible Neighbors :");
    console.table(myMaze.getBox(x, y).possibleNeighbors);
    console.log("hasPossibleNeighbors :");
    console.log(myMaze.getBox(x, y).hasPossibleNeighbors());
    if (myMaze.getBox(x, y).hasPossibleNeighbors()) {
        // tant qu'il y a une case disponible
        while (myMaze.getBox(x, y).hasPossibleNeighbors()) {
            // tirer au sort une case dispo
            let nextBoxIndex = myMaze.getBox(x, y).chooseNeighbors();
            // recommencer avec cette case
            // console.log pour vérifier valeur retournée ?
            console.log("nextBoxIndex :");
            console.table(nextBoxIndex);
            generateBox(nextBoxIndex[0]);
        }
    } else {
        // plus de case dispo = cul de sac, rien à faire
        console.log("Stop !");
        return;
    }
}