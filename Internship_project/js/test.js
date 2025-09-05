document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Room card hover effect enhancement
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.room-img-container img').style.transform = 'scale(1.1)';
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('.room-img-container img').style.transform = 'scale(1)';
        });
    });

    // Active tab persistence
    const roomTabs = document.querySelector('#roomTabs');
    if (roomTabs) {
        roomTabs.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                localStorage.setItem('activeRoomTab', e.target.getAttribute('data-bs-target'));
            }
        });

        // Check for saved tab on page load
        const activeTab = localStorage.getItem('activeRoomTab');
        if (activeTab) {
            const tabTrigger = document.querySelector([data-bs-target="${activeTab}"]);
            if (tabTrigger) {
                bootstrap.Tab.getInstance(tabTrigger).show();
            }
        }
    }
});
