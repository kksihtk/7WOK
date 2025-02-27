function openModalImage(imageIndex) {
    document.getElementById('modal').classList.remove('displayNone');
    document.getElementById('modalImg').src = `./images/${imageIndex}.png`;
}

function closeModalImage() {
    document.getElementById('modal').classList.add('displayNone');
}