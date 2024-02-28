document.addEventListener("DOMContentLoaded", function () {
  const subscribeForm = document.querySelector(".subscribe__form");

  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const userEmail = subscribeForm.querySelector("input[type='text']").value;

    alert(`Thank you for subscribing! You will receive latest news at ${userEmail}.`);

    subscribeForm.reset(); // Reset the form after submission
  });
});

  
  