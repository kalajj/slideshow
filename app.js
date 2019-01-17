var slides = $('.sl__slide');

// Move the last slide before the first so the user is able to immediately go backwards
slides.first().before(slides.last());

$('button').on('click', function() {
  // Get all the slides again
  slides = $('.sl__slide');
  // Register button
  var button = $(this);
  // Register active slide
  var activeSlide = $('.active');
  
  // Next function
  if (button.attr('id') == 'next') {
    // Move first slide to the end so the user can keep going forward
    slides.last().after(slides.first());
    // Move active class to the right
    activeSlide.removeClass('active').next('.sl__slide').addClass('active');
  }
  
  // Previous function
  if (button.attr('id') == 'previous') {
    // Move the last slide before the first so the user can keep going backwards
    slides.first().before(slides.last());
    // Move active class to the left
    activeSlide.removeClass('active').prev('.sl__slide').addClass('active');
  }
});