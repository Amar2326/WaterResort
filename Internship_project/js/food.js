  
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
      document.querySelectorAll(".hero .food-section").forEach(sec => sec.classList.remove("active"));
      document.getElementById(type).classList.add("active");
      document.querySelectorAll(".food-cards .food-section").forEach(sec => {
        sec.classList.add("d-none"); sec.classList.remove("active");
      });
      document.getElementById(type + "-cards").classList.remove("d-none");
      document.getElementById(type + "-cards").classList.add("active");
    }