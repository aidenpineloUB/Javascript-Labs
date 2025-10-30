// Exercise 10: Image Gallery
// Goal: Click thumbnails to change the main image using event delegation

const thumbnailContainer = document.getElementById('thumbnail-container');
const featuredImage = document.getElementById('featured-image');
const imageCaption = document.getElementById('image-caption');

// TODO: Add ONE event listener to thumbnail-container
thumbnailContainer.addEventListener('click', (e) => {
    // HINT: Check if clicked element has class 'thumbnail'
    if (e.target.classList.contains('thumbnail')) {
        // HINT: Get data-image and data-caption attributes from clicked thumbnail
        const imageSrc = e.target.getAttribute('data-image');
        const imageCaptionText = e.target.getAttribute('data-caption');

        // HINT: Update featuredImage.src with the data-image value
        featuredImage.src = imageSrc;

        // HINT: Update imageCaption.textContent with the data-caption value
        imageCaption.textContent = imageCaptionText;

        // HINT: Remove 'active' class from all thumbnails
        const thumbnails = thumbnailContainer.getElementsByClassName('thumbnail');
        for (let i = 0; i < thumbnails.length; i++) {
            thumbnails[i].classList.remove('active');
        }
    }
// HINT: Add 'active' class to clicked thumbnail

    // Your code here:
    e.target.classList.add('active');
});