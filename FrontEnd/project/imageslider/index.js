const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
    
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
    sliderImage.src = images[currentIndex];
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
