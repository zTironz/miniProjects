const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

function dragStart() {
    this.classList.add('hold');
    setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
    this.classList = 'fill';
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    this.classList = 'empty';
    this.append(fill);
}

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('drop', drop);
}