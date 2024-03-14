function glide() {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 2000 | true,
    }).mount()
}

document.addEventListener("DOMContentLoaded", () => {
    glide();
})