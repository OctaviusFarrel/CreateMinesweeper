const tiles = [];

const difficulties = [
    [10, 8, 10],
    [18, 14, 40],
    [24, 20, 99]
];

function initialize(difficulty) {
    tiles.forEach(element => {
        element.remove();
    });

    const [widthTiles, heightTiles, manyMines] = difficulties[difficulty];

    const main = document.getElementsByTagName('main')[0];
    main.style.gridTemplateColumns = `repeat(${widthTiles}, 1fr)`;

    const largeTiles = widthTiles * heightTiles;

    const baseElement = document.createElement('button');
    const clickEvent = (e) => {
        e.target.innerHTML = ":)";
    };

    const gameOverEvent = (e) => {
        e.target.innerHTML = ":(";
    };

    for (let index = 0; index < largeTiles; index++) {
        const currentElement = baseElement.cloneNode(false);
        currentElement.onclick = clickEvent;
        main.appendChild(currentElement);
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
}

initialize(0);

document.getElementById('difficulty').onchange = e => {
    initialize(e.target.selectedIndex);
}

let options = document.getElementsByTagName('option');

for (let index = 0; index < options.length; index++) {
    options[index].onclick = e => {
        initialize(index);
        console.log(`Clicked at index: ${index}`);
    }
}

