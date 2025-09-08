const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn === "true") {
  document.getElementById("loginLink").classList.add("d-none");
  document.getElementById("logoutItem").classList.remove("d-none");
}
document.getElementById("bookBtn").addEventListener("click", function () {
  if (isLoggedIn === "true") window.location.href = "booking.html";
  else window.location.href = "login.html";
});
document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
});
function showSection(type) {
  document
    .querySelectorAll(".hero .food-section")
    .forEach((sec) => sec.classList.remove("active"));
  document.getElementById(type).classList.add("active");
  document.querySelectorAll(".food-cards .food-section").forEach((sec) => {
    sec.classList.add("d-none");
    sec.classList.remove("active");
  });
  document.getElementById(type + "-cards").classList.remove("d-none");
  document.getElementById(type + "-cards").classList.add("active");
}
 document.querySelectorAll(".faq-item").forEach(item => {
  let icon = item.querySelector(".faq-icon");
  let answer = item.querySelector(".faq-answer");

  item.addEventListener("click", () => {
    let isOpen = answer.style.display === "block";

    // Sare answers close karo
    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
    document.querySelectorAll(".faq-icon").forEach(ic => ic.textContent = "+");

    // Agar pehle se open nahi hai to open karo
    if (!isOpen) {
      answer.style.display = "block";
      icon.textContent = "-";
    }
  });
});

