'use strict';

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);


/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerActive);

function makeCall() {
  // Replace "your-phone-number" with the actual phone number
  var phoneNumber = "7709228355";
  window.location.href = "tel:" + phoneNumber;
}

function scrollToSpecification() {
  // Get the specification section by its ID
  var specificationSection = document.getElementById('aboutus');

  // Scroll to the specification section
  specificationSection.scrollIntoView({ behavior: 'smooth' });
}

function showFeedbackForm() {
  var feedbackModal = document.getElementById('feedbackModal');
  feedbackModal.style.display = 'block';
}
function closeFeedbackForm() {
  var feedbackModal = document.getElementById('feedbackModal');
  feedbackModal.style.display = 'none';
}

function submitFeedback() {
  var feedbackModal = document.getElementById('feedbackModal');
  feedbackModal.style.display = 'none';

  // You can add logic here to handle the submitted feedback, such as sending it to a server.
  // For this example, we're just hiding the modal.
}

function showWhyUsModal() {
  var whyUsModal = document.getElementById('whyUsModal');
  whyUsModal.style.display = 'flex';
}

function closeWhyUsModal() {
  var whyUsModal = document.getElementById('whyUsModal');
  whyUsModal.style.display = 'none';
}