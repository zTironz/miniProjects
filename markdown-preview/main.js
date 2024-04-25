const container = document.querySelector(".container");
const source = document.querySelector("#source");
const preview = document.querySelector("#preview");
const devider = document.querySelector("#devider");

source.addEventListener('keyup', () => {
    const newText = marked.parse(source.value)
    preview.innerHTML = newText;
})

const onMouseMove = (e) => {
   const { left, width } = container.getBoundingClientRect();
   console.log(left,width)
   const { clientX } = e;

   source.style.width = `${clientX - left}px`;
   preview.style.width = `${left + width - clientX}px`;
}

const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp);
}

const onMouseDown = () => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp);
}

devider.addEventListener('mousedown', onMouseDown)