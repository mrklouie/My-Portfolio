const contactForm = document.getElementById("contact-form");

emailjs.init("M9298yXyAIXrIDjEb");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  this.contact_number.value = (Math.random() * 100000) | 0;
  emailjs
    .sendForm("service_2wpv9hc", "contact_form", this)
    .then(success, failure);
});

function success(result) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your email was sent!",
    showConfirmButton: false,
    timer: 1500,
  });
  document.querySelectorAll("input").forEach((item) => {
    item.value = "";
  });
  document.querySelectorAll("textarea").forEach((item) => {
    item.value = "";
  });
  console.log(result);
}

function failure(result) {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Your email was sent!",
    showConfirmButton: false,
    timer: 1500,
  });
  console.log(result.text);
}
