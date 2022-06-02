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



// const observerOptions = {
//     threshold: 0.5,
//     rootMargin: "0px 0px 0px 0px"
// }

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const square = entry.target.querySelector('.title__wrapper');

//         if (!entry.isIntersecting) {
//             square.classList.add('slide-down');
//             return;
//         } else {
//             square.classList.remove('slide-down');
//         }
//     });
// }, observerOptions);

// observer.observe(document.querySelector('.title__wrapper'));



// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('slide-down');
//         }
//     });
// });

// observer.observe(document.querySelector('.slidedown'));




// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var window = window.innerWidth;
//     //   var elementVisible = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
// window.addEventListener("scroll", reveal);






// ORIGINAL CODE

// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", reveal);


// var initialSrc = "/images/sprint_stand.png";
// var scrollSrc = "/images/sprint_walk.png";

// $(window).scroll(function() {
//    var value = $(this).scrollTop();
//    if (value > 100)
//       $(".walk").attr("src", scrollSrc);
//    else
//       $(".walk").attr("src", initialSrc);
// });




