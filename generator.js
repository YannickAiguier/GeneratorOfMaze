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
console.log(myMaze);
console.log(myMaze.getBox(0,0));
console.log(myMaze.getBox(0,0).hasPossibleNeighbors());
console.log(myMaze.isPossible(0,0));
myMaze.findPossibleNeighbors(0,0);
console.log(myMaze.getBox(0,0).possibleNeighbors);