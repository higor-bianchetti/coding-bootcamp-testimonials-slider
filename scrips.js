let toggleTestimonial = true;

function toggle() {
  toggleTestimonial = !toggleTestimonial;

  testimonial1 = document.getElementsByClassName('testimonial1');
  testimonial2 = document.getElementsByClassName('testimonial2');

  Array.prototype.forEach.call(testimonial1, (item) => {
    item.style.display = !toggleTestimonial ? 'none' : 'block';
  });

  Array.prototype.forEach.call(testimonial2, (item) => {
    item.style.display = toggleTestimonial ? 'none' : 'block';
  });
}
