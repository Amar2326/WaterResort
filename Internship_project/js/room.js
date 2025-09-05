    
      document.addEventListener('DOMContentLoaded', function() {
        const filterButtons = document.querySelectorAll('.room-filter-btn');
        const roomItems = document.querySelectorAll('.room-item');
        
        // Initially hide non-AC rooms
        roomItems.forEach(item => {
          if (item.getAttribute('data-type') === 'non-ac') {
            item.style.display = 'none';
          }
        });
        
        filterButtons.forEach(button => {
          button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide rooms based on type
            roomItems.forEach(item => {
              if (item.getAttribute('data-type') === type) {
                item.style.display = 'block';
              } else {
                item.style.display = 'none';
              }
            });
          });
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
