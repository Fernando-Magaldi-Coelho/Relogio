

// PRA QUANDO A NAVBAR ROLAR E MUDAR A COR

// document.addEventListener("DOMContentLoaded", function() {
//     let navbar = document.querySelector('.navbar');

//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 0) {
//             navbar.classList.add('scroll');
//         } else {
//             navbar.classList.remove('scroll');
//         }
//     });
// });



    // TEMPORIZADOR REGRESSIVO

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10); //O parseInt é pra garantir q seja um numero inteiro
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    window.onload = function () {
        var duration = 60 * 15; // Converter para segundos
            display = document.querySelector('#timer'); // selecionando o timer
        startTimer(duration, display); // iniciando o timer
    };







const menuItems = document.querySelectorAll('a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget) - 160;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});


/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 1000;

  
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 100 / 60 fps
};