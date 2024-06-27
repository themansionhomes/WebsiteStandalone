data = {
  1: ["img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg"],
  2: ["img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg"],
  3: ["img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg"],
  4: ["img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg"],
  5: ["img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg"],
  6: ["img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg", "img1.jpg"],
};

function addCarouselItem(imageSrc, altText) {
  // Create a new carousel item
  var carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");

  // Create an image element
  var img = document.createElement("img");
  img.classList.add("d-block", "w-100");
  img.src = imageSrc;
  img.alt = altText;

  // Append the image to the carousel item
  carouselItem.appendChild(img);

  // Append the carousel item to the carousel inner
  var carouselInner = document.querySelector(".carousel-inner");
  carouselInner.appendChild(carouselItem);
}
function showCarousel(id) {
  data[id].forEach((element) => {
    addCarouselItem(element, "img");
  });
  var carouselOverlay = document.getElementById("carouselOverlay");
  if (carouselOverlay.style.display === "none") {
    carouselOverlay.style.display = "block";
  } else {
    carouselOverlay.style.display = "none";
  }
}

document
  .getElementById("closeCarouselButton")
  .addEventListener("click", function () {
    var carouselOverlay = document.getElementById("carouselOverlay");
    carouselOverlay.style.display = "none";
  });
