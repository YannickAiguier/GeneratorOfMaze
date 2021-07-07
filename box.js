class Box {
    constructor(x, y, mazeWidth, mazeHeight) {
        this.x = x;
        this.y = y;
        this.mazeWidth = mazeWidth;
        this.mazeHeight = mazeHeight;
        this.possibleNeighbors = new Array();
    }

    addNeighbor(x, y) {
        this.possibleNeighbors.push([x, y]);
    }

    findNeighbor(x, y) {
        // indexOf
    }

    deleteNeighbor(i) {
        this.possibleNeighbors.splice(i, 1);
    }

    hasPossibleNeighbors() {
        return this.possibleNeighbors.length > 0;
    }

    chooseNeighbors() {
        let nb = this.getRandomInt(this.possibleNeighbors.length);
        return this.possibleNeighbors[nb];
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }
}

module.exports = Box;