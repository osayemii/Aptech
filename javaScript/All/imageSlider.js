$(document).ready(function() {
    let currentIndex = 0;
    const slider = $('.slider');
    const images = $('.slider img');
    const totalImages = images.length;
  
    // Function to update the slider position
    function updateSlider(index) {
      slider.css('transform', `translateX(-${index * 100}%)`);
    }
  
    // Next button functionality
    $('.next').click(function() {
      currentIndex = (currentIndex + 1) % totalImages;
      updateSlider(currentIndex);
    });
  
    // Previous button functionality
    $('.prev').click(function() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateSlider(currentIndex);
    });
  
    // Automatic slider transition
    setInterval(function() {
      currentIndex = (currentIndex + 1) % totalImages;
      updateSlider(currentIndex);
    }, 3000); // Change image every 3 seconds
  });