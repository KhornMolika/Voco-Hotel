// Navbar & Footer
import { navbar } from "../components/Navbar.js";
import { footer } from "../components/Footer.js";

let footerRender = document.querySelector("#footerRender");
let navbarRender = document.querySelector("#navbarRender");

const currentPath = window.location.pathname;
let activePage = "";

if (currentPath.includes("rooms")) {
  activePage = "rooms";
} else if (currentPath.includes("about")) {
  activePage = "about";
} else if (currentPath.includes("events")) {
  activePage = "events";
} else if (currentPath.includes("contact")) {
  activePage = "contact";
} else if (currentPath.includes("reservation")) {
  activePage = "reservation";
} else {
  activePage = "home"; // Default page
}

// document.addEventListener("DOMContentLoaded", () => {
//   navbarRender.innerHTML = navbar(activePage);
//   footerRender.innerHTML = footer();
// });

document.addEventListener("DOMContentLoaded", () => {
  // Render the navbar and footer
  navbarRender.innerHTML = navbar(activePage);
  footerRender.innerHTML = footer();

  // Now that the elements are rendered, select the toggle button and dropdown
  const toggleBtn = document.querySelector(".toggle-btn");
  const toggleBtnIcon = document.querySelector(".toggle-btn .burger");
  const dropDownMenu = document.querySelector(".drop-nav");

  // Add the click event listener for the toggle button
  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    // Change the icon depending on the menu state
    toggleBtnIcon.innerHTML = isOpen ? "&times;" : "&#9776;";
  };

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      dropDownMenu.classList.remove("open");
      toggleBtnIcon.innerHTML = "&#9776;"; // Reset icon to burger when closing the menu
    }
  });
});

// Slider

let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length;

let cloneFirst = items[0].cloneNode(true);
let cloneLast = items[lengthItems - 1].cloneNode(true);

list.appendChild(cloneFirst);
list.insertBefore(cloneLast, items[0]);

let totalItems = lengthItems + 2;
let itemWidth = items[0].offsetWidth;

function setSliderWidth() {
  itemWidth = items[0].offsetWidth;
  list.style.width = totalItems * itemWidth + "px";
  list.style.left = -itemWidth + "px";
}
setSliderWidth();

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(setSliderWidth, 150);
});

function updateDots() {
  let lastActiveDot = document.querySelector(".slider .dots li.active");
  if (lastActiveDot) lastActiveDot.classList.remove("active");

  // Update the active dot based on the active slide index
  if (active >= lengthItems) {
    dots[0].classList.add("active");
  } else if (active < 0) {
    dots[lengthItems - 1].classList.add("active");
  } else {
    dots[active].classList.add("active");
  }
}

function goToSlide(index) {
  list.style.transition = "left 0.5s ease";
  list.style.left = -itemWidth * (index + 1) + "px";
  active = index;
  updateDots();
}

function handleNext() {
  if (active >= lengthItems - 1) {
    list.style.transition = "left 0.5s ease";
    list.style.left = -itemWidth * (lengthItems + 1) + "px";
    active = lengthItems;
    updateDots();
    setTimeout(() => {
      list.style.transition = "none";
      list.style.left = -itemWidth + "px";
      active = 0;
    }, 500);
  } else {
    goToSlide(active + 1);
  }
}

function handlePrev() {
  if (active <= 0) {
    list.style.transition = "left 0.5s ease";
    list.style.left = "0px";
    active = -1;
    updateDots();
    setTimeout(() => {
      list.style.transition = "none";
      list.style.left = -itemWidth * lengthItems + "px";
      active = lengthItems - 1;
    }, 500);
  } else {
    goToSlide(active - 1);
  }
}

next.onclick = handleNext;
prev.onclick = handlePrev;

let refreshSlide = setInterval(handleNext, 4000);

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    if (key !== active) {
      goToSlide(key);
      clearInterval(refreshSlide);
      refreshSlide = setInterval(handleNext, 4000);
    }
  });
});

// Food Menu Tabs

function showMenu(section, el) {
  var i;
  var x = document.getElementsByClassName("menu-section");
  var buttons = document.querySelectorAll(".nav-link");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // Remove active class from all buttons
  buttons.forEach((button) => button.classList.remove("active"));

  // Show the selected section
  document.getElementById(section).style.display = "block";

  // Add active class to clicked button
  el.classList.add("active");
}

window.showMenu = showMenu;
