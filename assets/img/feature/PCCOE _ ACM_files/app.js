let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.slider .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button
nextBtn.onclick = function() {
    moveSlider('next');
};

// Function for prev button
prevBtn.onclick = function() {
    moveSlider('prev');
};

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }
}

// Add the event listener only once
slider.addEventListener('animationend', function() {
    if(slider.classList.contains('next')){
        slider.classList.remove('next');
    } else if(slider.classList.contains('prev')){
        slider.classList.remove('prev');
    }
});

// Automatically move to the next slide every 5 seconds
let autoSlideInterval = setInterval(() => {
    moveSlider('next');
}, 5000);  // Adjust the time (5000 ms = 5 seconds) as needed

// Optional: Stop auto sliding when mouse hovers over the slider
slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Optional: Resume auto sliding when mouse leaves the slider
slider.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
        moveSlider('next');
    }, 5000);
});
