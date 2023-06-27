const container = document.querySelector('#container');

function makeRow(num) {
    row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < num; ++i) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        height = getCellHeight(16);
        cell.style.height = height + 'px';
        thickness = 1 / num;
        cell.style.border = thickness + 'px black solid';
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
    return 600 / num;
}

makeGrid(16);

console.log(container);