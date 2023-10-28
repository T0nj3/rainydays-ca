const images = [
    "Images/RainyDays_Jacket2.jpg",
    "Images/RainyDays_Jacket7.jpg",
    "Images/RainyDays_Jacket4.jpg"
  ];
  
  let currentIndex = 0;
  
  function changeImage() {
    const component = document.querySelector(".component");
    const imagesList = component.querySelectorAll("img");
  
    imagesList.forEach((image, index) => {
      if (index === currentIndex) {
        image.style.opacity = 1;
      } else {
        image.style.opacity = 0;
      }
    });
  
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  window.addEventListener("load", function () {
    setInterval(changeImage, 1000);
  });
  