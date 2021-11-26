$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-navbar').toggleClass('active');
    });
});
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1800,
    delay: 400,
})
sr.reveal('.hero-info,.software-card,.discover-info,.serving-img', { origin: 'left' })
sr.reveal('.hero-img,.software-info,.discover-img,.serving-info', { origin: 'right' })
sr.reveal('.claints-content', { origin: 'right' })
sr.reveal('.get-info,.plan-content', { origin: 'top' })
sr.reveal('.get-img', { origin: 'button' })