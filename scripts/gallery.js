function changeGalleryImageNext() {
    let gallery_viewport = document.getElementById("gallery_viewport");

    switch (gallery_viewport.classList[1]) {
        case "gallery_firstImage":
            gallery_viewport.classList.remove("gallery_firstImage");
            gallery_viewport.classList.add("gallery_secondImage"); // Добавляем следующий класс
            break;
        case "gallery_secondImage":
            gallery_viewport.classList.remove("gallery_secondImage");
            gallery_viewport.classList.add("gallery_thirdImage"); // Добавляем следующий класс
            break;
        case "gallery_thirdImage":
            gallery_viewport.classList.remove("gallery_thirdImage");
            gallery_viewport.classList.add("gallery_fourthImage"); // Добавляем следующий класс
            break;
        case "gallery_fourthImage":
            gallery_viewport.classList.remove("gallery_fourthImage");
            gallery_viewport.classList.add("gallery_fivethImage"); // Добавляем следующий класс
            break;
        case "gallery_fivethImage":
            gallery_viewport.classList.remove("gallery_fivethImage");
            gallery_viewport.classList.add("gallery_sixthImage"); // Добавляем следующий класс
            break;
        case "gallery_sixthImage":
            gallery_viewport.classList.remove("gallery_sixthImage");
            gallery_viewport.classList.add("gallery_seventhImage"); // Добавляем следующий класс
            break;
        case "gallery_seventhImage":
            gallery_viewport.classList.remove("gallery_seventhImage");
            gallery_viewport.classList.add("gallery_firstImage"); // Добавляем следующий класс
            break;
    }
}

function changeGalleryImageBack() {
    let gallery_viewport = document.getElementById("gallery_viewport");

    gallery_viewport.style.animation = 'gallery_opacity 1s ease-in-out 0 1 alternate';
    switch (gallery_viewport.classList[1]) {
        case "gallery_firstImage":
            gallery_viewport.classList.remove(gallery_viewport.classList[1]);
            gallery_viewport.classList.add("gallery_seventhImage");
            break;
        case "gallery_secondImage":
            gallery_viewport.classList.remove(gallery_viewport.classList[1]);
            gallery_viewport.classList.add("gallery_firstImage");
            break;
        case "gallery_thirdImage":
            gallery_viewport.classList.remove(gallery_viewport.classList[1]);
            gallery_viewport.classList.add("gallery_secondImage");
            break;
        case "gallery_fourthImage":
            gallery_viewport.classList.remove(gallery_viewport.classList[1]);
            gallery_viewport.classList.add("gallery_thirdImage");
            break;
        case "gallery_fivethImage":
            gallery_viewport.classList.remove(gallery_viewport.classList[1]);
            gallery_viewport.classList.add("gallery_fourthImage"); 
            break;
        case "gallery_sixthImage":
            gallery_viewport.classList.remove(gallery_viewport.classList[1]);
            gallery_viewport.classList.add("gallery_fivethImage");
            break;
        case "gallery_seventhImage":
            gallery_viewport.classList.remove(gallery_viewport.classList[1]);
            gallery_viewport.classList.add("gallery_sixthImage");
            break;
    }
    // gallery_viewport.style.animation = '';
}

function changeGalleryImageByIndex(index) {
    gallery_viewport.classList.remove(gallery_viewport.classList[1]);
    switch (index) {
        case 1:
            gallery_viewport.classList.add("gallery_firstImage");
            gallery_viewport.classList.add("gallery_opacity");
            break;
        case 2:
            gallery_viewport.classList.add("gallery_secondImage");
            break;
        case 3:
            gallery_viewport.classList.add("gallery_thirdImage");
            break;
        case 4:
            gallery_viewport.classList.add("gallery_fourthImage");
            break;
        case 5:
            gallery_viewport.classList.add("gallery_fivethImage");
            break;
        case 6:
            gallery_viewport.classList.add("gallery_sixthImage");
            break;
        case 7:
            gallery_viewport.classList.add("gallery_seventhImage");
            break;
    }
    gallery_viewport.classList.remove("gallery_opacity");
}