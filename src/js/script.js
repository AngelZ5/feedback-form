document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".stars i");

  stars.forEach((star, index1) => {
    star.addEventListener("mouseenter", () => {
      stars.forEach((star, index2) => {
        star.classList.toggle("active", index1 >= index2);
      });
    });

    star.addEventListener("mouseleave", () => {
      stars.forEach((star) => {
        star.classList.remove("active");
      });
    });

    star.addEventListener("click", () => {
    
      document.body.innerHTML = "";

      
      const thanksMessage = document.createElement("div");
      thanksMessage.classList.add("thanks-message");
      thanksMessage.innerHTML = `
          <h2>Thank you for your feedback!</h2>
          <p>We appreciate your time and opinion.</p>
          <a href="./index.html">Back to Home</a>
        `;
      document.body.appendChild(thanksMessage);
    });
  });
});
