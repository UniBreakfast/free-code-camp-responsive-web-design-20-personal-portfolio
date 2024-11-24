const projectsLink = document.querySelector('a[href="#projects"]');
const count = document.querySelectorAll('.project-tile:not([hidden])').length;

projectsLink.title = `There's ${count} projects`;
