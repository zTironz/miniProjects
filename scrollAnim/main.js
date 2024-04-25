const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
    const trigger = window.innerHeight / 1.5;
    console.log(trigger)
    for(const box of boxes) {
        const topOfBox = box.getBoundingClientRect().top;
        if(topOfBox < trigger) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    }
}
checkBoxes()
window.addEventListener('scroll', checkBoxes)

