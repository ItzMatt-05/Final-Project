document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("volunteerBtn");
  const form = document.getElementById("volunteerForm");

  button.addEventListener("click", () => {
    form.style.display = "block";
    button.style.display = "none";
  });

  const image = document.getElementById("charityImg");
  const extraInfo = document.getElementById("extraInfo");

  image.addEventListener("mouseenter", () => {
    extraInfo.style.display = "block";
  });

  image.addEventListener("mouseleave", () => {
    extraInfo.style.display = "none";
  });
});                       
