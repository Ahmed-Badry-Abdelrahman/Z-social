document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imgSrc = this.getAttribute('src');
            const modalImg = document.getElementById('modal-img');
            if (modalImg) {
                modalImg.setAttribute('src', imgSrc);
            }
        });
    });
});
