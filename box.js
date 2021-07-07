class Box {
    constructor(x, y, mazeWidth, mazeHeight) {
        this.x = x;
        this.y = y;
        this.mazeWidth = mazeWidth;
        this.mazeHeight = mazeHeight;
        this.possibleNeighbors = new Array();
    }

    hasPossibleNeighbors() {
        return this.possibleNeighbors.length > 0;
    }

    isPossible() {
        return (this.x >= 0 && this.x < this.mazeWidth && this.y >= 0 && this.y < this.mazeHeight);
    }

    chooseNeighbors() {
        let nb = this.getRandomInt(this.possibleNeighbors.length);
        return this.possibleNeighbors[nb];
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
      }
}