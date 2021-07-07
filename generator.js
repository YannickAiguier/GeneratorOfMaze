// besoin de la classe Maze
const Maze = require('./maze');

// variables du programme
// taille du labyrinthe
const mazeWidth = 5;
const mazeHeight = 5;

// le tableau dans lequel on enregistre les cases visitées
const visited = new Array();

// le labyrinthe
let myMaze = new Maze(mazeHeight, mazeWidth);

// coordonnées de départ
let x = 0;
let y = 0;

// coordonnées de la destination, qui seront fixées à la fin
let endx = 3;
let endy = 3;

// initialiser le tableau des cases visitées, faux partout
for (let i = 0; i < mazeHeight; i++) {
    visited[i] = new Array(mazeWidth);
    for (let j = 0; j < mazeWidth; j++) {
        visited[i][j] = false;
    }
}
console.table(visited);

////////
// Début du programme
////////



console.log(myMaze);
console.log(myMaze.getBox(0,0));
console.log(myMaze.getBox(0,0).hasPossibleNeighbors());
console.log(myMaze.isPossible(0,0));
myMaze.findPossibleNeighbors(0,0);
console.log(myMaze.getBox(0,0).possibleNeighbors);