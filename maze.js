const Box = require("./box");

class Maze {
    constructor(mazeWidth, mazeHeight) {
        this.mazeWidth = mazeWidth;
        this.mazeHeight = mazeHeight;
        this.boxes = new Array(mazeHeight);
        for (let i = 0; i < mazeHeight; i++) {
            this.boxes[i] = new Array(mazeWidth);
            for (let j = 0; j < mazeWidth; j++) {
                this.boxes[i][j] = new Box(i, j, this.mazeWidth, this.mazeHeight);
            }
        }
    }

    findPossibleNeighbors(x, y) {
        // pour chaque case adjacente dans l'ordre E S O N
        // x-1, y / x, y+1 / x+1, y / x, y-1

        // si box_adjacente.isPossible()
        
        // alors ajouter box_adjacente à this.possibleNeighbors
    }
}

module.exports = Maze;