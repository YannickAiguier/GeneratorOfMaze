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
    // établir la liste des cases voisines disponibles
    myMaze.findPossibleNeighbors(x, y);
    console.log("visited :");
    console.table(myMaze.visited);
    console.log("possibleNeighbors :");
    console.log(myMaze.getBox(x, y).possibleNeighbors);
    // pour chaque case voisine
    myMaze.getBox(x, y).possibleNeighbors.forEach(neighbor => {
        // si la case est disponible (=false dans myMaze.visited)
        if (myMaze.visited[neighbor[1]][neighbor[0]] == false) {
            // appelle la fonction sur cette case
            generateBox(neighbor);
        }
    });
}