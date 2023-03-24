function myFunction() {
  var x = document.getElementById("menuLinks");
  if (x.className === "menuLinks") {
    x.className += " responsive";
  } else {
    x.className = "menuLinks";
  }
} 

// OPEN
function openModal() {
  document.getElementById("myModal").style.display = "flex";
  document.body.style.overflow='hidden'
};

// CLOSE

//button
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow='auto';
};

//clicking outside
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
};

//key navigation
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    closeModal();
  }  else if (e.keyCode === 37 || e.keyCode === 65) {
    plusSlides(-1);// Left arrow key is pressed
  } else if (e.keyCode === 39 || e.keyCode === 68) {
    plusSlides(1);// Right arrow key is pressed
  }
});

var slideIndex = 1;
showSlides(slideIndex);

// CONTROLS
//with buttons
function plusSlides(n) {
  showSlides(slideIndex += n);
};

//STARTING SLIDE
function currentSlide(n) {
  showSlides(slideIndex = n);
};

//LOOP
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
};

//image block
$('img').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
});

//SEND

function sending() {

  Email.send({
    Host: "",
    Username: "",
    Password: "",
    To: "",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body: "Name: " + document.getElementById("name").value
        + "<br> Message: " + document.getElementById("email").value,
  });
  document.getElementById("sendMsg").style.display = "none";
  document.getElementById("sent").style.display = "block";
};

function newMsg() {
  document.getElementById("sendMsg").style.display = "block";
  document.getElementById("sent").style.display = "none";
};