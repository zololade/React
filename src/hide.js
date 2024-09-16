// import { books } from "./books";
function imageHide(e) {
  const imageDetails = document.getElementsByClassName("image-details")[0];
  const body = document.getElementsByTagName("body")[0];
  const elVisible = document.querySelectorAll(".about-img");
  imageDetails.classList.remove("active");
  body.classList.remove("active");
  (function () {
    elVisible.forEach((item, index) => {
      return elVisible[index].classList.remove("active");
    });
  })();
}

export default imageHide;
