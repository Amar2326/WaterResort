// Filtering logic
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const rideCards = document.querySelectorAll(".ride-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      rideCards.forEach(card => {
        const category = card.getAttribute("data-category");

        if (filter === "All" || category === filter) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });
});

// Enlarge image modal logic
document.querySelectorAll(".enlarge-img").forEach(img => {
  img.addEventListener("click", function () {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = this.src;
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
  });
});
// Check login status
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    document.getElementById("loginLink").classList.add("d-none");
    document.getElementById("logoutItem").classList.remove("d-none");
  }

  // Book Now button logic
  document.getElementById("bookBtn").addEventListener("click", function () {
    if (isLoggedIn === "true") {
      window.location.href = "booking.html"; // booking page
    } else {
      window.location.href = "login.html"; // redirect to login if not signed in
    }
  });

  // Logout button logic
  document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html"; // redirect to home after logout
  });

