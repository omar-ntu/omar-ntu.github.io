const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(
    function(
        entries, appearOnScroll
        ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})



// var initialSrc = "/images/sprint_stand.png";
// var scrollSrc = "/images/sprint_walk.png";

// $(window).scroll(function() {
//    var value = $(this).scrollTop();
//    if (value > 100)
//       $(".walk").attr("src", scrollSrc);
//    else
//       $(".walk").attr("src", initialSrc);
// });




