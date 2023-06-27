const container = document.querySelector('#container');

function makeRow(num) {
    row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < num; ++i) {
        let cell = document.createElement('div');
        // ^^ who knew! adding "let" made the colour change every time because then each cell would be a separate variable LOL
        cell.classList.add('cell');
        height = getCellHeight(16);
        cell.style.height = height + 'px';
        thickness = 1 / num;
        cell.style.border = thickness + 'px black solid';
        cell.addEventListener('mouseover', function(e) {
            cell.style.cssText = 'background-color: lightcoral';
            height = getCellHeight(16);
            cell.style.height = height + 'px';
            thickness = 1 / num;
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
    return 600 / num;
}

function colorChange(e) {
    e.style.cssText = 'background-color: red';
}

makeGrid(16);

console.log(container);