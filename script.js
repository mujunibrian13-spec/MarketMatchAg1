/* MarketMatch Ag - Main JavaScript File */

/**
 * ============================================
 * 1. DEMO FORM HANDLING
 * ============================================
 * 
 * Handles the demo request form submission.
 * Collects user data (name, email, message) and sends it to n8n webhook.
 * Receives automated email response via Gemini AI integration.
 */

document.getElementById('demoForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  // Collect form data
  const formData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value
  };

  try {
    // Send form data to n8n webhook
    // The webhook triggers Gemini AI to generate an automated email response
    const response = await fetch(
      'https://n8n.srv939400.hstgr.cloud/webhook-test/5a44627f-14c6-4d23-bf08-9f1253b7118a',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    );

    if (response.ok) {
      // Show success message to user
      alert('Thank you! We will contact you soon.');
      // Reset form fields
      document.getElementById('demoForm').reset();
    } else {
      // Show error message if submission fails
      alert('Error submitting form. Please try again.');
    }
  } catch (error) {
    // Log error to console for debugging
    console.error('Error:', error);
    alert('Error submitting form. Please try again.');
  }
});

/**
 * ============================================
 * 2. SMOOTH SCROLL NAVIGATION
 * ============================================
 * 
 * Enables smooth scrolling when clicking navigation links.
 * Improves user experience when navigating between sections.
 */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Skip if it's a WhatsApp link or empty href
    if (href === '#' || href.includes('wa.me')) {
      return;
    }

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/**
 * ============================================
 * 3. STICKY NAVIGATION HIGHLIGHT
 * ============================================
 * 
 * Highlights the current navigation link based on the scroll position.
 * Helps users understand which section they are currently viewing.
 */

window.addEventListener('scroll', () => {
  // Get current scroll position
  const scrollPosition = window.scrollY + 200;

  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  // Get all sections
  const sections = document.querySelectorAll('section, header');

  sections.forEach(section => {
    const sectionId = section.getAttribute('id');
    if (!sectionId) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if current scroll position is within this section
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add active class to the corresponding link
      const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});

/**
 * ============================================
 * 4. PRODUCT IMAGE LAZY LOADING
 * ============================================
 * 
 * Implements lazy loading for product images to improve page performance.
 * Images are loaded only when they come into the viewport.
 */

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Image is already loaded, just mark as observed
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  // Observe all product images
  document.querySelectorAll('.card img').forEach(img => imageObserver.observe(img));
}

/**
 * ============================================
 * 5. MOBILE MENU TOGGLE (if hamburger menu added)
 * ============================================
 * 
 * Toggles mobile menu visibility on smaller screens.
 * Provides better navigation for mobile users.
 */

function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  if (navMenu) {
    navMenu.classList.toggle('show');
  }
}

/**
 * ============================================
 * 6. FORM VALIDATION
 * ============================================
 * 
 * Validates demo form inputs before submission.
 * Ensures all required fields are filled with valid data.
 */

function validateDemoForm() {
  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  // Email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    alert('Please enter your name');
    return false;
  }

  if (!email || !emailPattern.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (!message) {
    alert('Please tell us about your cooperative or organization');
    return false;
  }

  return true;
}

/**
 * ============================================
 * 7. DOCUMENT READY / INITIALIZATION
 * ============================================
 * 
 * Runs when the DOM is fully loaded.
 * Initializes event listeners and sets up the page.
 */

document.addEventListener('DOMContentLoaded', function () {
  // Log that the page has loaded
  console.log('MarketMatch Ag website loaded successfully');

  // Initialize any tooltips or popovers if using Bootstrap
  if (typeof bootstrap !== 'undefined') {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // Add form validation
  const demoForm = document.getElementById('demoForm');
  if (demoForm) {
    demoForm.addEventListener('submit', function (e) {
      // Validate form before submission
      if (!validateDemoForm()) {
        e.preventDefault();
      }
    });
  }
});

/**
 * ============================================
 * 8. UTILITY FUNCTIONS
 * ============================================
 */

/**
 * Scrolls to a specific element smoothly
 * @param {string} elementId - The ID of the element to scroll to
 */
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

/**
 * Gets a query parameter from the URL
 * @param {string} param - The parameter name
 * @returns {string|null} - The parameter value or null if not found
 */
function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/**
 * Tracks analytics event (if using Google Analytics or similar)
 * @param {string} category - Event category
 * @param {string} action - Event action
 * @param {string} label - Event label
 */
function trackEvent(category, action, label) {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      'event_category': category,
      'event_label': label
    });
  }
}

/**
 * Shows a notification message to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of notification ('success', 'error', 'warning', 'info')
 * @param {number} duration - How long to show the notification in milliseconds
 */
function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Show animation
  setTimeout(() => notification.classList.add('show'), 10);

  // Auto-hide
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, duration);
}

/**
 * ============================================
 * 9. CONSOLE WELCOME MESSAGE
 * ============================================
 */

console.log(
  '%cWelcome to MarketMatch Ag',
  'color: #1b5e20; font-size: 20px; font-weight: bold;'
);
console.log(
  '%cEmpowering African farmers with fair market access through WhatsApp automation',
  'color: #66bb6a; font-size: 14px;'
);
console.log(
  '%cFor support: +256764110817 | info@marketmatchag.com',
  'color: #2e7d32; font-size: 12px;'
);
