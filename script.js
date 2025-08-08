// Alert on contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});

// Change background color of portfolio section when project title is clicked
const projectTitles = document.querySelectorAll('.project-title');
projectTitles.forEach(title => {
  title.addEventListener('click', function () {
    const color = this.getAttribute('data-color');
    document.getElementById('portfolio').style.backgroundColor = color;
  });
}); 