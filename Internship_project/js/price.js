
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

  const yourResort = {
      name: "🌊 BlueWave Resort",
      price: "$49-$89 per person",
      rides: "18 thrilling attractions",
      food: "4.7★ (500+ reviews)",
      lockers: "Free for all guests",
      special: "LED Rain Dance Arena",
      link: "#"
    };

    const competitors = {
      "imagica": {
        name: "Imagicaa Water Park",
        price: "$59-$109 per person",
        rides: "15 attractions",
        food: "4.2★ (300+ reviews)",
        lockers: "$5 per locker",
        special: "Wave Pool",
        link: "https://www.imagicaaworld.com/water-park/",
        advantages: [
          "Lower prices across all packages",
          "Free lockers (vs $5 at Imagicaa)",
          "3 more major attractions",
          "Higher rated food options",
          "Unique LED Rain Dance experience"
        ]
      },
      "great escape": {
        name: "The Great Escape Water Park",
        price: "$45-$95 per person",
        rides: "12 attractions",
        food: "4.0★ (200+ reviews)",
        lockers: "$3 per locker",
        special: "Family Raft Ride",
        link: "http://www.greatescape.co.in/",
        advantages: [
          "More rides (18 vs 12)",
          "Includes exclusive LED Rain Dance",
          "Free lockers (vs $3 charge)",
          "Higher cleanliness ratings",
          "Better accessibility features"
        ]
      },
      "wet'n'wild": {
        name: "Wet'n'Wild Phoenix",
        price: "$54-$99 per person",
        rides: "20 attractions",
        food: "4.3★ (400+ reviews)",
        lockers: "$6 per locker",
        special: "Tornado Slide",
        link: "https://www.wetnwildphoenix.com/",
        advantages: [
          "Comparable pricing with more value",
          "Free lockers (vs $6 elsewhere)",
          "Shorter wait times for rides",
          "More shaded relaxation areas",
          "Free WiFi throughout park"
        ]
      }
    };

    document.getElementById("searchBar").addEventListener("input", function(e) {
      const query = e.target.value.toLowerCase().trim();
      const competitorKey = Object.keys(competitors).find(name => query.includes(name));

      const resultDiv = document.getElementById("comparisonResult");
      const notFound = document.getElementById("notFoundMsg");
      
      resultDiv.innerHTML = "";
      notFound.classList.add("d-none");

      if (competitorKey) {
        const comp = competitors[competitorKey];
        
        resultDiv.innerHTML = `
          <div class="col-md-6">
            <div class="comparison-card highlight-card">
              <div class="resort-name text-primary">${yourResort.name}</div>
              <div class="feature-item">
                <span class="feature-label">Price:</span>
                <span>${yourResort.price}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Rides:</span>
                <span>${yourResort.rides}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Food Rating:</span>
                <span>${yourResort.food}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Lockers:</span>
                <span>${yourResort.lockers}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Special:</span>
                <span>${yourResort.special}</span>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="comparison-card">
              <div class="resort-name">${comp.name}</div>
              <div class="feature-item">
                <span class="feature-label">Price:</span>
                <span>${comp.price}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Rides:</span>
                <span>${comp.rides}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Food Rating:</span>
                <span>${comp.food}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Lockers:</span>
                <span>${comp.lockers}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Special:</span>
                <span>${comp.special}</span>
              </div>
              <div class="feature-item mt-3">
                <span class="feature-label">Website:</span>
                <a href="${comp.link}" target="_blank">Visit ${comp.name.split(' ')[0]}</a>
              </div>
              
              <hr class="my-3">
              
              <h6 class="fw-bold">Why Choose BlueWave?</h6>
              <ul class="advantage-list">
               ${comp.advantages.map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>
          </div>
        `;
      } else if (query.length >= 3) {
        notFound.classList.remove("d-none");
      } else {
        // Show default comparison view
        resultDiv.innerHTML = `
          <div class="col-md-6">
            <div class="comparison-card highlight-card">
              <div class="resort-name text-primary">${yourResort.name}</div>
              <div class="feature-item">
                <span class="feature-label">Price:</span>
                <span>${yourResort.price}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Rides:</span>
                <span>${yourResort.rides}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Food Rating:</span>
                <span>${yourResort.food}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Lockers:</span>
                <span>${yourResort.lockers}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Special:</span>
                <span>${yourResort.special}</span>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="comparison-card">
              <div class="resort-name">Search for a competitor to compare</div>
              <p class="text-muted">Try searching for:</p>
              <ul class="advantage-list">
                <li>Imagicaa Water Park</li>
                <li>Great Escape Water Park</li>
                <li>Wet'n'Wild Phoenix</li>
                <li>Typhoon Lagoon</li>
              </ul>
            </div>
          </div>
        `;
      }
    });

