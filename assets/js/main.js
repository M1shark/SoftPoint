$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-navbar').toggleClass('active');
    });
});
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('')