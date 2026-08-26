(function () {
  'use strict';

  // Sticky header shadow on scroll
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile hamburger toggle
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = nav.offsetHeight;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.parentElement;
      var isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(function (faq) {
        faq.classList.remove('open');
      });

      // Open clicked (if wasn't already open)
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Animated counters with IntersectionObserver
  var counters = document.querySelectorAll('.stat-number');
  var animated = new Set();

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var duration = 1500;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(start + (target - start) * eased);
      el.textContent = prefix + current;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animated.has(entry.target)) {
          animated.add(entry.target);
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  } else {
    // Fallback: animate all immediately
    counters.forEach(function (counter) {
      animateCounter(counter);
    });
  }

  // Scroll-triggered fade-in animations
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // Demo form submission
  var LEADENGINE_URL = 'https://app.anvilresponder.com';
  var CLIENT_ID = '1';
  // TODO (2026-08-26, still needs a real value): copy the real webhook key
  // from the logged-in dashboard's Settings -> Integrations card and paste
  // it here. This form has been silently 401ing on every real submission
  // since webhook auth was added — see LAND-01 in security-audit-2026-08-25.md.
  // This key is meant to be public/embeddable (same one every client copies
  // into their own site's widget snippet) — safe to hardcode here once set.
  var API_KEY = 'PASTE_CLIENT_1_WEBHOOK_API_KEY_HERE';

  var form = document.getElementById('demo-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    var formData = {
      client_id: CLIENT_ID,
      api_key: API_KEY,
      name: form.querySelector('[name="name"]').value,
      email: form.querySelector('[name="email"]').value,
      phone: form.querySelector('[name="phone"]').value,
      message: 'Demo request from ' + form.querySelector('[name="company"]').value
    };

    fetch(LEADENGINE_URL + '/webhook/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-API-Key': API_KEY },
      body: JSON.stringify(formData)
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then(function () {
        btn.textContent = 'Sent! We\'ll be in touch.';
        btn.classList.add('submitted');
        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.classList.remove('submitted');
          form.reset();
        }, 4000);
      })
      .catch(function () {
        btn.textContent = 'Something went wrong. Please try again.';
        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 3000);
      });
  });
})();
