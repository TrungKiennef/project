//Scroll Item
window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal')

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reaveals[i].classList.remove('active');
    }
  }
}
//Css Reponsive
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');
menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});
//Read more
const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event => {

  const current = event.target;

  const isReadMoreBtn = current.className.includes('read-more-btn');

  if (!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector('.read-more-text');

  currentText.classList.toggle('read-more-text--show');

  current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})
//Geolocation
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  var apikey = "AIzaSyCCfT-ATiIy2UAUU40tmlLe90707ozvLHM"
  let latlon = position.coords.latitude + "," + position.coords.longitude;

  let img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&sensor=${apikey}`;

  document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
}