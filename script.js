const container = document.querySelector('#container');
let gridSize = 16;

function makeRow(num) {
    row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < num; ++i) {
        let cell = document.createElement('div');
        // ^^ who knew! adding "let" made the colour change every time because then each cell would be a separate variable LOL
        cell.classList.add('cell');
        height = getCellHeight(num);
        cell.style.height = height + 'px';
        thickness = 3 / num;
        cell.style.border = thickness + 'px black solid';
        cell.addEventListener('mouseover', function(e) {
            cell.style.cssText = 'background-color: lightcoral';
            height = getCellHeight(num);
            cell.style.height = height + 'px';
            thickness = 3 / num;
            cell.style.border = thickness + 'px black solid';
        }); // colour only changes for one of them
        row.appendChild(cell);
    }
    container.appendChild(row);
}

function makeGrid(num) {
    for (let i = 0; i < num; ++i) {
        makeRow(num);
    }
}

function getCellHeight(num) {
    return 600 / gridSize;
}

function colorChange(e) {
    e.style.cssText = 'background-color: red';
}

const btn = document.querySelector('#newgrid');
const print = document.querySelector('#size');

btn.addEventListener('click', function(e) {
    console.log(e);
    let size = prompt("How wide is your grid? Enter a number between 1 and 100!");
    if (1 <= size && size <= 100) {
        gridSize = size;
        console.log(gridSize);
        container.innerHTML=''; // clears what was originally in container
        makeGrid(gridSize);
        // location.reload();
        // goal: either refresh page with new gridSize and grid, or change grid
        // ^^ refresh probably doesn't work because default gridSize is 16 for sure
        // ^^ remove current grid, remake
        print.innerHTML = 'Current Grid Size: ' + gridSize + ' x ' + gridSize;
    } else {
        alert('Sorry, your response was invalid.')
    }
});

const refresh = document.querySelector('#btn');
console.log(refresh);
refresh.addEventListener('click', function(e) {
    location.reload();
});

makeGrid(gridSize);