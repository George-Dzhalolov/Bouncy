$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: false,
  // animateOut: "slideOutUp",   вертикаль
  // animateIn: "slideInUp",
  // slideTransition: 10000,
  autoplaySpeed: 1000,
  // smartSpeed: 10000,
  // lazyLoadEager: 100,
  autoplayTimeout: 7000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

//  Шкала

// $(document).ready(function () {
//   var progressbar = $("#progressbar1"),
//     max = progressbar.attr("max"),
//     time = (1000 / max) * 5,
//     value = progressbar.val();

//   var loading = function () {
//     value += 1;
//     addValue = progressbar.val(value);

//     $(".team__progress-value").html(value + "%");

//     if (value == max) {
//       clearInterval(animate);
//     }
//   };

//   var animate = setInterval(function () {
//     loading();
//   }, time);
// });

//  Шкала

// Скрол

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

var button = document.querySelector(".header__bottom-scroll");
var bouncy = document.querySelector("#bouncy");

button.addEventListener("click", () => {
  scrollTo(bouncy);
});

// Скрол

// Появление

// $(function () {
//   $(window).scroll(function () {
//     $(".header__bottom-scroll").each(function () {
//       var elPos = $(this).offset().top;
//       var topOfWindow = $(window).scrollTop();
//       if (elPos < topOfWindow + 965) {
//         $(this).addClass("fadeInRight");
//       }
//     });
//   });
// });

// Появление

// Запуск Таймера

$(function () {
  $(".circlechart").circlechart();
});

// Запуск Таймера

// Прогресс-бар

$("#jq").LineProgressbar({
  percentage: 90,
  fillBackgroundColor: "#3498db",
  backgroundColor: "#EEEEEE",
  radius: "0px",
  height: "10px",
  width: "100%",
});

// Прогресс-бар

// Переходы

$(function () {
  let filter = $("[data-filter]");

  filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("partfolio__hide");
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data("cat");
        if (workCat != cat) {
          $(this).addClass("partfolio__hide");
        } else {
          $(this).removeClass("partfolio__hide");
        }
      });
    }
  });
});

// Переходы

// Бургер

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__top-nav").toggleClass("active");
    $(".wrapper-main").toggleClass("wrapper-lock");
  });
});

// Бургер

$(document).ready(function () {
  $(".header__burger").addClass("header__burger-scroll");
});

// Клик по блоку

// document.querySelector(".price__table").addClass = function () {
//   // document.querySelector(".s6__indicator1").className = "s6__indicator1";
//   document.getElementById(".price__table-btn").innerHTML = "Georgy Dzhalolov";
// };

document.querySelector(".projects__item-first").onclick = function () {
  document.querySelector(".projects__center").style.gridTemplateColumns =
    "2fr 1fr 1fr";
};
document.querySelector(".projects__item-second").onclick = function () {
  document.querySelector(".projects__center").style.gridTemplateColumns =
    "1fr 2fr 1fr";
};
document.querySelector(".projects__item-third").onclick = function () {
  document.querySelector(".projects__center").style.gridTemplateColumns =
    "1fr 1fr 2fr";
};

$(document).ready(function () {
  $(".projects__item-first").click(function (event) {
    $(".projects__item-first").toggleClass("projects__active");
  });
});

$(document).ready(function () {
  $(".projects__item-second").click(function (event) {
    $(".projects__item-second").toggleClass("projects__active");
  });
});

$(document).ready(function () {
  $(".projects__item-third").click(function (event) {
    $(".projects__item-third").toggleClass("projects__active");
  });
});

// Клик по блоку

function progress() {
  var prg = document.getElementById("progressbar");
  var percent = document.getElementById("percentCount");
  var counter = 5;
  var progress = 25;
  var id = setInterval(frame, 90);

  function frame() {
    if (progress == 500 && counter == 100) {
      clearInterval(id);
    } else {
      progress += 5;
      counter += 1;
      prg.style.width = progress + "px";
      percent.innerHTML = counter + "%";
    }
  }
}

progress();
