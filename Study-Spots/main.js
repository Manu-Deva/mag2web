// NAV BAR SCROLL EFFECT (from https://stackoverflow.com/questions/8218159/javascript-check-if-page-is-at-the-top)

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    document.querySelector("nav").className = "nav-bar";
  } else {
    document.querySelector("nav").className = "nav-bar nav-bar-scroll";
  }
});

// ADD ANY OTHER JS BELOW:

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  //   showOnClick(slideIndex + n);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("spot");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// var map = L.map("map").setView([41.91246821356791, -87.64050599535715], 11);
// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution: "© OpenStreetMap",
// }).addTo(map);

// var heritage = L.marker([41.96943052504685, -87.65601811853321]).addTo(map);
// heritage.bindPopup("Heritage Outpost").openPopup();

// var edie = L.marker([41.894797068915956, -87.63401793388358]).addTo(map);
// edie.bindPopup("Edie's All Day Cafe & Bar").openPopup();

// var poetry = L.marker([41.895650680406035, -87.63016241853704]).addTo(map);
// poetry.bindPopup("Poetry Foundation").openPopup();

// var library = L.marker([41.87665876466754, -87.62828291853808]).addTo(map);
// library.bindPopup("Harold Washington Library").openPopup();

// var chinatown = L.marker([41.85390241077841, -87.6320731301731]).addTo(map);
// chinatown.bindPopup("Chinatown Branch, Chicago Public Library ").openPopup();

const locations = [
  {
    business: "Heritage Outpost",
    latitude: 41.96943052504685,
    longitude: -87.65601811853321,
  },
  {
    business: "Edie's All Day Cafe & Bar",
    latitude: 41.894797068915956,
    longitude: -87.63401793388358,
  },
  {
    business: "Poetry Foundation",
    latitude: 41.895650680406035,
    longitude: -87.63016241853704,
  },
  {
    business: "Harold Washington Library",
    latitude: 41.87665876466754,
    longitude: -87.62828291853808,
  },
  {
    business: "Chinatown Branch, Chicago Public Library",
    latitude: 41.85390241077841,
    longitude: -87.6320731301731,
  },
];

function makeLocations() {
  for (i = 0; i < locations.length; i++) {
    let marker = L.marker([
      locations[i].latitude,
      locations[i].longitude,
    ]).addTo(mymap);

    marker.bindPopup(`<b>${locations[i].business}</b>`);

    marker.on("mouseover", function () {
      this.openPopup();
    });

    marker.on("mouseout", function () {
      this.closePopup();
    });
  }
}

// function showOnClick(x) {
//   //   marker.openPopup().autoPan = "True";
//   console.log(locations[x].latitude);
//   mymap.flyTo([locations[x].latitude, locations[x - 1].longitude], 17);
// }

var mymap = L.map("map").setView([41.91246821356791, -87.64050599535715], 11);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 19,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibmF0aGFuaWFsdG8iLCJhIjoiY2t3OXcyemF2MmNwZzJvbXAwNTF2Njk5aSJ9.g5JkFBgSBUAFUELfSubtpg",
  }
).addTo(mymap);
makeLocations();

// function showPosition(position) {
//   latitude = position.coords.latitude;
//   longitude = position.coords.longitude;
//   mymap.panTo([latitude, longitude]);
// }

// function locate(latitude, longitude) {
//   mymap.flyTo(L.latLng(latitude, longitude), 17);
//   // mymap.panTo([latitude, longitude])
//   console.log(latitude, longitude);
//   marker.openPopup();
// }

// function toggleVisibility(elem) {
//   if (document.querySelector(elem).style.display == "block") {
//     document.querySelector(elem).style.display = "none";
//   } else {
//     document.querySelector(elem).style.display = "block";
//   }
// }
