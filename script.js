const tiles = [];

const difficulties = [
    [10, 8, 10],
    [18, 14, 40],
    [24, 20, 99]
];

const [widthTiles, heightTiles, manyMines] = difficulties[Math.floor(Math.random()*3)];

const largeTiles = widthTiles * heightTiles;

const baseElement = document.createElement('button');
const clickEvent = (e) => {
    e.target.remove();  
};

const gameOverEvent = (e) => {
    console.log("Game Over");
};

for (let index = 0; index < largeTiles; index++) {
    const currentElement = baseElement.cloneNode(false);
    currentElement.onclick = clickEvent;
    document.getElementsByTagName('body')[0].appendChild(currentElement);
    tiles.push(currentElement);
}

let mineTiles = {};

for (let i = 0; i < manyMines; ) {
    let number = Math.floor(Math.random()*largeTiles);
    if (mineTiles[number]) continue;
    let tile = tiles[number];
    mineTiles[number] = tile;
    tile.onclick = gameOverEvent;
    i++;
}

console.log(mineTiles);